import { Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

//? Formik
const initialValues = {
  PaternNumberOne: "",
  PaternNumberTwo: "",
  PaternNumberThree: "",
  PaternNumberFour: "",
  PaternNumberFive: "",
};

const validationSchema = Yup.object({
  PaternNumberOne: Yup.string()
    .required("")
    .matches(/^[0-9]{1}$/, "")
    .nullable(),
    PaternNumberTwo: Yup.string()
    .required("")
    .matches(/^[0-9]{1}$/, "")
    .nullable(),
    PaternNumberThree: Yup.string()
    .required("")
    .matches(/^[0-9]{1}$/, "")
    .nullable(),
    PaternNumberFour: Yup.string()
    .required("")
    .matches(/^[0-9]{1}$/, "")
    .nullable(),
    PaternNumberFive: Yup.string()
    .required("")
    .matches(/^[0-9]{1}$/, "")
    .nullable(),
});

const StepOne = () => {
  const onSubmit = async (values) => {
    try {
    } catch (error) {}
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <>
      <Typography className="font-bold mb-2">کد تایید</Typography>
      <Typography className="mb-6 text-xs">
       کد تایید پنج رقمی به شماره 

       ارسال شد.
      </Typography>
      <form onSubmit={formik.handleSubmit} className="w-full">
       <div className="flex justify-between flex-row-reverse items-center gap-5">
        <PaternInput name="PaternNumberOne" formik={formik} value="PaternNumberOne" />
        <PaternInput name="PaternNumberTwo" formik={formik} value="PaternNumberTwo" />
        <PaternInput name="PaternNumberThree" formik={formik} value="PaternNumberThree" />
        <PaternInput name="PaternNumberFour" formik={formik} value="PaternNumberFour" />
        <PaternInput name="PaternNumberFive" formik={formik} value="PaternNumberFive" />
       </div>
        <button
          type="submit"
          disabled={!formik.isValid}
          className="w-full disabled:opacity-30 disabled:bg-slate-400 bg-PrimaryBrandColor text-white my-4 rounded-md font-bold py-2"
        >
          ثبت کد
        </button>
        2
      </form>
    </>
  );
};

export default StepOne;

const PaternInput = ({ name, formik }) => {

  return (
    <>
      <div className="w-full relative">
        <input
          {...formik.getFieldProps({ name })}
          max={1}
          maxLength={1}
          name={name}
          type="text"
          value={formik.values[name]}
          id="floating_outlined"
          className={`bg-gray-50 border border-nautral-700 text-nautral-700 text-sm rounded-md focus:border-PrimaryBrandColor block outline-none focus:ring-0 w-12 text-center p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder=" "
        />
      </div>
    </>
  );
};

export { PaternInput };
