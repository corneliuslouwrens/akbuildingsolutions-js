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
          { text:'Great products and services, on time and done to the agreed quote', person: 'Steven Fry', location: 'Exeter' },
          { text:'Great products and services', person: 'Lebron James', location: 'United States' }
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
