import { configureStore, combineReducers } from "@reduxjs/toolkit"
import addArtistReducer from "../reducers/getArtistReducer"
import getPlayReducer from "../reducers/getPlayReducer"

const mainReducer = combineReducers({
  addArtist: addArtistReducer,
  playMusic: getPlayReducer
})

export const store = configureStore({
  reducer: mainReducer
})
