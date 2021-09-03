// import { ValuesController } from "./Controllers/ValuesController.js";

import { ChecklistController } from "./Controllers/ChecklistController.js";
import { TasksController } from "./Controllers/TasksController.js";


class App {
//   valuesController = new ValuesController();
checklistController = new ChecklistController();
tasksController = new TasksController();

}

window["app"] = new App();
