import { Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

//? Formik
const initialValues = {
  LoginPhoneNumber: "",
};

const validationSchema = Yup.object({
  LoginPhoneNumber: Yup.string()
    .required("ورود شماره موبایل الزامی می باشد")
    .matches(/^[۰-۹]{11}$/, "شماره موبایل را به درستی وارد نمایید")
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
      <Typography className="font-bold mb-2">ورود / ثبت نام</Typography>
      <Typography className="mb-6 text-xs">
        با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
      </Typography>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <LoginInput
          placeholder="شماره همراه"
          name="LoginPhoneNumber"
          formik={formik}
          value="LoginPhoneNumber"
        ></LoginInput>
        <button
          type="submit"
          disabled={!formik.isValid}
          className="w-full disabled:opacity-30 disabled:bg-slate-400 bg-PrimaryBrandColor text-white my-4 rounded-md font-bold py-2"
        >
          ادامه
        </button>
        <Typography className="text-xs flex">
          ورود و عضویت در ترخینه به منزله قبول
          <Link to="" className="text-PrimaryBrandColor mx-1">
            قوانین و مقررات
          </Link>
          است.
        </Typography>
        3
      </form>
    </>
  );
};

export default StepOne;

const LoginInput = ({ children, name, formik, type, placeholder }) => {
  return (
    <>
      <div className="w-full relative">
        <input
          {...formik.getFieldProps({ name })}
          name={name}
          type={type}
          value={formik.values[name]}
          id="floating_outlined"
          className="block px-2.5 py-2.5 pb-2.5 w-full text-sm text-nautral-700 bg-transparent rounded-lg border-1 border-nautral-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-PrimaryBrandColor peer text-left"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-nautral-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-PrimaryBrandColor peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
        >
          {placeholder}
        </label>
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <p className="text-error-500 text-sm font-bold mt-3">
          {formik.errors[name]}
        </p>
      )}
      {children}
    </>
  );
};

export { LoginInput };
