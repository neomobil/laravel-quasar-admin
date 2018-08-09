
export function setToken (state, val) {
  state.token = val
}
export function setUser (state, val) {
  state.user = val
  localStorage.setItem('loggedIn', true)
}
export function logout (state, val) {
  state.user = {}
  state.auth.token = null
  localStorage.setItem('loggedIn', false)
}
