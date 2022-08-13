import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { MdCloudDone } from "react-icons/md";
import AlertToast from "../../utilities/alertToast/AlertToast";
import FormikFormLayout from "../../utilities/Formik/FormikLayout/FormikFormLayout";
import ReviewForm from "../../utilities/Formik/Forms/ReviewForm";
import { AddReviewRatingFormValidator } from "../../utilities/Formik/Validators/AllFormValidators";

export default function AdditonalInfo({ additionalInfo }) {
  const { description, weight, tags } = additionalInfo;
  const [tab, setTab] = useState("description");

  const {
    initialValues,
    validationSchema,
    onSubmit,
    processing,
    toastText,
    toastType,
    toastOn,
    setToastOn,
  } = AddReviewRatingFormValidator();

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
      {toastOn && <AlertToast toast_config={toast_config} />}
      <div className="additional_info_wrapper">
        <div className="flex justify-start items-center pb-3">
          <div>
            <button
              onClick={() => setTab("description")}
              id={tab === "description" ? "cart_btn" : "tab_btn"}
              className="!rounded-sm !text-light !capitalize"
            >
              description
            </button>
          </div>
          &nbsp;
          <div>
            <button
              onClick={() => setTab("additional")}
              id={tab === "additional" ? "cart_btn" : "tab_btn"}
              className="!rounded-sm !text-light !capitalize"
            >
              Additonal info
            </button>
          </div>
          &nbsp;
          <div>
            <button
              onClick={() => setTab("review")}
              id={tab === "review" ? "cart_btn" : "tab_btn"}
              className="!rounded-sm !text-light !capitalize"
            >
              Review
            </button>
          </div>
        </div>
        {tab === "description" && (
          <div className="additional_info_content_wrapper">
            <h3 className="text-semi_medium font-medium tracking-wider text-black2 mb-10">
              Description
            </h3>
            <p>{description}</p>
          </div>
        )}

        {tab === "additional" && (
          <div className="additional_info_content_wrapper">
            <h3 className="text-semi_medium font-medium tracking-wider text-black2 mb-10">
              Additonal Information
            </h3>
            <div className="grid grid-cols-2 border border-slate-300">
              <div className="border-r-1 border-slate-300 h-15 px-1 flex items-center">
                Weight
              </div>
              <div className="h-15 px-1 flex items-center">{weight} kg</div>
            </div>
          </div>
        )}

        {tab === "review" && (
          <div className="additional_info_content_wrapper">
            <h3 className="text-semi_medium font-medium tracking-wider text-black2 mb-10">
              Reviews and Rattings
            </h3>
            <FormikFormLayout
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <ReviewForm processing={processing} />
            </FormikFormLayout>
          </div>
        )}
      </div>
    </>
  );
}
