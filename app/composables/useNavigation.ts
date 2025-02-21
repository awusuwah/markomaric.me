const EXPANDED_KEY = "nav-expanded";

/**
 * A composable which allows for external interaction with the application's main navigation.
 */
export const useNavigation = () => {
  const expanded = useState<boolean>(EXPANDED_KEY, () => {
    const savedState = localStorage.getItem(EXPANDED_KEY);
    return savedState ? JSON.parse(savedState) : false;
  });

  /**
   * Watch for changes to the expanded state and save the new value to the local storage.
   */
  watch(expanded, () => {
    localStorage.setItem(EXPANDED_KEY, JSON.stringify(expanded.value));
  });

  return { navigationExpanded: expanded };
};
