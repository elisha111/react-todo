import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Погладить кота", isDone: true },
    { id: "task-2", title: "Погладить кота 2", isDone: false },
    { id: "task-3", title: "Погладить кота 3", isDone: true },
    { id: "task-4", title: "Погладить кота 4", isDone: false },
    { id: "task-5", title: "Погладить кота 5", isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log("удалить все задачи");
  };

  const deleteTasks = (taskId) => {
    console.log(`удалить задачу id:${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`задача id:${taskId} ${isDone ? "выполнена" : "не выполнена"}`);
  };

  const filterTasks = (query) => {
    console.log(`поиск ${query}`);
  };

  const addTask = () => {
    console.log("задача добавлена");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTasks}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
