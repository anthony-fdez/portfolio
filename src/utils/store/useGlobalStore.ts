import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IProjects {
  selectedProjectComponent: JSX.Element | null;
  isModalOpen: boolean;
}

interface IGlobalStateValues {
  projects: IProjects;
}

interface IGlobalState extends IGlobalStateValues {
  setProjects: (state: Partial<IProjects>) => void;
  clearState: () => void;
}

const initialState: IGlobalStateValues = {
  projects: {
    selectedProjectComponent: null,
    isModalOpen: false,
  },
};

const useGlobalStore = create<IGlobalState>()(
  devtools(
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

      clearState: (): void => {
        set({ ...initialState });
      },
    }),
    {
      name: "anthony-fernandez-portfolio",
    }
  )
);

export default useGlobalStore;
