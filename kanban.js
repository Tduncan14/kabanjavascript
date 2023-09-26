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