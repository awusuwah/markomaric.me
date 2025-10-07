export const getJiraTickets = async (): Promise<IssueResponse | undefined> => {
  return new Promise((resolve) => {
    const onMessage = (event: MessageEvent) => {
      // Fresh tickets have been returned
      if (event.data.type === "jira-issues-response") {
        window.removeEventListener("message", onMessage);
        resolve({
          issues: event.data.payload.issues,
          timestamp: event.data.payload.timestamp,
        });
      }
    };

    window.addEventListener("message", onMessage);
    window.postMessage({ type: "jira-issues-request" }, window.origin);
    setTimeout(() => {
      window.removeEventListener("message", onMessage);
      resolve(undefined);
    }, 5000);
  });
};

interface IssueResponse {
  issues: Issue[];
  timestamp: string;
}

interface Issue {
  cats?: string;
  key: string;
  sprint: string;
  status: string;
  storyPoints: string;
  summary: string;
  url: string;
}
