export default {
    name: 'List',
    data() {
        return {
            items: [{}],
            next: null
        }
    },
    methods: {
        getList: function () {
            const url = `${process.env.VUE_APP_ROOT_API}/?${this.next}`;
            const request = new Request(url, {
                method: 'GET'
            });
            const self = this;
            fetch(request).then(async response => {
                if (response.status === 200) {
                    const results = await response.json();
                    const body = JSON.parse(results['body'])
                    const items = body['results']
                    items.forEach(element => {
                        const date_exists = self.items.find(o => o['date'] === element['date']);
                        const project_exists = self.items.find(o => o['project'] === element['project']);
                        if (!date_exists || !project_exists) {
                            self.items.push({
                                project: element['project'],
                                date: element['date']
                            });
                        }
                    });
                    if (body['last_key']) {
                        const new_next = `last_date=${body['last_key']['date']}&last_project=${body['last_key']['project']}`
                        if (new_next !== self.next) {
                            self.next = new_next;
                        } else {
                            self.next = null;
                        }
                    } else {
                        self.next = null;
                    }
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
        this.getList()
    }
}