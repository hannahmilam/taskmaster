import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task{
  constructor(taskData){
    this.listItem = taskData.listItem
    this.id = taskData.id || generateId()
    this.listId = taskData.listId
    this.checked = taskData.checked || 'unchecked'
  }

  get Template(){
    return /*html*/`
    <div class="form-group ms-2 my-2">
    <input type="checkbox" name="listItem" id="listItem" onclick="app.tasksController.setChecked('${this.id}')" ${this.checked}>
    <label for="listItem" class="${this.checked}" minlength="3" maxlength="50" required>${this.listItem} <span><i class="mdi mdi-close mdi-6px" onclick="app.tasksController.deleteTask('${this.id}')"></i></span></label>
    </div>
    `
  }
}