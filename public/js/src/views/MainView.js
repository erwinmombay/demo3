define(function(require) {
    'use strict';
    var $ = require('jquery');
    var Backbone = require('backbone');
    var modalHelperTmpl = require('text!templates/Modal.html');

    var TableView = require('views/components/TableView');
    var BusinessEntityModel = require('models/BusinessEntityModel');
    var BusinessEntityCollection = require('collections/BusinessEntityCollection');
    var FieldDescriptorCollection = require('collections/FieldDescriptorCollection');
    var ModalView = require('views/ModalView');

    var MainView = Backbone.View.extend({

        events: {
            'click #add-entity': '_addEntity',
            'click #fetch-collection': '_fetchCollection',
            'click #reset-collection': '_resetCollection'
        },

        initialize: function(options) {
            $('body').append(modalHelperTmpl);
            this.modalView = new ModalView({ el: $('#modal-helper') });
            this.collection = new BusinessEntityCollection();
            this.collection2 = new FieldDescriptorCollection();
            window.modalView = this.modalView;
            window.collection = this.collection;
            window.collection2 = this.collection2;
        },

        render: function() {
            var buttons = [
                '<button id="add-entity" type="button" class="btn btn-primary">Add</button>',
                '<button id="fetch-collection" type="button" class="btn">Fetch</button>',
                '<button id="reset-collection" type="button" class="btn">Reset</button>'
            ].join('');
            this.$el.append(buttons);
            var tbl = new TableView({
                dataCollection: this.collection,
                headerNames: ['code', 'name', 'address1', 'state/provice', 'zip'],
                attrMap: ['code', 'name', 'address1', 'stateOrProvince', 'postalCode']
            });
            this.$el.append(tbl.render().$el);
            return this;
        },

        _addEntity: function() {
            modalView.render('<p>test</p>');
        },

        _fetchCollection: function() {
            this.collection.fetch();
        },

        _resetCollection: function() {
            this.collection.reset();
        }
    });
    return {
        instance: new MainView({ el: $('#main-view') })
    };
});