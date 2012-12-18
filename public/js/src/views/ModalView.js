define(function(require) {
    'use strict';
    var $ = require('jquery');
    var Backbone = require('backbone');

    var ModalView = Backbone.View.extend({

        events: {

        },

        initialize: function(options) {
            this.$el.modal({ keyboard: true, show: false });
            this.$body = this.$('.modal-body');

            this._bindHandlers();
        },

        _bindHandlers: function() {
            this.$el.on('hidden', this._onHide);
        },

        _unbindHandlers: function() {
            this.$el.off('hidden', this._onHide);
        },

        remove: function() {
            this._unbindHandlers();
            Backbone.View.prototype.remove.call(this);
        },

        render: function(body) {
            this.$body.empty();
            this.$body.append(body);
            this.show();
            return this;
        },

        show: function() {
            this.$el.modal('show');
        },

        hide: function() {
            this.$el.modal('hide');
        },

        toggle: function() {
            this.$el.modal('toggle');
        },

        _onHide: function() {
        }
    });

    return ModalView;
});