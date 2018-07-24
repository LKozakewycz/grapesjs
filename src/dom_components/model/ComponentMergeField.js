const Component = require('./Component');

module.exports = Component.extend({
  defaults: {
    ...Component.prototype.defaults,
    type: 'mergefield',
    name: 'Merge Field',
    textable: 1,
    editable: false,
    stylable: false,
    draggable: true,
    droppable: false,
    style: {
      display: 'inline-block',
      padding: '3px 1px',
      color: '#007296',
      'font-family': 'arial',
      'font-size': '0.7rem'
    },
    attributes: {
      'data-datatype': 'mergefield',
      'data-gjs-type': 'mergefield',
      contenteditable: 'false'
    },
    content: '{MERGE FIELD}'
  }
});
