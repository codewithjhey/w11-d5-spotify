import { ADD_SELECTED_PLAY } from "../actions"

const initialState = { musicOnLoad: [] }

const getPlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_PLAY:
      return { ...state, musicOnLoad: action.payload }
    default:
      return state
  }
}

export default getPlayReducer
