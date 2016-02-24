Ext.define('TodoApp.model.Login', {
	extend: 'Ext.data.Model',
	idProperty: '_id',

	fields:[
		'user', 
		'pass'
	]

	// proxy: {
 //        type: 'localstorage',
 //        user  : 'Bill',
 //        pass  : 'Bill'
 //    }
});