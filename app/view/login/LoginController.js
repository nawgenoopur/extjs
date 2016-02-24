Ext.define('ToDoApp.view.login.LoginController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	requires:[
		'ToDoApp.view.login.LoginModel',
		'ToDoApp.view.main.Main'
	],

	// onLoginClick: function(){
	// 	localstorage.setItem("UserLoggedIn", true);

	// 	this.getView().destroy();

	// 	Ext.create({
	// 		xtype: 'app-main'
	// 	});
	// }

	 onLoginClick: function() {					
        var form   = this.getView(),
            encode = Ext.String.htmlEncode,
            s      = '';
         var b      = new Array();						
         var store = this.getViewModel().data;
         console.log(store);
       	 var formValues= form.getValues();
       	 console.log(formValues);

       	 if(formValues.user==store.user && formValues.pass==store.pass){
       	 	  console.log("Authenticated");
       	 	this.getView().removeAll();
       	 	this.getView().add(Ext.create("ToDoApp.view.todo.Todo"));

       	 // Cookie Storage	
		   // var now = new Date();
		   // var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
		   // Ext.util.Cookies.set('myCookie','myCookieValue',expiry);


       	 }

       	 else {
       	 	Ext.Msg.alert('Invalid Credentials');
         

       	 }
        //if (form.isValid()) {
            // Ext.iterate(form.getValues(), function(key, value) {
            //     value = encode(value);
            //     // Ext.Msg.alert('value', value)
            //     if(key=='user'){
            //     	console.log('key',value);
                	
            //     	//console.log('from localstorage', pass);
            //     }

            //     if(key=='pass'){
            //     	console.log('pass',value);
            //     }
            //     b +=Ext.util.Format.format("{0} = {1}", key, value);
            //     s += Ext.util.Format.format("{0} = {1}<br />", key, value);
            // }, this);


            // Ext.Msg.alert('Form Values', s);
            // console.log('s' +b);

        //}
    }	

})