// import { ValuesController } from "./Controllers/ValuesController.js";

import { ChecklistController } from "./Controllers/ChecklistController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { loadState } from "./Localstorage.js";

class App {
//   valuesController = new ValuesController();
checklistController = new ChecklistController();
tasksController = new TasksController();

}
loadState()


window["app"] = new App();
