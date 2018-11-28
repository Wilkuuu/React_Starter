const initialState = {
  book: {
    name: "",
    author: "",
    description: "",
    onStock: true,
    image: ""
  }
};

const adminPanelReducer = (state = initialState, action) => {

    console.log('Action!')
  switch (action.type) {
    case "updateBook":
      const book = action.payload;
      return { ...state, book };
    default:
      console.log("Unknown action" + action.type);
      return state;
  }
};

export default adminPanelReducer;
