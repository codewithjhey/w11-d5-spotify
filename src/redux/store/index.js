import { configureStore, combineReducers } from "@reduxjs/toolkit"

import addArtistReducer from "../reducers/getArtistReducer"

const mainReducer = combineReducers({
  addArtist: addArtistReducer
})

export const store = configureStore({
  reducer: mainReducer
})
