import { useState } from "react";



const FormikInput = ({ name, formik,  placeholder }) => {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const handleCount = (event) => {
    setTextAreaCount(event.target.value.length);
    console.log(textAreaCount);
  }
  return (
    <>
      <div className="w-full my-3">
        <textarea rows="5" maxLength="200"
          className="block p-2.5 mb-2 w-full text-white bg-transparent rounded-lg border border-gray-300 placeholder:text-white focus:!border-white focus:!border-t-white focus:ring-white/10"
         {...formik.getFieldProps({ name })}
          name={name}
          id={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onKeyUp={handleCount}
          ></textarea>
           <p className="flex justify-end items-center text-white text-base font-bold"><span className="text-rose-500">{200 - textAreaCount }</span> / {textAreaCount}</p>
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
