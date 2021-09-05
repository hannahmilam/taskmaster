import { Task } from "../Models/Task.js"
import { tasksService } from "../Services/TasksService.js"


export class TasksController{
  constructor(){
  }
addTasks(listId){
event.preventDefault()
let form = event.target

let taskData={
listId: listId,
// @ts-ignore
listItem: form.listItem.value
}
tasksService.addTasks(taskData)
  }


deleteTask(listId){
  // var result = confirm("Are you sure to delete?");
  // if(result){
  //   tasksService.deleteTask(listId)
  // }
  // }
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
        tasksService.deleteTask(listId)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        
      }
    })
  }

  setChecked(id){
    tasksService.setChecked(id)
  }
}





  