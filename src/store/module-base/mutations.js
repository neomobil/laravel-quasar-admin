
export function setToken (state, val) {
  state.token = val
}
export function setUser (state, val) {
  state.user = val
}
export function logout (state, val) {
  state.user = {}
  state.auth.token = null
}
