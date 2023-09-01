import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput from "../../Common/FormikInput";

//? Formik
const initialValues = {
    FullName: "",
    PhoneNumber: "",
    Email: "",
    TextMessage: "",
  };

  const validationSchema = Yup.object({
    FullName: Yup.string()
    .required("ورود نام و نام خانوادگی الزامی می باشد")
    .min(5, "حداقل ۵ کاراکتر وارد نمایید"),
    PhoneNumber: Yup.string()
      .required("ورود شماره موبایل الزامی می باشد")
      .matches(/^[0-9]{11}$/, "شماره موبایل را به درستی وارد نمایید")
      .nullable(),
    Email: Yup.string()
        .min(3, "حداقل ۳ کاراکتر وارد نمایید")
        .email("ایمیل وارد شده اشتباه است"),
    TextMessage: Yup.string()
    .required("ورود متن پیام الزامی می باشد")
    .min(20, "حداقل ۵ کاراکتر وارد نمایید"),
  });

const FooterContactForm = () => {
    const onSubmit = async () => {
        try {
     
        } catch (error) {
         
        }
      };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
      });
    return ( 
       <form onSubmit={formik.handleSubmit}>
          <FormikInput 
          label="نام و نام خانوادگی"
          name="FullName"
          formik={formik}
          value="FullName"
          />

          <button type="submit">
          ارسال پیام
          </button>
       </form>
     );
}
 
export default FooterContactForm;