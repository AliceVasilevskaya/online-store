import * as PropTypes from "prop-types";

const productItemDefault = {
  id: "",
  name: 0,
  price: 0,
  origin: "",
  createdAt: "",
  updatedAt: "",
};
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

export { productItemDefault, productItem, cartItem };
