export const showBadge = (badge: string) => {
  switch (badge) {
    case "خوش برخورد":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="1em"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zm4.85 2.55a.75.75 0 00-1.2.9 5.742 5.742 0 004.6 2.3 5.742 5.742 0 004.6-2.3.75.75 0 10-1.2-.9 4.243 4.243 0 01-3.4 1.7 4.243 4.243 0 01-3.4-1.7zM10 10a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
            fill="currentColor"
          ></path>
        </svg>
      );
    case "کمترین معطلی":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="1em"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zm9-4a.75.75 0 00-1.5 0v4c0 .25.125.485.334.624l3 2a.75.75 0 10.832-1.248l-2.666-1.777V8z"
            fill="currentColor"
          ></path>
        </svg>
      );

    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="1em"
          role="img"
        >
          <path
            d="M8 2v3m8-3v3M3.5 9.09h17m.5-.59V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M15.695 13.7h.009m-.009 3h.009m-3.709-3h.01m-.01 3h.01m-3.711-3h.01m-.01 3h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
  }
};
