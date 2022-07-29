import { useField } from "formik";

type Props = JSX.IntrinsicElements["select"] & {
  label: string;
  options: string[];
  prompt?: string;
  isRequired?: boolean;
};

export const GenericSelect = ({
  label,
  options,
  isRequired,
  prompt,
  className,
  ...props
}: Props) => {
  const [field, meta] = useField(props.name as string);

  return (
    <div className={`${className ?? ""}`}>
      <label htmlFor={props.id} className="generic-label">
        {label} {isRequired && <span className="text-primary-main">*</span>}
      </label>

      <select
        {...props}
        {...field}
        className={`generic-input pr-14 ${
          meta.touched && meta.error ? "border-primary-main" : ""
        } ${meta.value ? "" : "text-gray-500"}`}
      >
        <option value="" className="text-gray-900 opacity-10">
          Select option
        </option>
        {options.map((value) => (
          <option key={value} value={value} className="capitalize">
            {value}
          </option>
        ))}
      </select>

      {meta.touched && meta.error ? (
        <div className="generic-error">{meta.error}</div>
      ) : prompt && !meta.value ? (
        <div className="generic-error text-gray-500">{prompt}</div>
      ) : null}
    </div>
  );
};
