const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Task() {
  this.Info = function () {
    return `Task id: ${this.id} | Task Desc: ${
      this.taskDescription
    } | Task Due Date: ${this.dueDate.toLocaleDateString()} | Task Priority: ${
      this.priorityLevel
    }`;
  };
}
Task.prototype.id;
Task.prototype.taskDescription;
Task.prototype.dueDate;
Task.prototype.priorityLevel;
Task.prototype.isFinished = false;

let taskArray = [];
let taskAccId = 0;

///////////////////////////////////////////////////////////

function action(action) {
  if (action[0] == 1) {
    const task = new Task();
    task.taskDescription = action[1];
    task.priorityLevel = action[2];
    task.dueDate = new Date(action[3]);
    task.id = taskAccId++;
    taskArray.push(task);
  } else if (action[0] == 2) {
    taskArray.forEach((ele) => {
      console.log(ele.Info());
    });
  } else if (action[0] == 3) {
    const completedTasks = taskArray.filter((ele) => {
      return ele.isFinished;
    });
    completedTasks.forEach((ele) => {
      console.log(ele.Info());
    });
  } else if (action[0] == 4) {
    taskArray.forEach((ele) => {
      if (ele.id == action[1]) ele.isFinished = true;
    });
  } else if (action[0] == 5) {
    taskArray.forEach((ele, index) => {
      if (ele.id == action[1]) {
        taskArray.splice(index, 1);
      }
    });
  } else if (action[0] == 6) {
    taskArray.sort((a, b) => {
      let date1 = new Date(a.dueDate).getTime();
      let date2 = new Date(b.dueDate).getTime();
      if (date1 > date2) {
        return 1;
      }
      if (date1 < date2) {
        return -1;
      }
    });
  } else if (action == 7) {
    taskArray.sort((a, b) => {
      if (a.priorityLevel > b.priorityLevel) {
        return 1;
      }
      if (a.priorityLevel < b.priorityLevel) {
        return -1;
      }
    });
  } else if (action == 8) {
    taskArray = [];
  } else {
    process.exit(1);
  }
}

function choosing(question) {
  rl.question(question, (answer) => {
    answer = answer.split(" ");
    action(answer);
    choosing(question);
  });
}

const main = () => {
  let toPrintMenu = `
    ***************************
    Welcome to JS TODO-APP
    ***************************
    Select an action:
    1) Add a new task => 1 DESCRIPTION PRIORITY MM-DD-YYYY;
    2) List all tasks
    3) List completed tasks
    4) Mark the task as done | 4 taskID#
    5) Delete a task | 5 taskID#
    6) Sort tasks by the due date
    7) Sort tasks by priority
    8) Clear all tasks
    9) Exit JS TODO-APP
    ***************************
    What's your choice?
`;
  choosing(toPrintMenu);
};

main();
