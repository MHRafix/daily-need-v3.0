import { Form } from "formik";
import Cookie from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect } from "react";
import Logo from "../../../../images/logo/logo_black.webp";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import {
  FormButton,
  FormikTextField,
} from "../../../../utilities/Form/FormField";
import FormikFormLayout from "../../../../utilities/Formik/FormikLayout/FormikFormLayout";
import { AdminLoginFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import toastConfig from "../../../../utilities/toastConfig";

export default function AdminLogin() {
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  useEffect(() => {
    if (userInfo?.user_admin) {
      Router.back();
    }
  });

  const {
    initialValues,
    validationSchema,
    onSubmit,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = AdminLoginFormValidator();

  const { toast_config } = toastConfig(setToastOn, toastType, toastText);

  return (
    <div className="page_main_wrapper">
      <Head>
        <title>Daily Needs - Admin Login</title>
        <meta name="description" content="Admin login page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gradient-to-r from-orangee to-orangee_red w-screen h-screen flex items-center justify-center">
          <div className="bg-white py-5 px-3 rounded-md lg:!w-2/5 xs:w-full shadow-xl">
            {toastOn && <AlertToast toast_config={toast_config} />}
            <div className="text-center my-5">
              <Image src={Logo} alt="Logo" />
            </div>
            <FormikFormLayout
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <FormikTextField
                  form_label="your email"
                  type="email"
                  name="user_email"
                />
                <FormikTextField
                  form_label="your password"
                  type="password"
                  name="user_password"
                />
                <FormButton
                  type="submit"
                  btn_name="Admin Login"
                  processing={processing}
                />
              </Form>
            </FormikFormLayout>
          </div>
        </div>
      </main>
    </div>
  );
}
