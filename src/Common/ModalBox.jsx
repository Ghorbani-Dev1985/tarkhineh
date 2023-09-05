import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Close from "./Close";
import { ArrowRight2 } from "iconsax-react";
import Logo from '../Assets/Images/Logo/logo.png';


const ModalBox = ({ children, BtnText }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} className="bg-brand-50 rounded-lg p-3 flex justify-center items-center">
        {BtnText}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="p-3 md:!w-[392px] md:!min-w-[392px] !max-w-[392px]"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="w-full justify-between items-center">
        <ArrowRight2 size="20" className="text-nautral-600"/>
          <img src={Logo} alt="رستوران ترخینه" className="hidden md:flex" />
          <Button
            variant="text"
            onClick={handleOpen}
            className="p-1"
          >
            <span className="text-nautral-600">
              <Close size="20" />
            </span>
          </Button>
        </DialogHeader>
        <DialogBody className="w-full flex flex-col items-center text-nautral-700">{children}</DialogBody>
      </Dialog>
    </>
  );
};

export default ModalBox;
