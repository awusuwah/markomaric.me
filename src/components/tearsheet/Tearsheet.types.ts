export type TearsheetProps = {
  /**
   * Determines if the tearsheet is open or not.
   */
  modelValue: boolean;

  /**
   * The title of the tearsheet. This is displayed in the header.
   */
  title?: string;

  /**
   * The title in the close warning of the tearsheet.
   */
  closeTitle?: string;

  /**
   * The text in the close warning of the tearsheet.
   */
  closeText?: string;

  /**
   * The label for the submit button in the footer of the tearsheet.
   */
  submitLabel?: string;

  /**
   * Prevent the close warning from being displayed when the tearsheet is being closed.
   */
  noCloseWarning?: boolean;
};

export type TearsheetEmits = {
  /**
   * The tearsheet is being closed.
   */
  (e: "update:modelValue", value: boolean): void;

  /**
   * The tearsheet has been submitted. This will emit the `submit` event so the parent component
   * can handle the submission of the tearsheet. The button which triggers the submission is automatically
   * been set to the `loading` state.
   */
  (e: "submit"): void;
};

export type TearsheetSlots = {
  /**
   * Used to style and layout the header of the tearsheet.
   */
  header(): any;

  /**
   * Used to style and layout the footer of the tearsheet.
   */
  footer(): any;

  /**
   * Used to style and layout the close warning of the tearsheet.
   */
  closeWarning(): any;
};
