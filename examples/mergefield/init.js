(function() {
  window.editor = grapesjs.init({
    container: '#gjs',
    components: '', // Load template html here
    plugins: [
      'gjs-preset-newsletter'
    ],
    pluginsOpts: {
      'gjs-preset-newsletter': {}
    }
  });

  var panelManager = editor.Panels;

  panelManager.addButton('options', {
    id: 'save-button',
    className: 'save-button',
    command: function (editor) {
      console.log('Saving Email Template...');

      var template = editor.Commands.get('gjs-get-inlined-html').run(editor);
      var params = (new URL(document.location)).searchParams;
      var sessionId = params.get('sessionId');

      Visualforce.remoting.Manager.invokeAction(
        'ls3.EmailTemplateController.saveTemplate',
        'myFirstTemplate',
        template,
        sessionId,
        function(result, event) {
          console.log('Remoting callback');
          console.log(result);
          console.log(event);
        }
      );
    },
    attributes: {
      title: 'Save Email Template'
    }
  });

  editor.setStyle(`ls\\:outputField {
        background: #c9c9ff;
        min-height: 18px;
        min-width: 20px;
        display: inline-block;
        border-radius: 3px;
        }`);


  editor.on('load', function(){
    panelManager.removeButton('options', 'fullscreen');
    console.log(panelManager.getButton('devices-c','deviceMobile'));
    var elClass = panelManager.getButton('devices-c','deviceMobile').attributes.className;
    document.getElementsByClassName(elClass)[0].click();
    //editor.Commands.get('set-device-mobile').run(editor);
  });


  editor.BlockManager.add('mergeFieldBlock', {
    label: 'Merge Field',
    attributes: { class:'gjs-fonts gjs-f-b1' },
    content: {
      type: 'mergefield'
    }
  })


})();
