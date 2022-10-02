CKEDITOR.editorConfig = function( config ) {

    config.language = 'en';

    config.allowedContent = true;
    config.toolbar = 'custom';
    config.extraPlugins = 'codeTag';
    config.toolbar_custom = [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
        { name: 'about', items: [ 'About' ] },
        { name: 'codeTag', items: [ 'codeTag' ] }
    ];
}
