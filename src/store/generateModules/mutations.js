export default {
  setPasswordLength(state, val) {
    state.passwordLength = val
  },
  checkboxesChecker(state, payload) {
    if (payload.isChecked) {
      state.checkboxes.push(payload.id)
    } else {
      state.checkboxes = state.checkboxes.filter((item) => {
        return item !== payload.id
      })
    }
  },
  displayAlert(state, show) {
    const lowerCaseInput = document.querySelector("input[type='checkbox'][id='lower-case']")
    const upperCaseInput = document.querySelector("input[type='checkbox'][id='upper-case']")
    state.showAlert = show
    if (show) {
      lowerCaseInput.classList.add('red-border')
      upperCaseInput.classList.add('red-border')
    } else {
      lowerCaseInput.classList.remove('red-border')
      upperCaseInput.classList.remove('red-border')
    }
  }
}
