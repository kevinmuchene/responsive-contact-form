import { useFormik } from "formik";
import { FormData } from "../types/common";
import validationSchema from "../utils/yupValidation";

export const initialValues: FormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  country: "",
};

export const useFormikForm = (
  onSubmitCallback: (values: typeof initialValues) => void
) => {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmitCallback(values);
      resetForm();
    },
  });

  return { formik };
};
