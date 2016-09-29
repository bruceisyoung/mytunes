// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('remove', function() {
      this.render();
    }, this);
  },

  render: function() {
    // return this.$el;
    this.collection.forEach(function(song) {
      var songQueueEntryView = new SongQueueEntryView(song);
      this.$el.append(songQueueEntryView.render());
    }, this);
  }

});
