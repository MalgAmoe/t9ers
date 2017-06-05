const initState = {
  numbers: '',
  words: '',
  selectedWord: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {...state, numbers: state.numbers + action.data};
    case 'ERASE_NUMBER':
      if(state.numbers.length === 1) {
        return initState;
      }
      return {...state, numbers: state.numbers.slice(0, state.numbers.length - 1)};
    case 'CHANGE_WORD':
      return {...state, selectedWord: ++state.selectedWord % state.words.length}
    case `POST_SUCCESS`:
      return {...state, words: action.json, selectedWord: 0};
    case `POST_FAILURE`:
      console.log(action);
      return state;
    default:
      return state;
  }
}
