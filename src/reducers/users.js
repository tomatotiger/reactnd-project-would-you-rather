import { RECEIVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
  console.log('>>> users reducer: ', state)
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users
      }

    default:
      return state
  }
}
