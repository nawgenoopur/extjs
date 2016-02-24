/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */

Ext.Loader.setConfig({ 
 enabled: true 
 });

Ext.application({
    name: 'ToDoApp',

    extend: 'ToDoApp.Application',

    // requires: [
    //     'ToDoApp.view.main.Main'
    // ],
    requires: [
        'ToDoApp.view.login.Login'
    ],

                    // The name of the initial view to create. With the classic toolkit this class
                    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
                    // modern toolkit, the main view will be added to the Viewport.
                    //
    // mainView: 'ToDoApp.view.main.Main'
    mainView: 'ToDoApp.view.login.Login'
	
                    //-------------------------------------------------------------------------
                    // Most customizations should be made to ToDoApp.Application. If you need to
                    // customize this file, doing so below this section reduces the likelihood
                    // of merge conflicts when upgrading to new versions of Sencha Cmd.
                    //-------------------------------------------------------------------------
});

Ext.onReady(function () {

    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'user',
            type: 'string'
        }, {
            name: 'pass',
            type: 'auto'
        }]
    });

    Ext.define('local.store.localcache', {
        extend: 'Ext.data.Store',
        model: 'Person',
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'localproxy'
        }
    });


    //save into localstorage
    var cache = new Ext.create('local.store.localcache');
    cache.reload();

    //add to cache if empty
    if (cache.data.length == 0) {

        var person = new Ext.create('Person', {
            user: 'Bill',
            pass: 'Bill'        
        });

        //cache.sync();
    }
    
    // var serialized = JSON.stringify(cache.first().data, null, 2);                                       
    // new Ext.Component({
    //     renderTo: 'example-grid',
    //     html: serialized
    // });


});