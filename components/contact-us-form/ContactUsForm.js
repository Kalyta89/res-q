import Button from "../basic/button/Button";
import Dropdown from "../basic/dropdown/Dropdown";
import Input from "../basic/input/input";
import TextArea from "../basic/text-area/TextArea";
import Text from "../basic/text/Text";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useCallback } from "react";
import Modal from "react-modal";
import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import {
  gridInputNameArea,
  gridInputEmailArea,
  gridInputOrganizationArea,
  gridSelectCountryArea,
  gridSelectIssueArea,
  gridTextAreaDescriptionArea,
  gridButtonArea,
  gridContactForm,
  contactUsFormInput,
  contactUsFormInputError,
  contactUsFormTextarea,
  contactUsFormTextareaError,
  modalOverlay,
  modal,
  closeCrossContainer,
  closeCross,
} from "./ContactUsForm.module.scss";

const issues = [
  { value: "login", label: "Login" },
  { value: "report", label: "Hospital reports" },
  { value: "award", label: "Awards program" },
  { value: "publication", label: "Publications" },
  { value: "other", label: "Other" },
];

const ContactUsForm = ({ countries }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      throw new Error("Execute reCaptcha not yet available");
    }

    const token = await executeRecaptcha("contact_form");
    return token;
  }, [executeRecaptcha]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      hospital: "",
      country: "",
      issue: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(70, "Name should be shorter").required("Name is required"),
      email: Yup.string().email("Valid email is required").required("Email Address is required"),
      hospital: Yup.string().max(100, "Hospital/Organization name should be shorter"),
      description: Yup.string().max(500, "Description should be shorter").required("Description is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const token = await handleReCaptchaVerify();

        const response = await fetch("/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            description: values.description,
            countryCode: values.country,
            unit: values.hospital,
            issue: values.issue,
            //recaptcha_response: token,
          }),
        });

        if (response.ok) {
          setModalIsOpen(true);
        }
      } catch (err) {
        console.error(`Form Submission Failed: `, err);
      }
      setSubmitting(false);
    },
  });

  return (
    <form className={classNames("bg-gray rounded-16px p-30px lg:p-50px", gridContactForm)}>
      <Input
        label="Name *"
        name="name"
        id="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className={gridInputNameArea}
        inputClassName={formik.errors.name && formik.touched.name ? contactUsFormInputError : contactUsFormInput}
      />
      <Input
        label="Email address *"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className={gridInputEmailArea}
        inputClassName={formik.errors.email && formik.touched.email ? contactUsFormInputError : contactUsFormInput}
      />
      <Input
        label="Hospital / Organization"
        name="hospital"
        id="hospital"
        value={formik.values.hospital}
        onChange={formik.handleChange}
        className={gridInputOrganizationArea}
        inputClassName={
          formik.errors.hospital && formik.touched.hospital ? contactUsFormInputError : contactUsFormInput
        }
      />

      <Dropdown
        name="country"
        label="Country"
        options={countries}
        placeholder="Please select an option"
        isAnyOption={false}
        onChange={(selectedOption) => formik.setFieldValue("country", selectedOption.value)}
        className={gridSelectCountryArea}
        borderColor={formik.errors.country && formik.touched.country ? "#a81a1a" : "#BFBFBF"}
        isContactForm={true}
      />
      <Dropdown
        name="issue"
        label="Issue"
        options={issues}
        placeholder="Please select an option"
        isAnyOption={false}
        onChange={(selectedOption) => formik.setFieldValue("issue", selectedOption.value)}
        className={gridSelectIssueArea}
        borderColor={formik.errors.issue && formik.touched.issue ? "#a81a1a" : "#BFBFBF"}
        isContactForm={true}
      />

      <TextArea
        label="Description *"
        name="description"
        id="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        className={gridTextAreaDescriptionArea}
        textareaClassName={
          formik.errors.description && formik.touched.description ? contactUsFormTextareaError : contactUsFormTextarea
        }
      />
      <div className={`grid md:flex justify-between mt-20px md:mt-37px ${gridButtonArea}`}>
        <Text typography="body" text="* Required field" color="color-black" className="my-12px mr-12px" />
        <Button variants="blue" btnClasses="w-200px" className="justify-self-center" onClick={formik.handleSubmit}>
          Submit Form
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        ariaHideApp={false}
        className={modal}
        overlayClassName={modalOverlay}
      >
        <Text
          typography="font-titillium font-bold not-italic text-25px md:text-50px leading-32px md:leading-76px"
          text="Thank you for reaching out to us for support. The RES-Q team will respond back to you in 2 working days."
        />
        <div onClick={() => setModalIsOpen(!modalIsOpen)} className={closeCrossContainer}>
          <div className={closeCross}></div>
        </div>
      </Modal>
    </form>
  );
};
export default ContactUsForm;
