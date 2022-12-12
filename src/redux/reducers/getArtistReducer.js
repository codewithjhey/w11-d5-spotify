import { ADD_ARTIST_SEARCH } from "../actions"

const initialState = { artistArray: [] }

const addArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTIST_SEARCH:
      return {
        ...state,
        artistArray: action.payload
      }
    default:
      return state
  }
}
export default addArtistReducer
