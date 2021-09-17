import React from "react";
import styles from "./../styles/form.css";
import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";
import { mutations } from "../graphql/schema";
import * as Yup from "yup";

const specsUpdate = Yup.object().shape({
  fuelType: Yup.string().required("Fuel Type is Required"),
  fuelTankCapacity: Yup.number().required("Fuel Tank Capacity Required"),
});

const SpecificationForm = ({ selectedItem, handleClose }) => {
  const [updateSpecifications, { loading: updateSpecs }] = useMutation(
    mutations.UPDATE_SPECIFICATION,
    {
      onCompleted(data) {
        handleClose();
      },
      onError({ message }) {
        console.log("the error is ", message);
        alert("something went Wrong");
      },
    }
  );

  return (
    <div>
      <Formik
        initialValues={{
          id: selectedItem?.id || "",
          mileage: selectedItem?.mileage || null,
          fuelType: selectedItem?.fuelType || "",
          engineDisplacement: selectedItem?.engineDisplacement || null,
          maxPower: selectedItem?.maxPower || "",
          maxTorque: selectedItem?.maxTorque || "",
          seatingCapacity: selectedItem?.seatingCapacity || null,
          transmissionType: selectedItem?.transmissionType || "",
          bootspace: selectedItem?.bootspace || null,
          fuelTankCapacity: selectedItem?.fuelTankCapacity || null,
          bodyType: selectedItem?.bodyType || "",
        }}
        validationSchema={specsUpdate}
        onSubmit={async (value) => {
          let elementId = value.id;
          delete value.id;
          updateSpecifications({
            variables: {
              id: elementId,
              values: {
                ...value,
                mileage: value.mileage === "" ? null : value.mileage,
                engineDisplacement:
                  value.engineDisplacement === ""
                    ? null
                    : value.engineDisplacement,
                seatingCapacity:
                  value.seatingCapacity === "" ? null : value.seatingCapacity,
                bootspace: value.bootspace === "" ? null : value.bootspace,
                fuelTankCapacity:
                  value.fuelTankCapacity === "" ? null : value.fuelTankCapacity,
              },
            },
          });
          //   await new Promise((r) => setTimeout(r, 500));
          //   alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.formControl}>
              <label htmlFor="mileage">Mileage </label>
              <Field id="mileage" name="mileage" type="number" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="fuelType">Fuel Type* </label>
              <Field id="fuelType" name="fuelType" />
              {errors.fuelType && touched.fuelType ? (
                <div className={styles.error}>{errors.fuelType}</div>
              ) : null}
            </div>
            <div className={styles.formControl}>
              <label htmlFor="engineDisplacement">Engine Displacement </label>
              <Field
                id="engineDisplacement"
                name="engineDisplacement"
                type="number"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="maxPower">Max Power </label>
              <Field id="maxPower" name="maxPower" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="maxTorque">Max Torque </label>
              <Field id="maxTorque" name="maxTorque" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="seatingCapacity">Seating Capacity </label>
              <Field
                id="seatingCapacity"
                name="seatingCapacity"
                type="number"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="transmissionType">Transmission Type </label>
              <Field id="transmissionType" name="transmissionType" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="bootspace">Boot Space </label>
              <Field id="bootspace" name="bootspace" type="number" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="fuelTankCapacity">Fuel Tank Capacity* </label>
              <Field
                id="fuelTankCapacity"
                name="fuelTankCapacity"
                type="number"
              />
              {errors.fuelTankCapacity && touched.fuelTankCapacity ? (
                <div className={styles.error}>{errors.fuelTankCapacity}</div>
              ) : null}
            </div>
            <div className={styles.formControl}>
              <label htmlFor="bodyType">Body Type</label>
              <Field id="bodyType" name="bodyType" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SpecificationForm;
