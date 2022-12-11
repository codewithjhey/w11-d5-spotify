export const ADD_ARTIST_SEARCH = "ADD_ARTIST_SEARCH"

export const getArtistSearch = (artist) => {
  const Endpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`

  return async (dispatch, getState) => {
    try {
      const response = await fetch(Endpoint + artist)
      if (response.ok) {
        const { data } = await response.json()
        console.log(data)
        dispatch({
          type: ADD_ARTIST_SEARCH,
          payload: data
        })
        console.log(getState())
      } else {
        console.log("error fetching artists")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
