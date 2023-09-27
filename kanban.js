export default class Kanban {

    static getTasks(columnId){

        const data = read().find(column => {

            return column.columnId == columnId

        })


        if(!data){
            return []
        }

        return data.tasks
       


    }



    static insertTask(columnId, content){

        // get current data and update the array
        const data = read()
        // find the column that you are working on
        const column = data.find(column => {
            return column.columnId == columnId
        })

        // create the task object and give an Id along with the content
        const task = {
            taskId:Math.floor(Math.random() * 100000),
            content:content
        }

        // // throw new error if column doeest exit 
        // if(!column){
        //      throw new Error('column doesnt exist')
        // }

        //column doesnt exist


        // then you push it the task array
        column.tasks.push(task)
        console.log(data,'the data updated')
        // can overwrite the old data with the new data
          save(data)

         return task

    }


    static updateTask(taskId,updatedInformation){
        // grab all the information
        const data = read()

        //find column task




        function findColumnTask(){

            for(const column of data){
                const task = column.tasks.find(item => {
                    return item.taskId == taskId
                });

                if(task){
                    return [task,column]
                }
            }
        }


        const [task,currentColumn] = findColumnTask()



        

        const targetColumn = data.find(column => {
            return column.columnId == updatedInformation.columnId
        });

        //rewrite and update the new content
        task.content = updatedInformation.content
        
        // delete information for the current column
        currentColumn.tasks.splice(currentColumn.tasks.indexOf(task),1)

        targetColumn.tasks.push(task)

      console.log(task);

             save(data)


        // for(const column of data){
        //     const task = column.tasks.find(item => {
        //         return item.taskId == taskId;
        //     })

        //     if(task){
        //     console.log(column,task)
        //     }

        // }




        
    }


    // delete taskId
    static deleteTask(taskId){
        // access to all the data ,get into the column and delete it
        const data = read()

        

        for(const column of data) {
              const task = column.tasks.find(item  =>{
                 return item.taskId == task.taskId
              })


              if(!task){
                throw new Error('task is already deleted')
              }

              // splice to remove the id from the position indexOf gives us the index
              column.tasks.splice(column.tasks.indexOf(task),1)
        }

         save(data)

    }

    static getAllTask(){ 
        // returning the data
         const data = read()
         return [data[0].tasks, data[1].tasks, data[2].tasks]



    }


}


// gets the content from our localStorage
function read(){

    // capture the data from the localStorage

    const data = localStorage.getItem("data");


    if(!data){
         return [
            {columnId:0,tasks:[]},
            {columnId:1
                ,tasks:[]},
            {columnId:2,tasks:[]}
         ]
    }


    return JSON.parse(data);



}

// this contents saves to the localStorage
function save(data){
    localStorage.setItem("data",JSON.stringify(data))

}