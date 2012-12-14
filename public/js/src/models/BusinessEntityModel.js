define(function (require) {
    'use script';
    var _ = require('underscore');
    var BaseModel = require('models/BaseModel');

    var BusinessEntityModel = BaseModel.extend({

        url: function () {
            return 'http://bcws-apent-t01/Edicttest/api/businessentity/' + this.id;
        },

        parse: function (response) {
            var parsedResponse;
            if (response.Fields) {
                parsedResponse = { id: response.ID };
                _.each(response.Fields.FieldItems, function (field) {
                    parsedResponse[field.Name] = field.Value;
                });
                return parsedResponse;
            }
            return response;
        }
    });
    window.BusinessEntityModel = BusinessEntityModel;
    return BusinessEntityModel;
});
