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
    // @ts-ignore
    labelName: form.labelName.value,
    // @ts-ignore
    color: form.color.value
  }
  checklistService.addChecklist(checklistItemData)
  // @ts-ignore
  form.reset()
  
}

deleteChecklist(checklistId){
  // let result = confirm('are you sure you want to delete?')
  // if(result == true){
  //   checklistService.deleteChecklist(checklistId)
  // }

  // @ts-ignore
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your checklist has been deleted.',
        'success'
      )
      checklistService.deleteChecklist(checklistId)
    } else if (
      // @ts-ignore
      result.dismiss === Swal.DismissReason.cancel
    ) {
      
    }
  })
}
}