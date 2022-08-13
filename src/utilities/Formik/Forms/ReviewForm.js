import { Form } from "formik";
import React from "react";
import { FormButton, FormikTextField } from "../../Form/FormField";

export default function ReviewForm({ processing }) {
  return (
    <Form>
      <FormikTextField
        form_label="your name"
        type="text"
        name="customer_name"
      />

      <FormikTextField form_label="rating point" type="number" name="rating" />

      <FormikTextField
        form_label="review comment"
        type="textarea"
        name="review_name"
      />

      <FormButton
        type="submit"
        btn_name="place order"
        processing={processing}
      />
    </Form>
  );
}
