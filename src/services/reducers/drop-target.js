const initialState = {
  boards: ["default", "fish", "mammals", "insects"]
};

export const dropTargetReducer = (state = initialState, action) => {
  return state; // Поскольку доски пока не изменяются
};
