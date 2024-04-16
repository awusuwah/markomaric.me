export type ButtonProps = {
  /**
   * The color variant the button will have.
   */
  variant?: TailwindColors | CustomColors;

  /**
   * The label which is displayed on the button.
   */
  label?: string;

  /**
   * The state of the button. This will dictate how the button appears and behaves.
   */
  state?: ButtonState;

  /**
   * Prevent the button from shaking when an error occurs.
   */
  noShake?: boolean;
};

export type ButtonState = "idle" | "loading" | "disabled" | "success" | "error";

export type ButtonEmits = {
  /**
   * The state of the button should be updated to the provided value. This is used to change
   * the buttons state back to `idle` after it has been set to either `success` or `error`.
   */
  (e: "update:state", state: ButtonState): void;
};

export type ButtonSlots = {
  /**
   * The default slot which is used to display the buttons content.
   */
  default(): any;

  /**
   * Used to display a custom loading indicator.
   */
  stateLoading(): any;

  /**
   * Used to display a custom success icon.
   */
  stateSuccess(): any;

  /**
   * Used to display a custom error icon.
   */
  stateError(): any;
};
