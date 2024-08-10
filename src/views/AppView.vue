<template>
  <icon-theme></icon-theme>
  <v-box>
    <v-title></v-title>
    <v-input></v-input>
    <v-range></v-range>
    <v-alert :showAlert="showAlert">Check one of these two boxes at least</v-alert>
    <password-settings></password-settings>
    <v-button @click="$store.dispatch('generateRandomChars')"></v-button>
  </v-box>
  <copy-right></copy-right>
</template>
<script>
import VBox from '../components/UI/VBox.vue'
import VTitle from '../components/UI/VTitle.vue'
import VInput from '../components/UI/VInput.vue'
import VRange from '../components/UI/VRange.vue'
import VButton from '../components/UI/VButton.vue'
import VAlert from '../components/UI/VAlert.vue'
import PasswordSettings from '../components/PasswordSettings.vue'
import CopyRight from '../components/CopyRight.vue'
import IconTheme from '../components/icons/IconTheme.vue'
export default {
  components: {
    VBox,
    VInput,
    VTitle,
    VRange,
    PasswordSettings,
    VButton,
    IconTheme,
    VAlert,
    CopyRight
  },
  computed: {
    showAlert() {
      return this.$store.getters.showAlert
    }
  }
}
</script>
