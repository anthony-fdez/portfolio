import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "react-feather";

interface Props {
  isOpen: boolean;
  children: JSX.Element;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomDialog = ({ isOpen, children, setIsOpen }: Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay">
          <Dialog.Content className="DialogContent">
            {children}
            <Dialog.Close asChild>
              <button
                onClick={() => setIsOpen(false)}
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

export default CustomDialog;
