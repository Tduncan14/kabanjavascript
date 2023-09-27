import kanban from "./kanban.js";


console.log(kanban.getAllTask(),'hello')
// console.log(kanban.getTasks(1))


// console.log(kanban.insertTask(2,'finishing your homework'))


// console.log(kanban.getTasks(1))



kanban.updateTask(97522, {columnId:1,content:"Look through javscript review"})


console.log(kanban.getAllTask(),'hello 2')