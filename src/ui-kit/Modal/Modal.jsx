import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setOpen } from "../../store/products/products-slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalComponent = function ({ children, open }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        open={open}
        onClose={() => dispatch(setOpen(false))}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>{children}</Box>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};
ModalComponent.defaultProps = {
  open: false,
  children: undefined,
};
export default ModalComponent;
