const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
export default {
  acceptedChars: [...lowerCase],
  checkboxes: ['lower-case'],
  lowerCase: lowerCase,
  upperCase: lowerCase.toUpperCase(),
  numbers: '0123456789',
  symbols: '!@#$%&*-',
  noDuplicate: false,
  showAlert: false,
  passwordLength: null
}
