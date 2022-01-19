import * as yup from "yup";

const productFormValidators = (origins) => {
  return yup.object().shape({
    name: yup
      .string()
      .min(3, "Please enter a name more than 3 character")
      .max(20, "Please enter a name less than 20 character")
      .required("This field is required"),
    price: yup
      .number("Price must be a number")
      .typeError("Price must be a number")
      .required("This field is required")
      .positive("Price must be more than 0")
      .integer(),
    origin: yup
      .object()
      .required(
        `Origins must be one of the following values: ${origins.map(
          (el) => el.label
        )}`
      ),
  });
};

export default productFormValidators;
