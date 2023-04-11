import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IProjects {
  selectedProject: "string" | null;
  selectedProjectComponent: JSX.Element | null;
  isModalOpen: boolean;
}

interface IGlobalStateValues {
  projects: IProjects;
}

interface IGlobalState extends IGlobalStateValues {
  setProjects: (state: Partial<IProjects>) => void;
  setState: (state: Partial<IGlobalStateValues>) => void;
  clearState: () => void;
}

const initialState: IGlobalStateValues = {
  projects: {
    selectedProject: null,
    selectedProjectComponent: null,
    isModalOpen: false,
  },
};

const useGlobalStore = create<IGlobalState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setProjects: (newApp): void => {
          set((state) => ({
            projects: {
              ...state.projects,
              ...newApp,
            },
          }));
        },

        setState: (newState): void => {
          set((state) => ({ ...state, ...newState }));
        },
        clearState: (): void => {
          set({ ...initialState });
        },
      }),
      {
        name: "anthony-fernandez-portfolio",
      }
    )
  )
);

export default useGlobalStore;
