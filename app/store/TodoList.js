// Ext.define('TodoApp.store.TodoList', {
//     extend: 'Ext.data.Store',
//     requires: [
//         'TodoApp.model.Todo'
//     ],

//     config: {
//         autoLoad: true,
//         model: 'TodoApp.model.Todo',
//         storeId: 'todos',
//         proxy: {
//             type: 'syncstorage',
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
// });


Ext.define('TodoApp.store.TodoList', {
    extend: 'Ext.data.Store',
      requires: [
        'ToDoApp.view.todo.TodoModel'
    ],
     config: {
        autoLoad: true,
        model: 'ToDoApp.view.todo.TodoModel',
        storeId: 'todos',
        proxy: {
            type: 'syncstorage',
            id: 'todos',
            owner: 'user',
            access: 'private'
        },
        autoLoad: true,  //set auto load to true so that any local data will 
                         // populated in memory
        autoSync: false, // Wait until we have an authenciated user to
                         // and call sync manually. see MyApp.controller.Todos
        grouper: {
            groupFn: function(record) {
            	debugger
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
        
    }
});