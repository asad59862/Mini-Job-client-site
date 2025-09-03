import React from "react";
import { Link, useRouteError } from "react-router";

/**
 * Error Page using TailwindCSS + DaisyUI
 */

const HomeButton = () => (
  <Link to="/" className="btn btn-primary rounded-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-5 h-5 mr-2 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m-4 0h8"
      />
    </svg>
    Go Home
  </Link>
);

const ErrorPage = ({
  code = 404,
  title = "Page not found",
  message = "The page you’re looking for doesn’t exist or was moved.",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <span className="badge badge-error badge-lg mb-4">Error {code}</span>

          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-base text-gray-500 mb-6">{message}</p>

          <HomeButton />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

// Drop-in page for React Router's `errorElement`
export const RouterErrorPage = () => {
  let status = 500;
  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  try {
    const error = useRouteError();
    status = error?.status || status;
    title = error?.statusText || error?.message || title;
  } catch (error) {
    console.log(error)
    // useRouteError is only available when used as `errorElement`
  }

  return <ErrorPage code={status} title={title} message={message} />;
};
