/**
 * mainView.js
 * ~~~~~~~~~~~~~~
 *
 * @author erwin.mombay
 */

define(function(require) {
    'use strict';
    var $ = require('jquery');
    var Backbone = require('backbone');

    var TableView = require('views/components/TableView');
    var BusinessEntityCollection = require('collections/BusinessEntityCollection');
    var FieldDescriptorCollection = require('collections/FieldDescriptorCollection');

    var MainView = Backbone.View.extend({
        
        events: {

        },

        render: function() {
            var self = this;
            var collection = new BusinessEntityCollection();
            var collection2 = new FieldDescriptorCollection();
            window.collection = collection;
            window.collection2 = collection2;
            var tbl = new TableView({
                dataCollection: collection,
                headerNames: ['name', 'address1'],
                attrMap: ['name', 'address1']
            });
            self.$el.append(tbl.$el);
            tbl.render();
            collection.fetch();
            collection2.fetch();
            return this;
        }
    });
    return {
        instance: new MainView({ el: $('#main-view') })
    };
});
