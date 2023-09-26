"use client";

interface ErrorProps {
  error: any;
  reset: () => void;
}

const error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="text-center mt-10">
      <p>Something went wrong</p>{" "}
      <button onClick={reset} className="hover:text-amber-600">
        Try again
      </button>
    </div>
  );
};

export default error;
