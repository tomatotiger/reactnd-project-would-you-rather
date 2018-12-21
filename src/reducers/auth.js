import { LOGIN, LOGOUT } from '../actions/auth'

export default function auth (state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.id
    case LOGOUT:
      return null
    default:
      return state
  }
}
