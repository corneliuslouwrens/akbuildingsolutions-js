define([
  'underscore',
  'backbone',
  'models/testimonial'
  ], function (_, Backbone, Testimonial) {
    'use strict';

    var Testimonials = Backbone.Collection.extend({
      model: Testimonial
    });

    return Testimonials;
  });
