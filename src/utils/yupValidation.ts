import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .test(
      "is-trimmed",
      "First Name cannot contain leading or trailing spaces",
      (value) => value === value?.trim()
    )
    .min(3, "First Name must be at least 3 characters")
    .max(15, "First Name must not exceed 15 characters")
    .required("First Name is required"),

  lastName: Yup.string()
    .test(
      "is-trimmed",
      "Last Name cannot contain leading or trailing spaces",
      (value) => value === value?.trim()
    )
    .min(3, "Last Name must be at least 3 characters")
    .max(15, "Last Name must not exceed 15 characters")
    .required("Last Name is required"),

  phoneNumber: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Phone number must be in the format 123-456-7890"
    )
    .required("Phone Number is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  country: Yup.string().required("Country is required"),
});

export default validationSchema;
