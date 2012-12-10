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

    var MainView = Backbone.View.extend({

        initialize: function(options) {
        },

        render: function() {
            var self = this;
            var collection = new BusinessEntityCollection();
            window.collection = collection;
            collection.fetch({
                success: function() {
                    var tbl = new TableView({
                        dataCollection: collection,
                        headerNames: ['name', 'field1'],
                        attrMap: ['name', 'field1']
                    });
                    self.$el.append(tbl.$el);
                    tbl.render();
                }
            });
            return this;
        }
    });
    return {
        instance: new MainView({ el: $('#main-view') })
    };
});
