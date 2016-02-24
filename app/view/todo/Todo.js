Ext.define('ToDoApp.view.todo.Todo', {

extend: 'Ext.form.Panel',
   xtype: 'form-grid',

requires: [
        
        'Ext.MessageBox',

        'ToDoApp.view.todo.TodoController',
        'ToDoApp.view.todo.TodoModel',
        "Ext.TitleBar",
	      "Ext.dataview.List",
	      "Ext.field.Text",
	      'Ext.field.Field',
	      'Ext.field.Checkbox',
	      'Ext.grid.Grid',
	      'Ext.grid.cell',
	      'Ext.grid.Row'
      
    ], 
    controller: 'todo',
    viewModel: 'todo',

title: 'Login',
    frame:true,
    width: 600,
    bodyPadding: 10,
    //  defaults: {
    //     anchor: '100%',
    //     labelWidth: 100
    // },
    layout:
     {
    	align: 'stretch',
    	type: 'vbox'
    },
        fullscreen: true,	

items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Todo',
                // items: [ {
                //     xtype: "button",
                //     align: "right"
                // }]
            },
            {
                xtype: 'textfield',
                id: "todoinput",
                name: "todoinput",
                docked: 'top',
                labelWidth: '0%',
                placeHolder: 'New Task',
                allowBlank: false
            }
            ,
            {
                xtype: 'button',
                text: "Add Task",
                handler: "addTodo"
                
               
            },
            {
                xtype: 'list',

                store: 'todos',
                width: 300,
                height: 100,
                border: 1,
                bodyStyle: 'margin: 10px;',
                itemTpl: [
                    '{task}'
                ],
                disableSelection: true,
            },
	     	
	     	{
	     		
	     		xtype: 'grid',
	     		bind: {store: 'todos'},
	     		height: 400,
	     		columns:[{
	     			text: 'Task',
	     			dataIndex: 'task'
	     		},{
	     			text: 'TimeStamp',
	     			// dataIndex: 'timestamp'
	     			width: 100,
	     			// cell: {
	     			// 	xtype: 'widgetcell',

	     			// 	widget: {
	     			// 		xtype:'checkboxfield',
					    //     label: 'Remember me',
					    //     name: 'remember'

	     			// 	}
	     				
	     			}]
	     			
	     		}]
	     	
      
     
});

Ext.create('Ext.grid.Panel', {
    renderTo: document.body,
    requires: [
    'ToDoApp.view.todo.TodoController',
        'ToDoApp.view.todo.TodoModel'
    ],
    store: todos,
    width: 400,
    height: 200,
    title: 'Application Users',
    columns: [
        {
            text: 'Name',
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: 'task'
        },
        {
            text: 'Email Address',
            width: 150,
            dataIndex: 'timestamp',
         
        }
    ]
});