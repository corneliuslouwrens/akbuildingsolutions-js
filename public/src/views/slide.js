define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/slide.html'
], function ($, _, Backbone, Handlebars, Slide) {
    'use strict';

    var SlideView = Backbone.View.extend({

      tagName: 'div',

      className: 'rsContent slide-image',

      template: Handlebars.compile(Slide),

      render: function() {
        var slide = this.template(this.model.toJSON());
        this.$el.html(slide);
        return this;
      }

    });

    return SlideView;
  });
