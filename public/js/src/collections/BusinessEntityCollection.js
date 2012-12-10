/*global define: true*/
define(function(require) {
    'use script';
    var Backbone = require('backbone');

    var BusinessEntityModel = require('models/BusinessEntityModel');

    var BusinessEntityCollection = Backbone.Collection.extend({

        model: BusinessEntityModel,

        url: 'api/document',

        initialize: function() {
            
        }
    });
    window.BusinessEntityCollection = BusinessEntityCollection;
    return BusinessEntityCollection;
});
