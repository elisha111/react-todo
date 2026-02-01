import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useTasksLocalStorage from "./useTasksLocalStorage";

const useTasks = () => {
  const { savedTasks, saveTasks } = useTasksLocalStorage();

  const [tasks, setTasks] = useState(
    savedTasks ?? [
      { id: "task-1", title: "Погладить кота", isDone: true },
      { id: "task-2", title: "Купить молоко", isDone: false },
    ],
  );

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Удалить все задачи?");

    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  const deleteTasks = useCallback(
    (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone };
          }

          return task;
        }),
      );
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isDone: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle("");
    setSearchQuery("");
    newTaskInputRef.current.focus();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [saveTasks, tasks]);

  useEffect(() => {
    newTaskInputRef.current?.focus();
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [tasks, searchQuery]);

  return {
    tasks,
    filteredTasks,
    newTaskTitle,
    searchQuery,
    newTaskInputRef,
    addTask,
    deleteTasks,
    deleteAllTasks,
    toggleTaskComplete,
    setNewTaskTitle,
    setSearchQuery,
  };
};

export default useTasks;
