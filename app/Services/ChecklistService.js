import { ProxyState } from "../AppState.js"
import { ChecklistController } from "../Controllers/ChecklistController.js"
import { Checklist } from "../Models/Checklist.js"
import { Task } from "../Models/Task.js"



class ChecklistService{
  addChecklist(checklistData){
    ProxyState.checklistItems = [...ProxyState.checklistItems, new Checklist(checklistData)]
    console.log('from service', ProxyState.checklistItems)
  }

  deleteChecklist(checklistId){
    ProxyState.checklistItems = ProxyState.checklistItems.filter(f => f.id !== checklistId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.checklistItems !== checklistId)
    }
  }
  
export const checklistService = new ChecklistService()