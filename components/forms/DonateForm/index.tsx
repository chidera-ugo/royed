import { Formik } from "formik";
import initialValues from "./initialValues";
import validationSchema from "./validationSchema";
import { useState } from "react";
import { Form } from "./Form";

export const DonateForm = () => {
  const amounts = [5000, 10000, 50000, 100000];
  const [amount, setAmount] = useState(String(amounts[2]));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, setValues, isValid, setFieldValue, values }) => {
        return (
          <Form
            handleSubmit={handleSubmit}
            setValues={setValues}
            isValid={isValid}
            setFieldValue={setFieldValue}
            values={values}
            amount={amount}
            amounts={amounts}
            setAmount={setAmount}
          />
        );
      }}
    </Formik>
  );
};
