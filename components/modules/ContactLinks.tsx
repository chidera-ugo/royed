export const ContactLinks = () => {
  return (
    <div>
      <a
        href={`tel:${"08164863939"}`}
        className="smooth flex align-middle text-gray-400 hover:text-primary-main"
      >
        <div className="my-auto mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <div>0816 486 3939</div>
      </a>

      <a
        href={`mailto:${"hello@royed.com"}`}
        className="smooth mt-3 flex align-middle text-gray-400 hover:text-primary-main"
      >
        <div className="my-auto mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <div>hello@royed.com</div>
      </a>

      <a
        href="https://goo.gl/maps/tmYwxvYgYhdxAzv47"
        rel="noreferrer noopener"
        target="_blank"
        className="smooth mt-3 flex align-middle text-gray-400 hover:text-primary-main"
      >
        <div className="my-auto mr-3 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>No 5, Ebitu Ukiwe Street, Jabi, Abuja</div>
      </a>
    </div>
  );
};
