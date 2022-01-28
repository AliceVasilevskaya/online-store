import * as PropTypes from "prop-types";

const productItem = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  origin: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
};
const cartItem = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
const ProductValues = {
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  origin: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};
const firstPage = 1;
const oneItem = 1;
const maxValueOfFirstPortion = 4;

export {
  productItem,
  cartItem,
  ProductValues,
  firstPage,
  oneItem,
  maxValueOfFirstPortion,
};
