var Router = Backbone.Router.extend({
  routes: {
    'home': 'home',
    'test': 'test'
  },
  home: function () {
    this.loadView(new MonkeyView({model: {name: 'calvin'}}));
  },
  test: function () {
    this.loadView(new testView({model: {name: 'calvin'}}));
  },
  loadView: function (view) {
    this.view && this.view.remove();
    this.view = view;
  }
});
