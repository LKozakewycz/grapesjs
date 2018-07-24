var Backbone = require('backbone');
var ComponentView = require('./ComponentTextView');

module.exports = ComponentView.extend({
  render(...args) {
    ComponentView.prototype.render.apply(this, args);
    return this;
  }
});
