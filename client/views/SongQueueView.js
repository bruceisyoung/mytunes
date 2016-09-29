// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  },

  render: function() {
    // return this.$el;
    this.collection.forEach(function(song) {
      console.log(song);
      var songQueueEntryView = new SongQueueEntryView(song);
      this.$el.append(songQueueEntryView.render());
    }, this);
    // var html = [
    //   '<tr>',
    //   '</tr>'
    // ].join('');
    // console.log('');
    // this.$el.html(html);
    // this.$el.find('tr').append(this.collection.map(function(song) {
    //   return `<td>${song.get('artist')}</td><td>${song.get('title')}</td>`;
    // }));
  }

});
