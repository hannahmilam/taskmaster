import { ProxyState } from "../AppState.js"
import { Checklist } from "../Models/Checklist.js"
import { Task } from "../Models/Task.js"
import { checklistService } from "../Services/ChecklistService.js"

function _drawChecklist(){
  let template = ''
  ProxyState.checklistItems.forEach(c => template += c.checklistTemplate)
  document.getElementById('checklist').innerHTML = template
}

export class ChecklistController{
  constructor(){
    ProxyState.on('checklistItems', _drawChecklist)
    ProxyState.on('tasks', _drawChecklist)
    console.log('hello from controller')
    _drawChecklist()
  }
addChecklist(){
  event.preventDefault()
  let form = event.target
  let checklistItemData = {
    labelName: form.labelName.value,
    color: form.color.value
  }
  checklistService.addChecklist(checklistItemData)
  form.reset()
  
}

deleteChecklist(checklistId){

  var result = confirm("Are you sure to delete?");
  if(result){
    checklistService.deleteChecklist(checklistId)
  }
}
}