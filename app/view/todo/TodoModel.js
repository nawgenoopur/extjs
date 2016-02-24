/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ToDoApp.view.todo.TodoModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.todo',
    config: {
        fields: [
            {
                defaultValue: '',
                name: 'task',
                type: 'string'
            },
            {
                defaultValue: false,
                name: 'completed',
                type: 'boolean'
            },
            {
                name: 'timestamp',
                type: 'int'
            }
        ]
    },

    // data: {
    //     name: 'ToDoApp',

    //     loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // }
});
   var todoStore=Ext.create('Ext.data.Store', {
        autoLoad: true,
        storeId: 'todos',
        fields: [
            {
                defaultValue: '',
                name: 'task',
                type: 'string'
            },
            {
                defaultValue: false,
                name: 'completed',
                type: 'boolean'
            },
            {
                name: 'timestamp',
                type: 'int'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'todos',
            owner: 'user',
            access: 'private'
        },
        // proxy: {
        //     type: 'ajax',
        //     url: '../resources/json/todoList.json',
        //     reader: {
        //         type: 'json',
        //         rootProperty: 'data',
        //         successProperty: 'success'
        //     }
        // }

        autoLoad: true,  //set auto load to true so that any local data will 
                         // populated in memory
        autoSync: false, // Wait until we have an authenciated user to
                         // and call sync manually. see MyApp.controller.Todos
    	 grouper: {
            groupFn: function(record) {
                return record.get('completed') ? "Complete" : "Tasks";
            },
            sortProperty: 'completed'
        },
        
        sorters: [
               {
                   property : 'timestamp',
                   direction: 'DESC'
               },
               {
                   property : 'task',
                   direction: 'ASC'
               }
        ],

    });

//     	Ext.create('Ext.data.Store', {
//      config: {
//         autoLoad: true,
//         fields: [
//             {
//                 defaultValue: '',
//                 name: 'task',
//                 type: 'string'
//             },
//             {
//                 defaultValue: false,
//                 name: 'completed',
//                 type: 'boolean'
//             },
//             {
//                 name: 'timestamp',
//                 type: 'int'
//             }
//         ],
//         storeId: 'todos',
//         proxy: {
//             type: 'localstorage',
//             id: 'todos',
//             owner: 'user',
//             access: 'private'
//         },
//         autoLoad: true,  //set auto load to true so that any local data will 
//                          // populated in memory
//         autoSync: false, // Wait until we have an authenciated user to
//                          // and call sync manually. see MyApp.controller.Todos
//         grouper: {
//             groupFn: function(record) {
//             	debugger
//                 return record.get('completed') ? "Complete" : "Tasks";
//             },
//             sortProperty: 'completed'
//         },
        
//         sorters: [
//                {
//                    property : 'timestamp',
//                    direction: 'DESC'
//                },
//                {
//                    property : 'task',
//                    direction: 'ASC'
//                }
//         ],
        
//     }
// })
   
   // }

    //TODO - add data, formulas and/or methods to support your view
// });
