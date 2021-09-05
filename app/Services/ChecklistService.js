import { ProxyState } from "../AppState.js"
import { ChecklistController } from "../Controllers/ChecklistController.js"
import { loadState, saveState } from "../Localstorage.js"
import { Checklist } from "../Models/Checklist.js"
import { Task } from "../Models/Task.js"




class ChecklistService{
  constructor(){
    ProxyState.on('checklistItems', saveState)
  }
  addChecklist(checklistData){
    ProxyState.checklistItems = [...ProxyState.checklistItems, new Checklist(checklistData)]
    console.log('from service', ProxyState.checklistItems)
  }

  deleteChecklist(checklistId){
    ProxyState.checklistItems = ProxyState.checklistItems.filter(c => c.id !== checklistId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.checklistId !== checklistId)
    }
  }
  
export const checklistService = new ChecklistService()