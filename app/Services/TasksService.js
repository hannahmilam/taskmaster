import { ProxyState } from "../AppState.js";
import { TasksController } from "../Controllers/TasksController.js";
import { saveState } from "../Localstorage.js";
import { Task } from "../Models/Task.js";



class TasksService{
  constructor(){
    ProxyState.on('tasks', saveState)
  }

  addTasks(tasksData){
ProxyState.tasks = [...ProxyState.tasks, new Task(tasksData)]
console.log(ProxyState.tasks)
  }

  deleteTask(listId){
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== listId)
    ProxyState.checklistItems = ProxyState.checklistItems.filter(c => c.id !== listId)
    
    }

}


export const tasksService = new TasksService()