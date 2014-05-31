define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/contact.html',
  'views/slides',
  'views/testimonials'
], function ($, _, Backbone, Handlebars, ContactTemplate) {
    'use strict';

    var ContactView = Backbone.View.extend({
      el: '#contact-form',

      template: Handlebars.compile(ContactTemplate),

      events: {
        'blur input[name=name]': 'validateName',
        'blur input[name=email]': 'validateEmail',
        'click button[name=send]': 'sendEmail'
      },

      initialize: function() {
        this.render();

        // elements
        this.$contact_container = this.$el.find('div#contact');
        this.$form              = this.$el.find('form#contact-form');
        this.$name              = this.$form.find('input[name=name]');
        this.$email             = this.$form.find('input[name=email]');
        this.$telephone         = this.$form.find('input[name=telephone]');
        this.$enquiry           = this.$form.find('textarea[name=enquiry]');
        this.$button            = this.$form.find('button[name=send]');

        // validation flags
        this.nameValidated  = false;
        this.emailValidated = false;
      },

      render: function () {
        this.$el.html(this.template(this.model));
        return this;
      },

      htmlEntities: function(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      },

      sendEmail: function(e) {
        e.preventDefault();

        // disable button to prevent further clicks
        this.$button.attr('disabled', 'disabled');

        var name      = this.htmlEntities(this.$name.val());
        var email     = this.htmlEntities(this.$email.val());
        var telephone = this.htmlEntities(this.$email.val());
        var enquiry   = this.htmlEntities(this.$enquiry.val());

        var self = this;

        $.ajax({
          type: "POST",
          url: 'contact',
          data: {
            name  : name,
            email : email,
            telephone : telephone,
            text: enquiry
          },
          dataType: 'json',
          success: function() {
            self.$form.hide();
            self.$contact_container.append('<p>Thanks ' + name +', We\'ll be in touch as soon as possible.</p>');
          },
          error: function() {
            self.$form.hide();
            self.$contact_container.append('<p>Sorry ' + name +', there was an error sending the email, please try again later.</p>');
          }
        });
      },

      validateName: function() {
        this.$name.removeClass('has-success has-error');
        if(!this.$name.val()) {
          this.$name.addClass('has-error');
          this.nameValidated = false;
        } else {
          this.$name.addClass('has-success');
          this.nameValidated = true;
        }

        this.updateSendButton();
      },

      validateEmail: function() {
        this.$email.removeClass('has-success has-error');
        if(!this.$email.val() || !this.validateEmailAddress(this.$email.val())) {
          this.$email.addClass('has-error');
          this.emailValidated = false;
        } else {
          this.$email.addClass('has-success');
          this.emailValidated = true;
        }

        this.updateSendButton();
      },

      validateEmailAddress: function(emailAddress) {
        var re = /\S+@\S+\.\S+/;
        return re.test(emailAddress);
      },

      updateSendButton: function() {
        if(this.nameValidated && this.emailValidated) {
          this.$button.removeAttr('disabled');
        } else {
          this.$button.attr('disabled', 'disabled');
        }
      }

    });

    return ContactView;
  });
