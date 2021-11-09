import { Component } from "react";
import { ERROR_MESSAGE } from "./settings";
import ErrorAlert from "./components/ErrorAlert";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // render any custom fallback UI
      return <ErrorAlert message={ERROR_MESSAGE} />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
