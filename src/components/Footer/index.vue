<template>
  <v-footer height="auto" color="#304156">
    <v-layout row class="white--text text-center" wrap py-4>
      <v-flex xs12 mb-3>
        <v-img contain src="/img/logo/footer-logo.png" height="60" />
      </v-flex>
      <v-flex xs12>
        <span class="px-3 body-2"
          >&copy; {{ new Date().getFullYear() }} Copyright</span
        >
        <span body-2>ETBS Capstone Project Team</span>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {}
</script>
