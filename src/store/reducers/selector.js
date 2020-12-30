import { createSelector } from 'reselect'


//auth selector
const selectAuth = (state) => state.authReducer;
export const isAuthenticatedSelector = createSelector([selectAuth], auth => auth.isAuthenticated)
export const isErrorSelector = createSelector([selectAuth], auth => auth.error)
export const isLoadingSelector = createSelector([selectAuth], auth => auth.loading)


// beat selector
 const beatSelector = (state) => state.beatReducer;
export const allBeatSelector = createSelector([beatSelector], beat => beat.beatInfo)
export const singleBeatSelector = createSelector([beatSelector], beat => beat.singleBeat)

//sell selector
const selectSell = (state) => state.sellReducer;
export const sellSelector = createSelector([selectSell], sell => sell.sellInfo)

// player selector
const selectPlayer= (state) => state.playerReducer;
export const audioPlayerSelector = createSelector([selectPlayer], player => player.audioPlayer)

//player Button
const selectPlayButton = state => state.playButtonReducer;
export const playButtonSelector = createSelector([selectPlayButton], togglePlayButton => togglePlayButton.playButton)