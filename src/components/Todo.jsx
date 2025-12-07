import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Погладить кота", isDone: true },
    { id: "task-2", title: "Погладить кота 2", isDone: false },
    { id: "task-3", title: "Погладить кота 3", isDone: true },
    { id: "task-4", title: "Погладить кота 4", isDone: false },
    { id: "task-5", title: "Погладить кота 5", isDone: true },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteAllTasks = () => {
    const isConfirmed = confirm("Удалить все задачи?");

    if (isConfirmed) {
      setTasks([]);
    }
  };

  const deleteTasks = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }

        return task;
      })
    );
  };

  const filterTasks = (query) => {
    console.log(`поиск ${query}`);
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
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
