import { Form } from "formik";
import Cookie from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import AlertToast from "../../../../utilities/alertToast/AlertToast";
import {
  FormButton,
  FormikTextField,
} from "../../../../utilities/Form/FormField";
import FormikFormLayout from "../../../../utilities/Formik/FormikLayout/FormikFormLayout";
import { UnlockFormValidator } from "../../../../utilities/Formik/Validators/AllFormValidators";
import toastConfig from "../../../../utilities/toastConfig";

export default function UnlockScreen() {
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  //   const isLockScreen =
  //     Cookie.get("lock_screen") && JSON.parse(Cookie.get("lock_screen"));

  const {
    initialValues,
    validationSchema,
    onSubmit,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = UnlockFormValidator();

  const { toast_config } = toastConfig(setToastOn, toastType, toastText);

  return (
    <div className="page_main_wrapper">
      <Head>
        <title>Daily Needs - Unlock Screen</title>
        <meta name="description" content="Admin login page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gradient-to-r from-orangee to-orangee_red w-screen h-screen flex items-center justify-center">
          {toastOn && <AlertToast toast_config={toast_config} />}
          <div className="bg-white lg:!p-2 xs:p-1.5 rounded-md md:!w-3/12 xs:w-11/12 shadow-xl">
            <div className="text-center mb-7">
              {userInfo?.user_pic && (
                <Image
                  src={userInfo?.user_pic}
                  alt="profile"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}

              <h3 className="text-black2 tracking-wide my-2 text-normal">
                {userInfo?.user_name}
              </h3>
            </div>
            <FormikFormLayout
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <FormikTextField
                  form_label="your password"
                  type="password"
                  name="user_password"
                />
                <FormButton
                  type="submit"
                  btn_name="Unlock Now"
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
