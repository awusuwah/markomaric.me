(() => {
  async function log() {
    try {
      const table = document.querySelector("table.issue-table");
      if (!table) {
        return;
      }

      const issueRows = Array.from(table.querySelectorAll("tr.issuerow"));

      const issues = issueRows.map((row) => {
        const key = row.querySelector("td.issuekey a")?.textContent.trim();
        const url = row.querySelector("td.issuekey a")?.href.trim();
        const summary = row.querySelector("td.summary a")?.textContent.trim();
        const status = row.querySelector("td.status")?.textContent.trim();
        const sprint = row.querySelector("td.customfield_11294")?.textContent.trim();
        const storyPoints = row.querySelector("td.customfield_11292")?.textContent.trim();
        const cats = row.querySelector("td.customfield_28190")?.textContent.trim();
        return { key, url, summary, status, sprint, storyPoints, cats };
      });

      await saveIssues(issues);
    } catch (error) {
      console.error("[Jira Logger] Error:", error);
    }
  }

  // Run once after load (DOM may still be changing), then every 10s
  const start = () => {
    log();
    setInterval(log, 60 * 1000 * 60);
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    start();

    window.addEventListener("message", async (event) => {
      const allowed = ["https://markomaric.me", "http://localhost:3000", "https://jira.migros.net"];
      if (!allowed.includes(event.origin)) return;
      if (event.data.type !== "jira-issues-request") return;

      const payload =
        (await chrome.storage.local.get("jiraIssues").then((res) => {
          return {
            issues: res.jiraIssues.issues,
            timestamp: res.jiraIssues.timestamp,
          };
        })) || null;
      window.postMessage({ type: "jira-issues-response", payload }, event.origin);
    });
  } else {
    window.addEventListener("DOMContentLoaded", start, { once: true });
  }
})();

const saveIssues = async (issues) => {
  await chrome.storage.local.set({
    jiraIssues: { issues, timestamp: Date.now() },
  });
};
