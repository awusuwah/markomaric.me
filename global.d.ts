declare global {
  interface ChromeRuntime {
    sendMessage: (id: string, message: any, cb: (resp?: any) => void) => void;
    lastError?: { message?: string };
  }
  interface Window {
    chrome?: { runtime?: ChromeRuntime };
  }
}
export {};
