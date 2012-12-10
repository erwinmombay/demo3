/*global define: true*/
define(function(require) {
    'use script';
    var Backbone = require('backbone');
    
    var BusinessEntityModel = Backbone.Model.extend({

        initialize: function(attr) {
            
        }
    });
    window.BusinessEntityModel = BusinessEntityModel;
    return BusinessEntityModel;
});
