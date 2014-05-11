define([
  'jquery',
  'underscore',
  'backbone',
  'royalSlider',
  'collections/slides',
  'views/slide'
  ], function ($, _, Backbone, RoyalSlider, Slides, SlideView) {
    'use strict';

    var SlidesView = Backbone.View.extend({

      el: 'div.royalSlider.slides',

      initialize: function() {
        this.collection = new Slides();

        this.collection.add([
          { alt:'Slide Image 1', src: 'img/slider/slider-image-1.jpg' },
          { alt:'Slide Image 1', src: 'img/slider/slider-image-1.jpg' }
        ]);

        this.render();
      },

      render: function() {
        var self = this;

        this.collection.each(function(slide) {
          var slideView = new SlideView({model: slide});
          self.$el.append(slideView.render().el);
        });

        this.initialiseSlider();
        return this;
      },

      initialiseSlider: function() {
        this.$el.royalSlider({
          autoPlay: {
            enabled: true,
            pauseOnHover: true,
            delay: 5000
          },
          imageScaleMode: 'fill',
          slidesSpacing: 10,
          randomizeSlides: true
        });
      },
    });

    return SlidesView;
  });
