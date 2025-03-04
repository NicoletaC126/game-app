export const teamsInitialState = {
  radiant: [],
  dire: [],
};

//map image https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8d/Labelled_Map_7.20.png/revision/latest?cb=20181122205641

export const teamsReducer = (state, action) => {
  // const { radiant, dire } = state;
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_TEAM": {
      const newState = {
        ...state,
      };

      //se verifica daca eroul exista in echipa aleasa
      const radiantHero = state[payload.teamName].find(
        (el) => el.id === payload.hero.id
      );

      if (radiantHero) {
        return newState;
      }

      const updatedTeam = [...newState[payload.teamName]];
      updatedTeam.push(payload.hero);

      const updatedState = {
        ...newState,
        [payload.teamName]: updatedTeam,
      };

      return updatedState;
    }

    case "REMOVE_FROM_TEAM": {
      const newState = {
        ...state,
      };

      const newTeam = [...newState[payload.teamName]];
      const updatedTeam = newTeam.filter((el) => el.id !== payload.heroId);
      const updatedState = {
        ...newState,
        [payload.teamName]: updatedTeam,
      };
      return updatedState;
    }

    case "REMOVE_TEAM": {
      const newState = {
        ...state,
      };
      const updatedState = {
        ...newState,
        [payload]: [],
      };
      return updatedState;
    }

    default: {
      return state;
    }
  }
};
