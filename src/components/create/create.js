let csv = require('csvtojson');

export default {
    name: 'Metadata',
    data() {
        return {
            meta: {
                project: null,
                location: null,
                file_type: null,
                frame_rate: null,
                sound_mixer: null,
                phone: null,
                email: null,
                bit_depth: null,
                sample_rate: null,
                director: null,
                producer: null,
                roll: null,
                media: null,
                tone: null,
            },
            items: [{}],
            state: 'data',
            date: null,
            filename: null,
            errorMessage: null
        }
    },
    methods: {
        getProjectFromFile: function (filename) {
            // Remove fully qualified path
            let temp_name = filename.split("\\");
            // Remove extension
            temp_name = temp_name[temp_name.length - 1].split(".")
            return temp_name[0];
        },
        upload: function (e) {
            e.preventDefault();
            this.meta.project = (this.meta.project == null || this.meta.project.trim() == null) ? this.filename : this.meta.project
            const body = {
                ...this.meta,
                date: this.date ? new Date(this.date).toISOString() : null,
                table: this.items
            }
            Object.keys(body).forEach((k) => {
                if (!body[k] || body[k] == undefined) {
                    body[k] = null
                }
            });
            const request = new Request('https://nj89tl50ic.execute-api.us-east-1.amazonaws.com/dev/', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            const self = this;
            fetch(request).then(async response => {
                if (response.status === 200) {
                    const result = await response.json();
                    this.$router.push({
                        path: '/report',
                        query: {
                            project: result.project,
                            date: result.date
                        }
                    })
                } else {
                    response = await response.json();
                    self.errorMessage = response['error'];
                    setTimeout(
                        function () {
                            self.errorMessage = null;
                        }, 8000);
                }
            })
        },
        onFileChange: function (e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            var reader = new FileReader();
            const self = this;
            reader.onload = function () {
                csv().fromString(reader.result).then(function (json) {
                    self.items = json;
                    self.filename = self.getProjectFromFile(document.getElementById("file").value);
                    if (self.meta.project == null || self.meta.project.trim() == null) {
                        self.meta.project = self.filename;
                    }
                });
            };
            reader.readAsText(files[0]);
        },
        isMetaState: function () {
            return this.state === 'metadata';
        },
        isDataState: function () {
            return this.state === 'data';
        },
    }
}