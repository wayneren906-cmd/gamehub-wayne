"use client";

import React from "react";

interface ErrorWrapperState {
  error: Error | null;
  componentStack: string | null;
}

export class ErrorWrapper extends React.Component<
  { children: React.ReactNode },
  ErrorWrapperState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null, componentStack: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorWrapperState> {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorWrapper]", error.message, info.componentStack);
    this.setState({ componentStack: info.componentStack ?? null });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-[#f5f5f5] p-8">
          <div className="card p-8 max-w-2xl mx-auto space-y-5">
            <h1 className="text-xl font-bold text-red-500">客户端运行时错误</h1>

            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-600 font-mono text-sm break-all leading-relaxed">
                {this.state.error.message}
              </p>
            </div>

            {this.state.error.stack && (
              <div className="space-y-2">
                <h3 className="text-[#666] text-sm font-semibold">JS 堆栈：</h3>
                <pre className="p-4 bg-[#f5f5f5] rounded-md overflow-auto max-h-80 text-xs text-[#666] whitespace-pre-wrap break-all leading-relaxed">
                  {this.state.error.stack}
                </pre>
              </div>
            )}

            {this.state.componentStack && (
              <div className="space-y-2">
                <h3 className="text-[#666] text-sm font-semibold">组件堆栈：</h3>
                <pre className="p-4 bg-[#f5f5f5] rounded-md overflow-auto max-h-60 text-xs text-[#15B04F] whitespace-pre-wrap break-all leading-relaxed">
                  {this.state.componentStack}
                </pre>
              </div>
            )}

            <button
              onClick={() => {
                this.setState({ error: null, componentStack: null });
                window.location.reload();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#15B04F] hover:bg-[#149a46] text-white rounded-lg font-medium transition-colors"
            >
              重试
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
