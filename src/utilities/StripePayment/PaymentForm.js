import { CardElement, useStripe } from "@stripe/react-stripe-js";
import { Form } from "formik";
import { useEffect, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { MdCloudDone } from "react-icons/md";
import FormikFormLayout from "../../utilities/Formik/FormikLayout/FormikFormLayout";
import AlertToast from "../alertToast/AlertToast";
import { FormButton, FormikTextField } from "../Form/FormField";
import { PaymentFormValidator } from "../Formik/Validators/AllFormValidators";

export default function PaymentForm({ payable_amount, order_id }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/stripe_payment/payment_intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ payable_amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data?.clientSecret);
      });
  }, [payable_amount]);

  // stripe here
  const stripe = useStripe();

  const {
    initialValues,
    validationSchema,
    onSubmit,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = PaymentFormValidator(clientSecret);

  const cardElementOpts = {
    style: {
      base: {
        iconColor: "#ff8750",
        color: "#31325F",
        lineHeight: "25px",
        fontWeight: 500,
        fontFamily: "Poppins",
        padding: "10px",
        fontSize: "16px",

        "::placeholder": {
          color: "#ff8750",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
    // hidePostalCode: true,
  };

  // toast controll configuration here
  /****** */
  // handle close toast here
  const handleRemoveToast = () => {
    setToastOn(false);
  };

  // auto close toast after ther 5000ms delay
  if (toastOn) {
    setTimeout(() => {
      setToastOn(false);
    }, 5000);
  }

  // toast setting configuration here
  const toast_config = {
    toastStyle: toastType,
    alertText: toastText,
    toastIcon:
      toastType === "error_toast" ? <BiErrorCircle /> : <MdCloudDone />,

    handleRemoveToast: handleRemoveToast,
  };

  return (
    <>
      {/* message toast alert */}
      {toastOn && <AlertToast toast_config={toast_config} />}

      <FormikFormLayout
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormikTextField
            form_label="your name"
            type="text"
            name="customer_name"
          />

          <FormikTextField
            form_label="your email"
            type="email"
            name="customer_email"
          />

          <FormikTextField
            form_label="your mobile"
            type="tel"
            name="customer_phone"
          />

          <label id="input_label" htmlFor="field_label">
            card details
            <span id="required_sign">*</span>
          </label>
          <CardElement id="field_input" options={cardElementOpts} />

          <div style={{ marginTop: "15px" }}>
            <FormButton
              type="submit"
              processing={processing}
              btn_name={`Pay Now ৳ ${payable_amount}`}
              disabled={processing || !stripe}
            />
          </div>
        </Form>
      </FormikFormLayout>
    </>
  );
}
