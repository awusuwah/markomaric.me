export type SpinnerProps = {
  /**
   * The color variant the spinner will have.
   */
  variant?: TailwindColors | CustomColors;

  /**
   * The appearance of the spinner. This will change it's layout and the form.
   */
  appearance?: "circle" | "bars" | "dots";

  /**
   * The size in which the spinner will be displayed.
   */
  size?: "sm" | "md" | "lg";

  /**
   * Render the spinner in the contrast color of the variant.
   */
  contrast?: boolean;
};
