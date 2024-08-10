import tippy from 'tippy.js'
import 'tippy.js/animations/shift-away.css'

export default {
  addChars(context, payload) {
    context.commit('checkboxesChecker', payload)
    if (payload.id === 'exclude-duplicate') {
      context.state.noDuplicate = payload.isChecked
      return
    }
    let arr = []
    context.state.checkboxes.forEach((checkboxId) => {
      switch (checkboxId) {
        case 'lower-case':
          arr = arr.concat(context.state.lowerCase.split(''))
          context.commit('displayAlert', false)
          break
        case 'upper-case':
          arr = arr.concat(context.state.upperCase.split(''))
          context.commit('displayAlert', false)
          break
        case 'numbers':
          arr = arr.concat(context.state.numbers.split(''))
          break
        case 'symbols':
          arr = arr.concat(context.state.symbols.split(''))
          break
        case 'include-space':
          arr.unshift(' ')
          break
      }
    })
    context.state.acceptedChars = arr
  },
  generateRandomChars(context) {
    const lowerCaseInput = document.querySelector("input[type='checkbox'][id='lower-case']")
    const upperCaseInput = document.querySelector("input[type='checkbox'][id='upper-case']")
    if (
      (!lowerCaseInput.checked && !upperCaseInput.checked && context.state.noDuplicate) ||
      context.state.checkboxes.length === 0 ||
      context.state.passwordLength > 26
    ) {
      context.commit('displayAlert', true)
      return
    }
    const input = document.querySelector('#password')
    input.value = ''
    const arr = [...context.state.acceptedChars]
    for (let i = 0; i < context.state.passwordLength; i++) {
      const random = Math.floor(Math.random() * arr.length)
      input.value += arr[random]
      if (context.state.noDuplicate) arr.splice(random, 1)
    }
    tippy('#copy-btn', {
      content: 'Copied !',
      arrow: false,
      placement: 'top',
      trigger: 'click',
      theme: 'copied',
      animation: 'shift-away'
    })
  }
}
