import { ErrorInfo } from "react";

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <div className="flex flex-col items-center p-8 pt-10 w-full h-full">
      <div className="flex flex-col items-center flex-1">
        <h1 className="text-red-500 mb-4 text-sm font-bold">
          {/* Replace with translation function if needed */}
          Error Screen Title
        </h1>
        <p className="text-sm font-bold">
          {/* Replace with translation function if needed */}
          Friendly Error Screen Subtitle
        </p>
      </div>

      <div className="flex flex-2 bg-gray-200 my-4 rounded p-4 w-full">
        <p className="text-red-500 text-2xl font-bold">
          {`${props.error}`.trim()}
        </p>
        <pre className="mt-4 text-gray-600 text-sm select-text">
          {`${props.errorInfo.componentStack}`.trim()}
        </pre>
      </div>

      <button
        onClick={props.onReset}
        className="bg-red-500 px-20 py-2 text-white font-bold rounded"
      >
        {/* Replace with translation function if needed */}
        Reset
      </button>
    </div>
  );
}
