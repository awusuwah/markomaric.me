<script setup lang="ts">
import Card from "@/components/Card.vue";
import { getJiraTickets } from "@/utils/issues";

const interval = ref();

const issues = ref<Issue[]>([]);
const timestamp = ref<string>("");

const getIssues = async (): Promise<any> => {
  const response = await getJiraTickets().then((res) => {
    console.log(`[Jira Logger] Found ${res?.issues.length} tickets!`);
    return res;
  });

  issues.value = response?.issues || [];
  timestamp.value = response?.timestamp || "";
};

onMounted((): void => {
  getIssues();
  interval.value = setInterval(getIssues, 60_000);
});

interface Issue {
  cats?: string;
  key: string;
  sprint?: string;
  status?: string;
  storyPoints?: string;
  summary: string;
  url: string;
}
</script>

<template>
  <Card title="Current Issues" icon="ticket-line">
    <div class="flex flex-col gap-2">
      <a v-for="issue in issues" :href="issue.url" target="_blank" rel="noopener noreferrer"> {{ issue.key }} - {{ issue.summary }} </a>
    </div>
  </Card>

  <button @click="getIssues">Get Issues</button>

  <pre>
    {{ issues }}
  </pre>
  <pre>
    {{ timestamp }}
  </pre>
</template>
