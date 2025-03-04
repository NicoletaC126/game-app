export const addToFavorite = (hero) => ({
  type: "ADD_TO_FAVORITES",
  payload: hero,
});

export const removeFromFavorite = (heroId) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: heroId,
});
