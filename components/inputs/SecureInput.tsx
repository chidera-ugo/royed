import { useField } from "formik";
import { useState } from "react";

type Props = JSX.IntrinsicElements["input"] & {
  label: string;
  prompt?: string;
};

export const SecureInput = ({ label, className, prompt, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
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
          type={showPassword ? "text" : "password"}
          className={`generic-input pr-11 ${
            meta.touched && meta.error ? "border-primary-main" : ""
          }`}
        />

        <button
          tabIndex={-1}
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="smooth hover:text-primary-700 absolute right-0 h-11 w-11 text-gray-500"
        >
          <span className="x-center">
            {showPassword ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42001 13.9799 8.42001 11.9999C8.42001 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.47 3.71997 5.18 5.79997 2.89 9.39997C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M14.53 9.46992L9.47001 14.5299C8.82001 13.8799 8.42001 12.9899 8.42001 11.9999C8.42001 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.47 3.72998 5.18 5.80998 2.89 9.40998C1.99 10.82 1.99 13.19 2.89 14.6C3.68 15.84 4.6 16.91 5.6 17.77"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.42001 19.5299C9.56001 20.0099 10.77 20.2699 12 20.2699C15.53 20.2699 18.82 18.1899 21.11 14.5899C22.01 13.1799 22.01 10.8099 21.11 9.39993C20.78 8.87993 20.42 8.38993 20.05 7.92993"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.47 14.53L2 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L14.53 9.47"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </button>
      </div>

      {meta.touched && meta.error ? (
        <div className="generic-error">{meta.error}</div>
      ) : prompt && !meta.value ? (
        <div className="generic-error text-gray-500">{prompt}</div>
      ) : null}
    </div>
  );
};
