type Props = JSX.IntrinsicElements["input"];

export const SearchInput = ({ className, ...props }: Props) => {
  return (
    <div className={`relative ${className ?? ""}`}>
      <input className="generic-input pl-11" {...props} />

      <div className="x-center absolute inset-0 left-0 h-11 w-11 text-gray-500">
        <span className="y-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
