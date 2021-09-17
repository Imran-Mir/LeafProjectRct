import React from "react";
import styles from "./../styles/form.css";
import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";
import { mutations } from "../graphql/schema";
import * as Yup from "yup";

const FeatureForm = ({ selectedItem, handleClose }) => {
  const [updateFeatures, { loading: updateSpecs }] = useMutation(
    mutations.UPDATE_FEATURE,
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
          id: selectedItem?.id,
          powerSteering: selectedItem?.powerSteering || false,
          PowerWindowsFront: selectedItem?.PowerWindowsFront || false,
          abs: selectedItem?.abs || false,
          ac: selectedItem?.ac || false,
          driverAirbag: selectedItem?.driverAirbag || false,
          passangerAirbag: selectedItem?.passangerAirbag || false,
          autoClimateCrontol: selectedItem?.autoClimateCrontol || false,
          alloyWheels: selectedItem?.alloyWheels || false,
          mfSteering: selectedItem?.mfSteering || false,
        }}
        onSubmit={async (value) => {
          let elementId = value.id;
          delete value.id;
          for (const property in value) {
            value[property] =
              value[property] === "true" || value[property] === true
                ? true
                : false;
            // console.log(`${property}: ${object[property]}`);
          }

          updateFeatures({
            variables: {
              id: elementId,
              values: {
                ...value,
              },
            },
          });
        }}
      >
        <Form>
          <div className={styles.formControl}>
            <label htmlFor="powerSteering">Power Steering </label>
            <Field id="powerSteering" name="powerSteering" component="select">
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="PowerWindowsFront"> Power Windows Front </label>
            <Field
              id="PowerWindowsFront"
              name="PowerWindowsFront"
              component="select"
            >
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="abs"> Anti Lock Brake </label>
            <Field id="abs" name="abs" component="select">
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="ac"> Air conditioner </label>
            <Field id="ac" name="ac" component="select">
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="driverAirbag"> Driver Airbag </label>
            <Field id="driverAirbag" name="driverAirbag" component="select">
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="passangerAirbag"> Passanger Airbag </label>
            <Field
              id="passangerAirbag"
              name="passangerAirbag"
              component="select"
            >
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="autoClimateCrontol"> Auto Climate Crontol </label>
            <Field
              id="autoClimateCrontol"
              name="autoClimateCrontol"
              component="select"
            >
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="alloyWheels"> Alloy Wheels </label>
            <Field id="alloyWheels" name="alloyWheels" component="select">
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="mfSteering"> Multi Function Steering </label>
            <Field id="mfSteering" name="mfSteering" component="select">
              <option value="true">True</option>
              <option value="false">false</option>
            </Field>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FeatureForm;
