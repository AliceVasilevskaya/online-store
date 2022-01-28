import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Input } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import styles from "./ProductForm.module.css";
import Preloader from "../../../ui-kit/Preloader/Preloader";
import { ProductValues } from "../../../utils/constants";
import productFormValidators from "../../../utils/validators";

const ProductForm = function ({
  origins,
  submitName,
  values,
  isFetching,
  onSubmitButtonClick,
}) {
  const originsWithoutAll = origins.filter((el) => el.label !== "All");
  const schema = productFormValidators(originsWithoutAll);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: values.name,
      price: values.price,
      origin: values.origin,
    },
  });
  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmitButtonClick({ data, id: values.id });
        })}
        className={styles.form}
      >
        <section>
          <div>Product name: </div>
          <Controller
            shouldUnregister={false}
            render={({ field }) => (
              <Input
                value={field.value}
                onChange={field.onChange}
                name={field.name}
                disabled={isFetching}
              />
            )}
            name="name"
            className={styles.input}
            control={control}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </section>
        <section>
          <div>Price: </div>
          <Controller
            shouldUnregister={false}
            render={({ field }) => (
              <Input
                value={field.value}
                onChange={field.onChange}
                name={field.name}
                disabled={isFetching}
              />
            )}
            name="price"
            className={styles.input}
            control={control}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </section>
        <section>
          <div>Origin</div>
          <Controller
            shouldUnregister={false}
            name="origin"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                name={field.name}
                options={originsWithoutAll}
                disabled={isFetching}
              />
            )}
          />
          {errors.origin && <p>{errors.origin.message}</p>}
        </section>
        <div className={styles.buttons}>
          <button
            disabled={isFetching}
            className={`${styles.buttonBlack} ${styles.button}`}
            type="button"
            onClick={() => {
              reset({
                name: values.name,
                price: values.price,
                origin: values.origin,
              });
            }}
          >
            Reset Form
          </button>
          <button type="submit" disabled={isFetching} className={styles.button}>
            {isFetching && (
              <span className={styles.preloader}>
                <Preloader />
              </span>
            )}
            {submitName}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  origins: PropTypes.instanceOf(Array),
  submitName: PropTypes.string,
  values: PropTypes.shape(ProductValues),
  isFetching: PropTypes.bool,
  onSubmitButtonClick: PropTypes.func,
};
ProductForm.defaultProps = {
  onSubmitButtonClick: () => {},
  origins: [],
  isFetching: false,
  values: {},
  submitName: "",
};
