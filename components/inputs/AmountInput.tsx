import { useField } from "formik";

type Props = JSX.IntrinsicElements["input"] & {
  label: string;
  prompt?: string;
  setFieldValue: (value: string) => void;
};

export const AmountInput = ({
  label,
  className,
  setFieldValue,
  prompt,
  ...props
}: Props) => {
  const [field, meta] = useField(props.name as string);

  return (
    <div className={`${className ?? ""}`}>
      <label htmlFor={props.id} className="generic-label">
        {label}
      </label>

      <div className="relative w-full">
        <input
          {...props}
          {...field}
          onChange={(e) => setFieldValue(e.target.value)}
          className={`generic-input pl-[56px] ${
            meta.touched && meta.error ? "border-error-main" : ""
          }`}
        />

        <div className="absolute left-0 inline-block h-10 w-[60px] text-center">
          <div className="y-center my-auto h-full text-gray-500">NGN </div>
        </div>
      </div>

      {meta.touched && meta.error ? (
        <div className="generic-error">{meta.error}</div>
      ) : prompt ? (
        <div className="generic-error text-gray-500">{prompt}</div>
      ) : null}
    </div>
  );
};
