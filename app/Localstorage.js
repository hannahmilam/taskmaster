import { ProxyState } from "./AppState.js";
import { Checklist } from "./Models/Checklist.js";
import { Task } from "./Models/Task.js";

export function saveState(){
localStorage.setItem('checklist', JSON.stringify({checklistItems: ProxyState.checklistItems,
tasks: ProxyState.tasks}))
}

export function loadState(){
let data = JSON.parse(localStorage.getItem('checklist'))
console.log('load state', data)
if(data != null){
  ProxyState.checklistItems = data.checklistItems.map(c => new Checklist(c))
  ProxyState.tasks = data.tasks.map(t => new Task(t))
}
console.log('loaded state')
}