import { CheckoutButton } from "components/buttons/CheckoutButton";
import { SubmitButton } from "components/buttons/SubmitButton";
import { AmountInput } from "components/inputs/AmountInput";
import { GenericCheckbox } from "components/inputs/GenericCheckbox";
import { GenericInput } from "components/inputs/GenericInput";
import { Form as FormikForm } from "formik";
import { useRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction, useEffect } from "react";
import initialValues from "./initialValues";

interface Props {
  setValues: (
    values: SetStateAction<typeof initialValues>,
    shouldValidate?: boolean | undefined
  ) => void;
  values: typeof initialValues;
  setAmount: Dispatch<SetStateAction<string>>;
  amount: string;
  amounts: number[];
  isValid: boolean;
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

export const Form = ({
  setValues,
  isValid,
  values,
  setAmount,
  amount,
  amounts,
  handleSubmit,
  setFieldValue,
}: Props) => {
  useEffect(() => {
    setValues({
      ...values,
      amount: Number(amount).toLocaleString(),
    });
  }, []);

  useEffect(() => {
    setAmount(values.amount);
  }, [values.amount]);

  const { replace } = useRouter();

  return (
    <FormikForm onSubmit={handleSubmit} className="p-0 640:p-8">
      {/* DONATION AMOUNT */}
      <div>
        <h2>Donation Amount</h2>

        <div className="mt-5">
          <div className="text-sm text-gray-400">Select an amount below</div>
          <div className="mt-3 grid grid-cols-6 justify-start gap-4">
            {amounts.map((value) => {
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(String(value));
                    setFieldValue("amount", value.toLocaleString(), true);
                  }}
                  className={`col-span-6 425:col-span-3 ${
                    Number(amount.replace(/\D/g, "")) === value
                      ? "primary-button-solid"
                      : "primary-button-outline"
                  }`}
                >
                  <div className="mx-auto">NGN {value.toLocaleString()}</div>
                </button>
              );
            })}
          </div>

          <h1 className="mt-9 mb-7 text-lg font-medium">OR</h1>

          <AmountInput
            label="Type custom amount"
            name="amount"
            inputMode="numeric"
            className="w-full"
            setFieldValue={(value) => {
              setFieldValue(
                "amount",
                Number(value.replace(/\D/g, "")).toLocaleString(),
                true
              );
              setAmount("");
            }}
          />
        </div>
      </div>

      {/* PERSONAL INFORMATION */}
      <div className="mt-12">
        <h2>Personal Information</h2>

        <div className="mt-5">
          <GenericInput
            label="Email"
            placeholder="johndoe@gmail.com"
            name="email"
            isRequired
          />

          <GenericInput
            label="Full name (optional)"
            placeholder="John Doe"
            name="fullName"
            className="mt-5"
          />

          <GenericInput
            label="Phone number (optional)"
            placeholder="08012345677"
            name="phoneNumber"
            className="mt-5"
          />

          <div className="flex align-middle">
            <GenericCheckbox
              label="Make anonymous donation?"
              name="isAnonymous"
              className="mt-5"
            />
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        * Your payment information is secure and safe, we do not store your card
        details
      </p>

      {isValid ? (
        <CheckoutButton
          onSuccess={(reference) => {
            console.log(reference);
            replace(
              `/donate?success=true&email=${values.email}&ref=${reference}`
            );
          }}
          onClose={() => null}
          buttonText="Make Donation"
          config={values}
          className="mt-10"
        />
      ) : (
        <SubmitButton className="mt-10" submitting={false} type="submit">
          Make Donation
        </SubmitButton>
      )}
    </FormikForm>
  );
};
