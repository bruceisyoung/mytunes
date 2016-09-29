// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,


//original songs is just one song
  initialize: function() {
    var songReq = new XMLHttpRequest();
    songReq.open('GET', 'https://api.parse.com/1/classes/songs/', true);

    var loadedCount = 0;
    songReq.onload = (function () {
      results = JSON.parse(songReq.responseText).results;
      
      if (loadedCount < results.length) {
        this.add(results[loadedCount]);
        loadedCount++;
      } 
      if (loadedCount === results.length) {
        this.trigger('fetched', this);
      }
    }).bind(this);
 
  }
});