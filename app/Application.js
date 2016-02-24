/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ToDoApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ToDoApp',

    stores: [
        // TODO: add global / shared stores here
    ],

    views: [
           'ToDoApp.view.login.Login',
           'ToDoApp.view.main.Main'
    ],
    
    launch: function () {
        // TODO - Launch the application

        // var loggedIn;
        // loggedIn=localstorage.getItem("UserLoggedIn");

        // Ext.create({
        //     xtype: loggedIn ? 'app-main' : 'login'
        // });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
