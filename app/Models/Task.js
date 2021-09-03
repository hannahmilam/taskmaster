import { generateId } from "../Utils/generateId.js"

export class Task{
  constructor(taskData){
    this.listItem = taskData.listItem
    this.id = taskData.id || generateId()
  }

  get Template(){
    return /*html*/`
    <div class="form-group">
    <label for="listItem" class="">${this.listItem}</label>
    <input type="checkbox" name="listItem" id="listItem" checked>
    </div>
    `
  }
}