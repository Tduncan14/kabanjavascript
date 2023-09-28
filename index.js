import kanban from "./kanban.js";

// const taskbox = document.querySelectorAll('.task')

const todo = document.querySelector(".cards.todo")
const pending = document.querySelector('.cards.pending')
const completed = document.querySelector('.cards.completed')

const taskbox = [todo,pending,completed]


function addTaskCard(task,index){

    console.log(task,'this is task')

    const element = document.createElement("form")
    element.className="card"
    element.draggable = true;
    element.dataset.id = task.taskId
    element.innerHTML = `
    <input value = ${task.content} type="text"   name="task"  autocomplete="off" disabled="disabled">
    <div>
      <span class="task-id"}>${task.taskId}</span>
      <span>
         <button class="bi bi-pencil edit" data-id=${task.taskId}> </button>
         <button class="bi bi-check-lg update hide" data-id=${task.taskId} data-column=${index}> </button>
         <button class="bi bi-trash3 delete" data-id=${task.taskId}> </button>
       </span>
       </div>
    `


    taskbox[index].appendChild(element)



}





kanban.getAllTasks().forEach((tasks,index) => {


    tasks.forEach(task => {

        addTaskCard(task,index)




    })
});


const addForm = document.querySelectorAll(".add")

addForm.forEach(form => {
    form.addEventListener("submit", event => {
        console.log(form.task.value,'value')
        event.preventDefault();

        if(form.task.value){
            const task = kanban.insertTask(form.submit.dataset.id, form.task.value.trim());
            addTaskCard(task, form.submit.dataset.id);
            form.reset();
        }        
    });
});



taskbox.forEach(column =>
      column.addEventListener("click", event => {
           event.preventDefault()

           let formInfo = event.target.parentElement.parentElement.previousElementSibling


           if(event.target.classList.contains('edit')){
            //
             event.target.parentElement.parentElement.previousElementSibling.removeAttribute("disabled")
             event.target.classList.add("hide")
             event.target.nextElementSibling.classList.remove("hide")

           }


             if(event.target.classList.contains("update")){
              event.target.parentElement.parentElement.previousElementSibling.setAttribute('disabled','disabled')
              event.target.classList.add('hide');
              event.target.previousElementSibling.classList.remove('hide')

              const taskId = event.target.dataset.id
              const columnId = event.target.dataset.column
              const content = event.target.parentElement.parentElement.previousElementSibling.value

              kanban.updateTask(taskId,{columnId:columnId,content:content})

            }


            if(event.target.classList.contains('delete')){

                
                formInfo.parentElement.remove();

                kanban.deleteTask(event.target.dataset.id)


            }


      }))