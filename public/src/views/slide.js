define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/slide.html'
  ], function ($, _, Backbone, Slide) {
    'use strict';

    var Slide = Backbone.View.extend({

      tagName: 'div',

      className: 'rsContent slide-image',

      template: Handlebars.compile(Slide),

      render: function() {
        var slide = this.template(this.model.toJSON());
        this.$el.html(slide);
        return this;
      }

    });

    return Slide;
  });
