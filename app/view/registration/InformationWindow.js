Ext.define("SL.view.registration.InformationWindow",{
    extend:"Ext.window.Window",
    title:"კლიენტის ინფორმაცია",
    xtype:"information",
    modal:true,
    controller:{
        xclass:"SL.view.registration.InformationWindowController"
    },
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    width:500,
    height:700,
    items:[{
        xtype:"form",
        border:false,
        reference:"form",
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false,
            margin:"30 0 0 0 "
        },
        defaultType:"displayfield",
        items:[{
            text: 'ID',
            name: 'id',
            fieldLabel:"ID",
            hidden:true,
        }, {
            text: 'კლიენტის ტიპი',
            name: 'type',
            fieldLabel:"კლიენტის ტიპი",
        }, {
            text: 'დასახელება',
            name: 'fullName',
            fieldLabel:"დასახელება",
        }, {
            text: 'საიდ. ნომერი',
            name: 'identity',
            fieldLabel:"საიდ.ნომერი",
        }, {
            text: 'რეგიონი',
            fieldLabel:"რეგიონი",
            name: 'region',
        }, {
            text: 'რაიონი',
            name: 'district',
            renderer:function (val){
                const field = this;
                if(!val) return '';
                const ok=field.up("information")
                const region=ok.getController().getStore("regions");
                const regionRec=region.getById(val);

                if(!regionRec) return val;
                return regionRec.get("name");
            },
            fieldLabel:"რაიონი",
        }, {
            text: 'დაბადების თარიღი',
            name: 'birthDate',
            format: 'd.m.Y',
            fieldLabel:"დაბადების თარიღი",
        },{
            margin:"15 0 0 0 ",
            border:false,
            xtype:"grid",
            title:"კავშირები",
            columns: [{
                text: 'ID',
                dataIndex: 'id',
                width: 100,
                hidden: true,
            }, {
                text: 'კავშირის ტიპი',
                dataIndex: 'type',
                flex: 1,
                // renderer: 'relationTypeRenderer',
            }, {
                text: 'სახელი',
                dataIndex: 'firstName',
                flex: 1,
            }, {
                text: 'გვარი',
                dataIndex: 'lastName',
                flex: 1,
            }]
        }]
    }]
})