// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template(this.attributes));
    console.log('el', this.$el);
    return this.$el;
  }
});
