import { create } from "zustand";
import { Task } from "../type";

interface State {
  tasks: Task[];
  isLoading: boolean;
}

interface Actions {
  getAllDeleteTasks: () => Task[];
  getAllDoneTasks: () => Task[];
  getAllTasks: () => Task[];
  fetchData: () => Promise<void>;
  setTasks: (tasks: State["tasks"]) => void;
}
const INITIAL_STATE: State = {
  tasks: [],
  isLoading: false,
};
export const useTaskStore = create<State & Actions>((set, get) => ({
  tasks: INITIAL_STATE.tasks,
  isLoading: INITIAL_STATE.isLoading,
  getAllTasks: () => {
    return get().tasks;
  },
  getAllDoneTasks: () => {
    return get().tasks.filter((task: Task) => task.isDone === true);
  },
  getAllDeleteTasks: () => {
    return get().tasks.filter((task: Task) => task.isDelete === true);
  },
  setTasks: (tasks) => set(() => ({ tasks: tasks })),
  fetchData: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch("http://localhost:3000/api/todos", {
        cache: "no-store",
      });
      const data = await response.json();
      set({ tasks: data, isLoading: false });
    } catch (error) {}
  },
}));
