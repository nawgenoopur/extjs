Ext.define('TodoApp.store.Login', {
	extend: 'Ext.data.Store',
	model: 'TodoApp.model.Login',
	  alias: 'store.login',
	autoLoad: true,

	// fields: [
 //        'user', 'pass'
 //    ],

    data: { items: [
        { user: 'Jean Luc', pass: "jean" },
        { user: 'Worf',     pass: "worf" },
        { user: 'Deanna',   pass: "deanna" },
        { user: 'Data',     pass: "data" }
    ]},


	proxy: {
		type: 'localstorage',
		id: 'myProxyKey'
	}
});