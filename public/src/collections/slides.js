define([
  'underscore',
  'backbone',
  'models/slide'
  ], function (_, Backbone, Slide) {
    'use strict';

    var Slides = Backbone.Collection.extend({
      model: Slide
    });

    return Slides;
  });
