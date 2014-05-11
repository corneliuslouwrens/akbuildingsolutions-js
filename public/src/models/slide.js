define([
  'underscore',
  'backbone'
  ], function (_, Backbone) {
    'use strict';

    var Slide = Backbone.Model.extend({
      defaults: {
        alt: 'This is sample text',
        src: null
      }
    });

  return Slide;
});
