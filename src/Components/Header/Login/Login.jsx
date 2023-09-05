import React, { useState } from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import Close from "../../../Common/Close";
import { ArrowRight2, User } from "iconsax-react";
import Logo from "../../../Assets/Images/Logo/logo.png";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";




const Login = () => {
    const steps = ["انتخاب فایل دوربین‌ها", " انتخاب دوربین", "انتخاب نوع زمان‌بندی"];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  function getSectionComponent() {
    switch(currentStep) {
      case 1: return <StepOne />;
      case 2: return <StepTwo />;
      case 3: return <StepThree />;
      default: return null;
    }
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-brand-50 rounded-lg p-3 flex justify-center items-center"
      >
        <User size="24" className="text-PrimaryBrandColor ml-1" />
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
         {steps?.map((step, i) => (
          <div
            key={i}
           className="hidden"
          >
          </div>
        ))}
      {!complete && (
        <> 
         <ArrowRight2  onClick={() => {
             currentStep === steps.length
             ? setComplete(true)
             : setCurrentStep((prev) => prev + 1);
            }} size="20" className={`${currentStep === 1 ? "" : "flex"} text-nautral-600 cursor-pointer`}  />      
        
          </>
      )}
         
          <img src={Logo} alt="رستوران ترخینه" className={`${currentStep === 1 && "mr-[4.55rem]"} hidden md:flex`} />
          <Button variant="text" onClick={handleOpen} className="p-1">
            <span className="text-nautral-600">
              <Close size="20" />
            </span>
          </Button>
              </DialogHeader>

          <DialogBody className="w-full flex flex-col items-center text-nautral-700">
              {getSectionComponent()}
        </DialogBody>

      </Dialog>



    </>
  );
};

export default Login;


