<template>
  <v-app>
    <Header />

    <v-content>
      <Loader />
      <router-view class="py-3" />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { Header, Footer, Loader },
  data: () => ({
    //
  }),
  created() {
    //
  },
  computed: {
    ...mapGetters({ loggedUser: 'loggedUser' })
  },
  methods: {
    ...mapActions({})
  }
}
</script>

<style>
body {
  padding-right: 0 !important;
}
</style>
