var ItemView = require('lib/config/item-view');
var App = require('lib/config/application');
var hbs = require('handlebars');
//var $ = require('jquery');
var polyglot = require('lib/utilities/polyglot');
var Tmpl = require('./status.hbs');
var _ = require('lodash');

var View = ItemView.extend({
  template: hbs.compile(Tmpl),

  initialize: function(){

  },

  templateHelpers: function(){
    return {
      status: this.getStatus(),
      message: this.getMessage()
    };
  },

  modelEvents: {
    'change:payment_details': 'render'
  },

  getStatus: function(){
    if(this.model.get('payment_details.paid') === false){
      this.$el.addClass('fail');
      return polyglot.t('titles.unpaid');
    }
    return polyglot.t('titles.to-pay');
  },

  getMessage: function(){
    var messages = this.model.get('payment_details.message');
    if( _.isArray(messages) ){
	  let message = _.last(messages);
	  if(message && typeof message === 'object' && message.notice){
	    message = message.notice;
	  }
	  return message;
    }
    return messages;
  }

});

module.exports = View;
App.prototype.set('POSApp.Checkout.Views.Status', View);