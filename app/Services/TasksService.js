import { ProxyState } from "../AppState.js";
import { TasksController } from "../Controllers/TasksController.js";
import { Task } from "../Models/Task.js";


class TasksService{
  constructor(){

  }

  addTasks(tasksData){
ProxyState.tasks = [...ProxyState.tasks, new Task(tasksData)]
console.log(ProxyState.tasks)
  }
}


export const tasksService = new TasksService()