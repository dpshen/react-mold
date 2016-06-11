import { CALL_API, Schemas } from '../middleware/api'

export const NEWS_REQUEST = 'NEWS_REQUEST'
export const NEWS_SUCCESS = 'NEWS_SUCCESS'
export const NEWS_FAILURE = 'NEWS_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchNews(login) {
  return {
    [CALL_API]: {
      types: [ NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE ],
      endpoint: "/getNews",
      schema: Schemas.NEWS
    }
  }
}

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadNews(newsType, requiredFields = []) {
  return (dispatch, getState) => {
    const user = getState().entities.news[newsType]
    if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchNews(newsType))
  }
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}
