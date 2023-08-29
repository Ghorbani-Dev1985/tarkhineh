import { Input } from "@material-tailwind/react";

const FormikInput = ({ label, name, formik, id ,  type = "text" , children }) => {
  return (
    <>
      <div className="w-full my-6">
        <div className="relative mx-3">
          <input
        //    {...formik.getFieldProps({ name })}
            type={type}
            name={name}
            id={id}
            // value={formik.values[name]}
            className="flex w-full px-2.5 pb-2.5 pt-4 text-sm text-PrimaryBrandColor bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-PrimaryBrandColor focus:outline-none focus:ring-0 focus:border-PrimaryBrandColor peer"
            placeholder=" "
          />
          <label
            htmlFor={id}
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-Ptext-PrimaryBrandColor px-2 peer-focus:px-2 peer-focus:text-Prborder-PrimaryBrandColor peer-focus:dark:text-Prborder-PrimaryBrandColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          >
           {label}
          </label>
          <div className="absolute left-1 top-3">
            {children}
          </div>
        {/* {formik.errors[name] && formik.touched[name] && (
          <p className="text-red-500 text-sm font-bold mt-3">
            {formik.errors[name]}
          </p>
        )} */}
        </div>
      </div>
    </>
  );
};

export default FormikInput;
