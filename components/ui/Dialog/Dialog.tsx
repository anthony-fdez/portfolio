import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "react-feather";
import useGlobalStore from "../../../utils/store/useGlobalStore";

const ProjectsDialog = () => {
  const { projects, setProjects } = useGlobalStore();

  const handleOpenChange = (isOpen: boolean) => {
    setProjects({ isModalOpen: isOpen });
  };

  return (
    <Dialog.Root open={projects.isModalOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay">
          <Dialog.Content className="DialogContent">
            {projects.selectedProjectComponent}
            <Dialog.Close asChild>
              <button
                onClick={() => {
                  handleOpenChange(false);
                }}
                className="IconButton"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProjectsDialog;
