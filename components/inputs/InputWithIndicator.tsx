import { useField } from "formik";

type Props = JSX.IntrinsicElements["input"] & {
  label: string;
  prompt?: string;
  indicator: string;
};

export const InputWithIndicator = ({
  label,
  className,
  indicator,
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
          className={`generic-input pr-[92px] ${
            meta.touched && meta.error ? "border-primary-main" : ""
          }`}
        />

        <div className="absolute right-0 inline-block h-11 w-[80px] border-l border-gray-700">
          <div className="y-center my-auto h-full">{indicator}</div>
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
