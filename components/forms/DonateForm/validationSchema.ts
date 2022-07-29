import * as Yup from "yup";

export default Yup.object({
  email: Yup.string().required("Please provide your email"),
});
