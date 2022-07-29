interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  submitting?: boolean;
}

export const SubmitButton: React.FC<Props> = ({
  children,
  className,
  disabled,
  submitting,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`secondary-button-solid h-12 ${className ?? ""}`}
      disabled={disabled || submitting}
    >
      <div className="x-center mx-auto text-center">
        {submitting ? (
          <svg className="spinner h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          children
        )}
      </div>
    </button>
  );
};
