define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/index.html',
  'views/slides',
  'views/testimonials',
  'views/contact'
  ], function ($, _, Backbone, Handlebars, IndexTemplate, SlidesView, TestimonialsView, ContactView) {
    'use strict';

    var IndexView = Backbone.View.extend({
      el: '#akbuildingsolutions',

      events: {
        'click button.contact': 'focusOnContactForm'
      },

      template: Handlebars.compile(IndexTemplate),

      model: {
        companyName: 'AK Building Solutions Ltd',
        companyAddressOne: '13 Bowhay Lane',
        companyAddressTwo: 'Exeter',
        companyAddressThree: 'Devon',
        companyPostcode: 'EX4 1NZ.',
        companyEmail: 'contact@akbuildingsolutions.com',
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
        this.contact = new ContactView();
        return this;
      },

      focusOnContactForm: function() {
        this.contact.$name.focus();
      }

    });

    return IndexView;
  });
