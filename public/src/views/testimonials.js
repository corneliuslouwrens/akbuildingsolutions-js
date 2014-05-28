define([
  'jquery',
  'underscore',
  'backbone',
  'royalSlider',
  'collections/testimonials',
  'views/testimonial'
  ], function ($, _, Backbone, RoyalSlider, Testimonials, TestimonialView) {
    'use strict';

    var TestimonialsView = Backbone.View.extend({

      el: 'div.royalSlider.testimonials',

      initialize: function() {
        this.collection = new Testimonials();
        this.collection.add([
          { text: 'We were very pleased with the services that the company delivered and found that they are professional to the utmost in the way they presented themselves and the work that was carried out.', person: 'Clair Meintjies', location: 'Exeter Court Hotel' },
          { text: 'AK Building Solutions completed the installation within in a few days of giving them the go ahead. I was more than pleased with the quality of the shutters, the guys from AK were very professional from start to finish, and I would have no hesitation in using them again.' }
        ]);

        this.render();
      },

      render: function() {
        var self = this;
        this.collection.each(function(testimonial) {
          var testimonialView = new TestimonialView({model: testimonial});
          self.$el.append(testimonialView.render().el);
        });

        this.initialiseSlider();
        return this;
      },

      initialiseSlider: function() {
        this.$el.royalSlider({
          autoPlay: {
            enabled: true,
            delay: 10000,
            pauseOnHover: true
          },
          autoHeight:true,
          slidesSpacing: 0,
          arrowsNav: false,
          randomizeSlides: true,
          loopRewind: true
        });
      }

    });

    return TestimonialsView;
  });
