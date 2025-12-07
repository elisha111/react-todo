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

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;
