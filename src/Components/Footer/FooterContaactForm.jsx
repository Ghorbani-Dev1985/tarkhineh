import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput from "../../Common/Formiklnput";
import FormikTextarea from "../../Common/FormikTextarea";
import AddService from "../../Services/AddService";
import { toast } from "react-hot-toast";

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
    .min(20, "حداقل ۲۰ کاراکتر وارد نمایید"),
});

const FooterContactForm = () => {
  const onSubmit = async (values) => {
    try {
      await AddService(values);
      toast.success("پیام شما با موفقیت ثبت گردید");
    } catch (error) {
      toast.error("خطا در برقراری ارتباط با سرور");
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
      <div className="flex justify-between items-center gap-5 p-3">
        <div className="flex flex-col w-2/3">
          <FormikInput
            placeholder="نام و نام خانوادگی *"
            name="FullName"
            formik={formik}
            value="FullName"
          />
          <FormikInput
            placeholder="شماره موبایل *"
            type="tel"
            name="PhoneNumber"
            formik={formik}
            value="PhoneNumber"
            className="font-Estedad text-left"
          />
          <FormikInput
            placeholder="ایمیل (اختیاری)"
            type="email"
            name="Email"
            formik={formik}
            value="Email"
            className="font-Estedad text-left"
          />
        </div>
        <div className="flex flex-col w-full items-end">
          <FormikTextarea
            placeholder="متن پیام"
            name="TextMessage"
            formik={formik}
            value="TextMessage"
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="border disabled:opacity-30 disabled:hover:font-normal cursor-pointer border-white rounded-lg max-w-xs px-16 hover:font-extrabold text-lg transition-all ease-linear duration-300 py-1 text-white"
          >
            ارسال پیام
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterContactForm;

// https://db-json-delta.vercel.app/db.json
