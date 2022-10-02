CKEDITOR.plugins.add( 'codeTag', {
  icons: 'codeTag',
  init: function( editor) {
    editor.addCommand( 'wrapCode', {
      exec: function( editor ) {
        editor.insertHtml( '<code>' + editor.getSelection().getSelectedText() + '</code>' );
      }
    });
    editor.ui.addButton( 'codeTag', {
      label: 'Wrap code',
      command: 'wrapCode',
      toolbar: 'insert'
    });
  },

});

