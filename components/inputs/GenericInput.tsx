import { useField } from "formik";

type Props = JSX.IntrinsicElements["input"] & {
  label: string;
  prompt?: string;
  isRequired?: boolean;
};

export const GenericInput = ({
  label,
  className,
  isRequired,
  prompt,
  type = "text",
  ...props
}: Props) => {
  const [field, meta] = useField(props.name as string);

  return (
    <div className={`${className ?? ""}`}>
      <label htmlFor={props.id} className="generic-label">
        {label} {isRequired && <span className="text-primary-main">*</span>}
      </label>

      <input
        {...props}
        {...field}
        className={`generic-input ${
          meta.touched && meta.error ? "border-primary-main" : ""
        } ${props.disabled ? "disabled-input" : ""}`}
      />

      {meta.touched && meta.error ? (
        <div className="generic-error">{meta.error}</div>
      ) : prompt && !meta.value ? (
        <div className="generic-error text-gray-500">{prompt}</div>
      ) : null}
    </div>
  );
};
