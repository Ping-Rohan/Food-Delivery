import * as yup from "yup";

export default yup.object({
  email: yup
    .string()
    .required("Please enter email")
    .email("Please enter valid email"),
  password: yup.string().required("Please enter password").min(6),
});
