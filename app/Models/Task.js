import { generateId } from "../Utils/generateId.js"

export class Task{
  constructor(taskData){
    this.listItem = taskData.listItem
    this.id = taskData.id || generateId()
    this.listId = taskData.listId
  }

  get Template(){
    return /*html*/`
    <div class="form-group ms-2">
    <input type="checkbox" name="listItem" id="listItem">
    <label for="listItem" class="">${this.listItem}</label>
    </div>
    `
  }
}