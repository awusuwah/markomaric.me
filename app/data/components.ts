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

export const componentDropdown = {
  options: [
    { label: "Switzerland", value: "CH", icon: "flag-ch" },
    { label: "Germany", value: "DE", icon: "flag-de" },
    { label: "France", value: "FR", icon: "flag-fr" },
    { label: "Italy", value: "IT", icon: "flag-it" },
    { label: "Spain", value: "ES", icon: "flag-es" },
    { label: "Portugal", value: "PT", icon: "flag-pt" },
    { label: "Greece", value: "GR", icon: "flag-gr" },
    { label: "Croatia", value: "HR", icon: "flag-hr" },
    { label: "Austria", value: "AT", icon: "flag-at" },
    { label: "Belgium", value: "BE", icon: "flag-be" },
    { label: "Bulgaria", value: "BG", icon: "flag-bg" },
    { label: "Cyprus", value: "CY", icon: "flag-cy" },
    { label: "Czechia", value: "CZ", icon: "flag-cz" },
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
    { label: "Top Start", value: "top-start" },
    { label: "Top Center", value: "top-center" },
    { label: "Top End", value: "top-end" },
    { label: "Bottom", value: "bottom" },
    { label: "Bottom Start", value: "bottom-start" },
    { label: "Bottom Center", value: "bottom-center" },
    { label: "Bottom End", value: "bottom-end" },
    { label: "Left", value: "left" },
    { label: "Left Start", value: "left-start" },
    { label: "Left Center", value: "left-center" },
    { label: "Left End", value: "left-end" },
    { label: "Right", value: "right" },
    { label: "Right Start", value: "right-start" },
    { label: "Right Center", value: "right-center" },
    { label: "Right End", value: "right-end" },
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
