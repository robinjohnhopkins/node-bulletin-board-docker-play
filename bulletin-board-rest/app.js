new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: []
  },

  ready: function () {
    this.fetchEvents();
    this.fetchColours();
  },

  methods: {

    fetchEventsOriginal: function () {
      var events = [];
      this.$http.get('/api/events')
        .success(function (events) {
          this.$set('events', events);
          console.log("calling GET /api/events");
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
    },

    fetchEvents: function () {
      var events = [];
      this.$http.get('http://localhost:80/api/backEndTest')
        .success(function (events) {
          this.$set('events', events);
          console.log("calling GET /api/events");
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
    },
    fetchColours: function () {
      var colours = [];
      this.$http.get('/api/backEndListColours')
        .success(function (colours) {
          this.$set('colours', colours);
          console.log("calling GET /api/backEndListColours");
          console.log(colours);
        })
        .error(function (err) {
          console.log(err);
        });
    },

    addEvent: function () {
      if (this.event.title.trim()) {
        this.$http.post('/api/events', this.event)
          .success(function (res) {
            this.events.push(this.event);
            console.log('Event added!');
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteEvent: function (id) {
      if (confirm('Are you sure you want to delete this event?')) {        
        this.$http.delete('api/events/' + id)
          .success(function (res) {
            console.log(res);
            var index = this.events.find(x => x.id === id)
            this.events.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
    }
  }
});