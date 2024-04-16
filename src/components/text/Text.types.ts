export type TextProps = {
  /**
   * The label which is displayed above the input field.
   */
  label?: string;

  /**
   * The state of the text input. This will dictate how the text input appears.
   */
  state?: "idle" | "loading" | "success" | "error";

  /**
   * The value of the text input.
   */
  modelValue: string;

  /**
   * The error message that is shown when the state is `error`.
   */
  errorMessage?: string;

  /**
   * The unique identifier of the text input. This is mostly used to connect the label with
   * the text input field.
   */
  id?: string;

  /**
   * The native html input that will be applied to the input.
   */
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
};

export type TextEmits = {
  /**
   * The value of the text input has changed and should be updated.
   */
  (e: "update:modelValue", value: string): void;
};
