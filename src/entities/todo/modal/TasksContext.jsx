import { createContext } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const {
    tasks,
    filteredTasks,
    newTaskTitle,
    searchQuery,
    newTaskInputRef,
    disappearingTaskId,
    appearingTaskId,
    addTask,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    setNewTaskTitle,
    setSearchQuery,
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncompleteTaskScroll(tasks);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        newTaskTitle,
        searchQuery,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId,
        addTask,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        setNewTaskTitle,
        setSearchQuery,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
