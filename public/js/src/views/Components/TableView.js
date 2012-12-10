define(function(require) {
    'use script';
    var Backbone = require('backbone');
    var tableTmpl = require('text!templates/TableView.html');
    var TableRowView = require('views/components/TableRowView');

    var tableHdrTmpl = '{{#each header}}<th>{{this}}</th>{{/each}}';
    
    var TreeView = Backbone.View.extend({

        initialize: function(options) {
            this._headerNames = null;
            this._attrMap = null;
            this._dataCollection = null;

            this.$thead = null;
            this.$tbody = null;

            if (options) {
                this._headerNames = options.headerNames;
                this._attrMap = options.attrMap;
                this._dataCollection = options.dataCollection;
            }

            this._dataCollection = this._dataCollection || new Backbone.Collection();

            this._dataCollection.on('reset', this.render, this);
            this._dataCollection.on('add', this.addOne, this);
        },
        
        render: function() {
            this.$el.empty();
            var hdrTmplComp = Handlebars.compile(tableHdrTmpl);
            var hdr = hdrTmplComp({ header: this._headerNames });
            this.$el.append(tableTmpl);
            this.$thead = this.$('thead > tr');
            this.$tbody = this.$('tbody');
            this.$thead.append(hdr);

            this.addAll();
            return this;
        },
        
        addOne: function(model) {
            var row = new TableRowView({ model: model, attrMap: this._attrMap || this._headerNames });
            row.render();
            this.$tbody.append(row.$el);
        },

        addAll: function() {
            this._dataCollection.each(this.addOne, this);
        }
    });
    return TreeView;
});
