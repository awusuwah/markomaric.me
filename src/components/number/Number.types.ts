export type NumberProps = {
  /**
   * The label which is displayed above the input field.
   */
  label?: string;

  /**
   * The state of the number input. This will dictate how the number input appears.
   */
  state?: "idle" | "loading" | "success" | "error";

  /**
   * The value of the number input.
   */
  modelValue: number;

  /**
   * The error message that is shown when the state is `error`.
   */
  errorMessage?: string;

  /**
   * Handle the max value of the input.
   */
  max?: number;

  /**
   * Handle the min value of the input.
   */
  min?: number;

  /**
   * The amount by which the value of the number input should be incremented or decremented.
   */
  step?: number;

  /**
   * The unique identifier of the number input. This is mostly used to connect the label with the
   * number input field.
   */
  id?: string;
};

export type NumberEmits = {
  /**
   * The value of the number input has changed and should be updated.
   */
  (e: "update:modelValue", value: number): void;
};
