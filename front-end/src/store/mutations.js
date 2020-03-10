export default {
  userInfoReceived: (state, { name, travellingDate, placeName }) => {
    state.firstname = name
    state.city = placeName
    state.date = travellingDate
    state.logged = true
  },

  inputSubmitted: (state, { userName, place, travellingDate }) => {
    state.firstname = userName
    state.city = place
    state.date = travellingDate
    state.logged = true
  },

  pictureReceived: (state, {
    smallSize,
    mediumSize,
    largeSize,
    alt,
    author,
    pixabayURL
  }) => {
    state.loaded = true
    state.smallSizedPicture = smallSize
    state.mediumSizedPicture = mediumSize
    state.largeSizedPicture = largeSize
    state.pictureAlt = alt
    state.pictureAuthor = author
    state.picturePixabayURL = pixabayURL
  },

  userDeleted: (state) => {
    state.firstname = ''
    state.city = ''
    state.date = ''
    state.logged = false
    state.smallSizedPicture = ''
    state.mediumSizedPicture = ''
    state.largeSizedPicture = ''
    state.pictureAlt = ''
    state.pictureAuthor = ''
    state.picturePixabayURL = ''
  }
}
