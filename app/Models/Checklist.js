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
<div class="card mt-3">
  <div class="card-header ${this.color}-color text-center pt-3">
    <h5>${this.labelName}</h5>
  </div>
  <h5 id="list"></h5>
      <div class="input-group my-3">
      <form onsubmit="app.tasksController.addTasks('${this.id}')">
      <input type="text" class="form-control ms-2" placeholder="Add Task.."
        aria-label="Example text with button addon" aria-described by="button-addon1">
      <button class="btn btn-outline-secondary ms-2 mt-2" type="submit" id="button-addon1">+</button>
      </div>
    </form>
  </div>
</div>
`
}

get taskTemplate(){
    let template = ''
    let foundTask = ProxyState.tasks.filter(t => t.checklistId == this.id)
    foundTask.forEach(t => template += t.checklistTemplate)
    return template
  }
}