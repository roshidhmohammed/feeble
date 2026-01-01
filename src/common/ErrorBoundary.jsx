import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500">
            <h2 className="text-xl font-bold text-red-700 mb-2">
              Something went wrong.
            </h2>
            <p className="text-gray-600 mb-4">
              We're sorry, but an unexpected error has occurred.
            </p>
            {this.state.error && (
              <details className="whitespace-pre-wrap text-xs text-gray-500 bg-gray-100 p-2 rounded">
                {this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
