export const themeInitialState = "light";

export const themeReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "CHANGE_TO_DARK": {
      state = "dark";
      return state;
    }

    case "CHANGE_TO_LIGHT": {
      state = "light";
      return state;
    }

    default:
      return state;
  }
};
