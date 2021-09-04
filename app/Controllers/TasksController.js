import { Task } from "../Models/Task.js"
import { tasksService } from "../Services/TasksService.js"


export class TasksController{
  constructor(){
  }
addTasks(listId){
event.preventDefault()
let form = event.target

let taskData={
listId: listId,
listItem: form.listItem.value
}
tasksService.addTasks(taskData)
  }


deleteTask(listId){
  var result = confirm("Are you sure to delete?");
  if(result){
    tasksService.deleteTask(listId)
  }
  }
}





  