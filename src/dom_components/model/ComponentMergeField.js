const Component = require('./Component');

module.exports = Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      type: 'mergefield',
      name: 'Merge Field',
      tagName: 'span',
      badgable: 1,
      textable: 1,
      editable: 1,
      draggable: 1,
      droppable: 0,
      highlightable: 1,
      removable: 1,
      /*style: {
      'display': 'inline-block',
      'padding': '3px 1px',
      'color': '#007296',
      'font-family': 'arial',
      'font-size': '0.7rem'
    },*/
      attributes: {
        'data-datatype': 'mergefield',
        'data-gjs-type': 'mergefield',
        contenteditable: 'false'
      },
      content: '{MERGE FIELD}'
    },

    initialize(o, opt) {
      Component.prototype.initialize.apply(this, arguments);
    }
  },
  {
    /**
     * Detect if the passed element is a valid component.
     * In case the element is valid an object abstracted
     * from the element will be returned
     * @param {HTMLElement}
     * @return {Object}
     * @private
     */
    isComponent(el) {
      var result = '';
      if (el.tagName === 'SPAN' && el.dataset.mergefield === '1') {
        result = { type: 'mergefield' };
      }
      return result;
    }
  }
);
