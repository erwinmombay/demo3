require.config({
    paths: {
        jquery: '../libs/jquery/jquery',
        underscore: '../libs/underscore/underscore',
        backbone: '../libs/backbone/backbone',
        handlebars: '../libs/handlebars/handlebars.full',
        text: '../libs/require/text',
        templates: '../templates',
        models: 'models',
        views: 'views',
        collections: 'collections',
        routers: 'routers',
        utils: 'utils',
        kendo: '../libs/kendoui/kendo.web.min',
        kendoBackbone: '../libs/backbone/kendo.backbone'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone',
            init: function(_, $) {
                _.noConflict();
                $.noConflict();
                return this.Backbone.noConflict();
            }
        },
        'kendo': {
            deps: ['jquery'],
            exports: 'kendo'
        },
        'templates': ['handlebars'],
        'kendoBackbone': ['kendo']
    }
});
