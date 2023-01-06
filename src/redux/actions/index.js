export const ADD_ARTIST_SEARCH = "ADD_ARTIST_SEARCH"
export const ADD_SELECTED_PLAY = "ADD_SELECTED_PLAY"

export const getArtistSearch = (query) => {
  const Endpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`

  return async (dispatch, getState) => {
    try {
      const response = await fetch(Endpoint + query)
      if (response.ok) {
        const data = await response.json()
        const fetchedData = data.data
        console.log(fetchedData)
        dispatch({
          type: ADD_ARTIST_SEARCH,
          payload: fetchedData
        })
        console.log(getState())
      } else {
        console.log("error fetching artist")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getPlayMusic = (albumID, trackID) => {
  const Endpoint = `https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`

  return async (dispatch, getState) => {
    try {
      const response = await fetch(Endpoint + albumID)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        let tracksArray = data.tracks.data
        console.log(tracksArray[0].id)
        let filteredArray = tracksArray.filter((track) => track.id === trackID)
        console.log(tracksArray)
        console.log(filteredArray)
        dispatch({ type: ADD_SELECTED_PLAY, payload: filteredArray[0] })
        console.log(getState())
      } else console.log("There was an error fetching")
    } catch (error) {
      console.log(error)
    }
  }
}
