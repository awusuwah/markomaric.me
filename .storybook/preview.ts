import type { Preview } from "@storybook/vue3";
import "../src/assets/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div id="app" class="w-full h-full transition-all duration-500">
          <story />
        </div>
      `,
    }),
  ],
};

export default preview;
