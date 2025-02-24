export const componentButton = {
  variants: [
    { label: "Neutral", value: "neutral" },
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Success", value: "success" },
    { label: "Danger", value: "danger" },
    { label: "Warning", value: "warning" },
    { label: "Info", value: "info" },
  ],
  types: [
    { label: "Button", value: "button" },
    { label: "Submit", value: "submit" },
    { label: "Reset", value: "reset" },
  ],
  sizes: [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
  ],
};

export const componentCheckbox = {
  variants: [
    { label: "Default", value: "default" },
    { label: "Success", value: "success" },
    { label: "Danger", value: "danger" },
    { label: "Warning", value: "warning" },
    { label: "Info", value: "info" },
  ],
};

export const componentContextMenu = {
  options: [
    { id: "settings", label: "Settings", icon: "settings-line", disabled: false },
    { id: "command-palette", label: "Command Palette", icon: "terminal-line", disabled: false },
    { id: "developer", label: "Developer", icon: "code-line", disabled: true },
  ],
  positions: [
    { label: "Top", value: "top" },
    { label: "Bottom", value: "bottom" },
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ],
};

export const componentIcon = {
  sizes: [
    { label: "XSmall", value: "xs" },
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
    { label: "XLarge", value: "xl" },
  ],
};

export const componentMenu = {
  positions: [
    { label: "Top", value: "top" },
    { label: "Bottom", value: "bottom" },
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ],
};

export const componentModal = {
  variants: [
    { label: "Default", value: "default" },
    { label: "Success", value: "success" },
    { label: "Danger", value: "danger" },
    { label: "Warning", value: "warning" },
    { label: "Info", value: "info" },
  ],
};

export const componentRadiobutton = {
  options: [
    { label: "Radio 1", value: "radio1", disabled: false },
    { label: "Radio 2", value: "radio2", disabled: false },
    { label: "Radio 3", value: "radio3", disabled: true },
  ],
  variants: [
    { label: "Default", value: "default" },
    { label: "Success", value: "success" },
    { label: "Danger", value: "danger" },
    { label: "Warning", value: "warning" },
    { label: "Info", value: "info" },
  ],
};

export const componentSpinner = {
  variants: [
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Success", value: "success" },
    { label: "Danger", value: "danger" },
    { label: "Warning", value: "warning" },
    { label: "Info", value: "info" },
  ],
  types: [
    { label: "Circle", value: "circle" },
    { label: "Bars", value: "bars" },
    { label: "Dots", value: "dots" },
  ],
  sizes: [
    { label: "XSmall", value: "xs" },
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
    { label: "XLarge", value: "xl" },
  ],
};

export const componentText = {
  types: [
    { label: "Text", value: "text" },
    { label: "Email", value: "email" },
    { label: "Password", value: "password" },
    { label: "Number", value: "number" },
  ],
  variants: [
    { label: "Default", value: "default" },
    { label: "Success", value: "success" },
    { label: "Danger", value: "danger" },
    { label: "Warning", value: "warning" },
    { label: "Info", value: "info" },
  ],
};
