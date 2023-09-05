


const FormikInput = ({ name, formik, type , placeholder }) => {
  return (
    <>
      <div className="w-full my-3">
        <input
          className="block p-2.5 mb-2 w-full text-white bg-transparent rounded-lg border border-gray-300 placeholder:text-white focus:!border-white focus:!border-t-white focus:ring-white/10"
         {...formik.getFieldProps({ name })}
          name={name}
          type={type}
          id={name}
          placeholder={placeholder}
          value={formik.values[name]}
          />
         {formik.errors[name] && formik.touched[name] && (
          <p className="text-error-500 text-sm font-bold mt-3">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </>
  );
};

export default FormikInput;
