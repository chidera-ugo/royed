import { useField } from "formik";

type Props = JSX.IntrinsicElements["input"] & {
  label: string;
  prompt?: string;
  isRequired?: boolean;
};

export const GenericCheckbox = ({
  label,
  className,
  prompt,
  ...props
}: Props) => {
  const [field, meta] = useField(props.name as string);

  return (
    <div className={`${className ?? ""}`}>
      <label htmlFor={props.id} className="flex cursor-pointer align-middle">
        <input
          {...props}
          {...field}
          type="checkbox"
          className={`my-auto cursor-pointer ${
            meta.touched && meta.error ? "border-primary-main" : ""
          } ${props.disabled ? "disabled-input" : ""}`}
        />

        <div className="mt-1 text-base text-gray-500">{label}</div>
      </label>

      {meta.touched && meta.error ? (
        <div className="generic-error">{meta.error}</div>
      ) : prompt && !meta.value ? (
        <div className="generic-error text-gray-500">{prompt}</div>
      ) : null}
    </div>
  );
};
