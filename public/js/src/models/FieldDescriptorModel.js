define(function (require) {
    'use strict';
    var _ = require('underscore');
    var BaseModel = require('models/BaseModel');

    var FieldDescriptorModel = BaseModel.extend({

        initialize: function(attr) {
            this.set('id', attr.Id);
        },

        validate: function() {
            
        }
    });
    return FieldDescriptorModel;
});
