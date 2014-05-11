define([
  'underscore',
  'backbone'
  ], function (_, Backbone) {
    'use strict';

    var Testimonial = Backbone.Model.extend({
      defaults: {
        testimonial: null,
        person: null,
        location: null
      }
    });

  return Testimonial;
});
