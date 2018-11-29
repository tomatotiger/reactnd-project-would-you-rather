import { SET_AUTHED_USER, LOGOUT } from '../actions/auth'

export default function auth (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    case LOGOUT:
      return undefined
    default:
      return state
  }
}
