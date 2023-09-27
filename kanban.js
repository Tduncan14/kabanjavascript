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


        // then you push it the task array
        column.tasks.push(task)
        console.log(data,'the data updated')
        // can overwrite the old data with the new data
         localStorage.setItem("data",JSON.stringify(data))

         return task

    }


    static updateTask(taskId,newContent){

    }


    static deleteTask(taskId){

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
function save(){

}