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
  origin: PropTypes.instanceOf(Object),
};

export { productItem, cartItem, ProductValues };
