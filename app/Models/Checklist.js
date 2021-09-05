import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
import { Task } from "./Task.js"

export class Checklist{
constructor(checklistData){
  this.labelName = checklistData.labelName
  this.color = checklistData.color
  this.id = checklistData.id || generateId()
}
get checklistTemplate(){
return /*html*/ `
<div class="col-lg-3">
<div class="card mt-3 shadow">
  <div class="card-header ${this.color}-color text-center pt-3">
    <h5>${this.labelName} <i class="mdi mdi-close mdi-3px" onclick="app.checklistController.deleteChecklist('${this.id}')"></i>
    </h5>
    <p>${this.TasksCount}</p>
  </div> 
  <h5>${this.Task}</h5>
      <div class="input-group my-3">
      <form onsubmit="app.tasksController.addTasks('${this.id}')">
      <input name="listItem" type="text" class="form-control ms-2" minlength="3" maxlength="15" required placeholder="Add Task.."
        aria-label="Example text with button addon" aria-described by="button-addon1">
      <button class="btn btn-outline-secondary ms-2 mt-2" type="submit" id="button-addon1">+</button>
      </div>
    </form>
  </div>
</div>
`
}

get Task(){
    let template = ''
    let foundTask = ProxyState.tasks.filter(t => t.listId == this.id)
    foundTask.forEach(t => template += t.Template)
    return template
  }

  get TasksCount(){
    let totalCount = 0
    let completedCount = 0
   let foundTasks = ProxyState.tasks.filter(t => t.listId == this.id)
   let completedTasks = foundTasks.filter(f => f.checked === 'checked')
    completedCount = completedTasks.length
   totalCount = foundTasks.length 
   return (completedCount + '/' + totalCount)
  }
}