// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst(); 
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() {
      this.remove();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function() {    
    this.models[0].play(); 
  },

  removeSong: function(song) {
    var index;
    for (var i = 0; this.models.length; i++) {
      if (_.isEqual(this.models[i], song)) {
        index = i;
        break;
      }
    }
    this.models = this.models.slice(0, index).concat(this.models.slice(index + 1));
    this.length = this.models.length;
  }

});