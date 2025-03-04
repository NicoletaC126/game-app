export const favoritesInitialState = [];

export const favoritesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVORITES": {
      const newState = [...state];
      const { id, name } = payload;

      const hero = state.find((el) => el.id === id);

      if (hero) {
        return newState;
      }

      newState.push({ id, name });
      return newState;
    }

    case "REMOVE_FROM_FAVORITES": {
      const updatedFavoritesList = state.filter((el) => el.id !== payload);
      return updatedFavoritesList;
    }

    default: {
      return;
    }
  }
};
