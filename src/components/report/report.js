var tableify = require('tableify');
export default {
    name: 'Report',
    data() {
        return {
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
            table_html: null
        }
    },
    methods: {
        getReport: function (project, date) {
            const request = new Request(`${process.env.VUE_APP_ROOT_API}/?project=${encodeURIComponent(project)}&date=${encodeURIComponent(date)}`, {
                method: 'GET',
            });
            const self = this;
            fetch(request).then(async response => {
                if (response.status === 200) {
                    const result = await response.json();
                    const results = JSON.parse(result.body)['results'];
                    self.table_html = tableify(results['table']).replace("<table", "<table class='table'")
                    self.project = results['project']
                    self.location = results['location']
                    self.file_type = results['file_type']
                    self.frame_rate = results['frame_rate']
                    self.sound_mixer = results['sound_mixer']
                    self.phone = results['phone']
                    self.email = results['email']
                    self.bit_depth = results['bit_depth']
                    self.sample_rate = results['sample_rate']
                    self.director = results['director']
                    self.producer = results['producer']
                    self.roll = results['roll']
                    self.media = results['media']
                    self.tone = results['tone']
                } else {
                    response = await response.json();
                    self.errorMessage = response['error'];
                    setTimeout(
                        function () {
                            self.errorMessage = null;
                        }, 8000);
                }
            })
        }
    },
    mounted: function () {
        this.getReport(this.$route.query.project, this.$route.query.date);
    }
}