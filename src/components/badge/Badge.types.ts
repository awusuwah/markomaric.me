export type BadgeProps = {
  /**
   * The color variant the button will have.
   */
  variant?: TailwindColors | CustomColors;

  /**
   * The text to display in the badge.
   */
  label?: string;

  /**
   * Enable the badge to be dismissable when clicked.
   */
  dismissable?: boolean;
};

export type BadgeEmits = {
  /**
   * The badge has been dismissed.
   */
  (e: "dismiss"): void;
};

export type BadgeSlots = {
  /**
   * The default slot which is used to display the badge's content.
   */
  default(): any;
};
