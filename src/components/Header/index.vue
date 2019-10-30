<template>
  <v-app-bar app color="primary">
    <v-toolbar-title class="headline text-uppercase" style="margin: 0 5% 0 5%">
      <v-img
        src="/img/logo/logo-rec.png"
        aspect-ratio="1"
        height="64"
        width="128"
        @click="gotoPage('/')"
      ></v-img>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="title font-weight-bold">
      <v-btn to="/template" text :ripple="false">Email Templates</v-btn>
      <v-btn to="/tutorial" text :ripple="false">Tutorial</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-btn
      to="/editor"
      rounded
      color="#5cd1b3"
      class="white--text font-weight-bold"
      >Email Editor</v-btn
    >
    <v-toolbar-items style="margin-right: 5%">
      <span
        class="white--text font-weight-bold pt-5 pl-5 pr-0"
        @click="toggleLoginDialog(true)"
        >Sign-in</span
      >
    </v-toolbar-items>

    <LoginDialog />
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoginDialog from '@/components/LoginDialog'
export default {
  components: {
    LoginDialog
  },
  computed: {
    ...mapGetters({
      subscriptionHouseIds: 'subscriptionHouseIds',
      loggedUser: 'loggedUser'
    })
  },
  methods: {
    ...mapActions({
      toggleLoginDialog: 'app/toggleLoginDialog'
    }),
    gotoPage(page) {
      this.$router.push(page).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
>>> .v-toolbar__items .v-btn--active:before {
  background-color: transparent;
}
>>> .v-toolbar__items .v-btn {
  color: #eeeeee !important;
}
>>> .v-toolbar__items .v-btn--active {
  color: #5cd1b3 !important;
}
>>> .v-avatar:hover,
>>> .v-image:hover,
span:hover {
  cursor: pointer;
}
</style>
