import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  goToHome = () => {
    window.location.assign("/");
  };

  refreshPage = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-100 h-screen p-4 flex flex-col justify-center items-center">
          <h1 className="text-xl mb-4">
            Something went wrong. Please contact Support if this happens again!
          </h1>
          <div className="flex flex-row flex-wrap justify-center items-center">
            <button onClick={this.refreshPage}>Refresh</button>
            <button onClick={this.goToHome}>Return to Home</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
