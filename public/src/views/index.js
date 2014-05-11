define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/index.html',
  'views/slides',
  'views/testimonials'
  ], function ($, _, Backbone, Handlebars, IndexTemplate, SlidesView, TestimonialsView) {
    'use strict';

    var IndexView = Backbone.View.extend({
      el: '#akbuildingsolutions',

      template: Handlebars.compile(IndexTemplate),

      model: {
        companyName: 'AK Building Solutions Ltd',
        companyAddressOne: '13 Bowhay Road',
        companyAddressTwo: 'Exeter',
        companyAddressThree: 'Devon',
        companyPostcode: 'EX2 1NZ',
        companyEmail: 'akbuildingsolutions@gmail.com',
        companyTagLine: 'The Shutter Specalists',
        companyTelContactOne: '(07902) 041405',
        companyTelContactTwo: '(07474) 313593',
        companyNumber: '08908025'
      },

      initialize: function() {
        this.render();
      },

      render: function () {
        this.$el.html(this.template(this.model));
        this.slides = new SlidesView();
        this.testimonials = new TestimonialsView();
        return this;
      }

    });

    return IndexView;
  });
