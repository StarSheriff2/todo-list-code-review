import toDoList from './tasks.js';

const statusCheckboxChange = (e) => {
  const taskCompletion = (taskTextDecoration, taskStatus, task) => {

    taskTextDecoration = (taskStatus) ? 'line-through': '';

    task.updateStatus(taskStatus);

    localStorage.setObj('myToDoList', toDoList.toDoListArray);
  };

  const itemId = parseInt(e.target.parentNode.id, 10);
  const task = toDoList.getTask(itemId);
  const taskTextDecoration = e.target.parentNode.children[1].style.textDecoration;
  const taskStatus = e.target.checked;
  taskCompletion(taskTextDecoration, taskStatus, task);
};

export default statusCheckboxChange;
