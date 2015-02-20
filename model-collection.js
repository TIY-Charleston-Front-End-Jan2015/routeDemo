var MonkeyModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collection/monkeyBalls',
  initialize: function () {
    console.log("monkey be here");
  }


});


var MonkeyCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collection/monkeyBalls',
  initialize: function () {
    console.log("collection be here");
  }

});
