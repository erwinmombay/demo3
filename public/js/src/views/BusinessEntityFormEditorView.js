define(function(require) {
    'use strict';
    var _ = require('underscore');
    var BaseView = require('views/BaseView');

    var template = require('text!templates/BusinessEntityEditorForm.html');

    var BusinessEntityFormEditorView = BaseView.extend({

        id: 'business-entity-modal',

        className: 'modal hide fade',

        attributes: {
            role: 'dialog',
            tabindex: '-1'
        },

        initialize: function(options) {
            this.$el.modal({ keyboard: true, show: false });
            this.tmpl = Handlebars.compile(template);
            this.$body = null;
        },

        render: function(spec) {
            var item;
            var groups = [];
            this.hide();
            this.$el.empty();
            if (spec && spec.model) {
                _.each(spec.model.attributes, function(value, key) {
                    item = {
                        id: _.uniqueId('formfield_'),
                        label: key,
                        type: 'text',
                        value: value,
                        placeholder: key + '...'
                    };
                    groups.push(item);
                });
                this.$el.append(this.tmpl({
                    groups: groups
                }));
            }
            this.show();
            return this;
        }
    });
    return BusinessEntityFormEditorView;
});
