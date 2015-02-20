var MonkeyView = Backbone.View.extend({
  tagName: 'article',
  template: _.template($('#monkeyTmpl').text()),
  events: {},
  initialize: function () {
    this.render();
    $('.container').html(this.el)
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var MonkeyCollectionView = Backbone.View.extend({

});


var testView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#tmpl').text()),
  initialize: function () {
    this.render();
    $('.container').html(this.el);
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var MonkeyCollectionView = Backbone.View.extend({

});
