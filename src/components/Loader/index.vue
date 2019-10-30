<template>
  <v-overlay :value="loadingDialog">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    loadingDialog: state => state.app.loadingDialog
  })
}
</script>

<style scoped>
>>> .v-dialog {
  box-shadow: none;
}
</style>
