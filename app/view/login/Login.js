Ext.define('ToDoApp.view.login.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'login',
	store: 'Login',

	requires: [
		'ToDoApp.view.login.LoginController',
		'ToDoApp.view.login.LoginModel',
		'ToDoApp.view.todo.Todo',
		'Ext.form.Panel',
		'Ext.Button',
		'Ext.field.Field'
	],

	controller : 'login',
	viewModel: 'login',
	title: 'Login',
    // frame:true,
    width: 720,
    bodyPadding: 10,
    //  defaults: {
    //     anchor: '100%',
    //     labelWidth: 100
    // },
    layout: {
    	align: 'stretch',
    	type: 'vbox'
    },
    
    defaultType: 'textfield',



       

	items: [{
		xtype: 'textfield',
        label: 'User ID',
        name: 'user',
        emptyText: 'user id',
        allowBlank: false
    }, {
    	xtype: 'textfield',
        label: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password',
         allowBlank: false
    }, {
        xtype:'checkboxfield',
        label: 'Remember me',
        name: 'remember'
    },{
    	xtype: 'button',
    	text: 'Login',
    	handler: 'onLoginClick'
    }],
    
    // buttons: [
    //     { text:'Register' },
    //     { text:'Login' }
    // ],

    //  button: [{
    //     text   : 'Login',
    //     handler: 'onLoginClick'
    // }]

    //  initComponent: function() {
    //     this.defaults = {
    //         anchor: '100%',
    //         labelWidth: 120
    //     };
        
    //     this.callParent();
    // }
});