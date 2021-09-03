import { Task } from "../Models/Task.js"
import { tasksService } from "../Services/TasksService.js"


export class TasksController{
  constructor(){
  }
addTasks(){
event.preventDefault()
let form = event.target

let taskData={
listItem: form.value,
id: form.id.value
}
tasksService.addTasks(taskData)
  }
}