export const UPDATE_TYPE = 'UPDATE_TYPE';

const initialState = {
  animals: [
    {
      id: 12,
      content: "🦔",
      description: "Ёжики очень классные. И являются настоящими звёздами в соцсетях.",
      board: "default"
    },
    {
      id: 13,
      content: "🐒",
      description: "Обезьянки тоже очень интересные.",
      board: "default"
    },
    // Другие животные
  ]
};

export const draggableAnimalReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TYPE: {
      return {
        ...state,
        animals: state.animals.map(animal =>
          animal.id === action.id ? {...animal, board: action.board} : animal
        )
      };
    }
    default:
      return state;
  }
}
