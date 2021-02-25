Delete Working
1.App.js has tasks Array(BISON) with State (UseState)
2.SetTask is function to change tasks array
3. A function called deleteTask will use the id to change tasks using SetTask
4. This function is passed to a single task  as prop(App.js--->Tasks.js--->Single_Task.js) Along with each task
5.that single_task will call deleteTask by passing task.id whcih is also passed parrellely
6.This code executed in App.js 
7.DeleteTask has a filter function which remove task with particular id