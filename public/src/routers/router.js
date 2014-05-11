define([
  'backbone',
  'views/index'
  ], function(Backbone, IndexView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({

      routes: {
        '': 'index'
      },

      initialize: function() {
        console.log('Router Initialised!');

        this.cached = {
          index: undefined
        }
      },

      index: function() {
        console.log('Index function called!');
        this.cached.index = this.cached.index || new IndexView;
      },

    });

    return AppRouter;
  });
