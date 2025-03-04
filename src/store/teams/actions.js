export const addToTeam = (teamName, hero) => ({
  type: "ADD_TO_TEAM",
  payload: {
    teamName,
    hero,
  },
});

export const removeFromTeam = (teamName, heroId) => ({
  type: "REMOVE_FROM_TEAM",
  payload: {
    teamName,
    heroId,
  },
});

export const removeTeam = (teamName) => ({
  type: "REMOVE_TEAM",
  payload: teamName,
});
