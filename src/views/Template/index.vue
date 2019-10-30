<template>
  <div class="page-container">
    <v-container fluid>
      <v-row class="text-center display-2 font-weight-bold" justify="center">
        <v-col cols="8">HTML Email Templates</v-col>
      </v-row>
      <v-row
        class="text-center subtitle-1 grey--text text--light-1"
        justify="center"
      >
        <v-col cols="8">
          <span
            >Make responsive, interactive beautiful email newsletters within 10
            minutes with Stripo!</span
          >
          <br />
          <span>
            Customize once — use always! Export them to multiple EPSs and email
            client, including GMail, Yahoo, Outlock
          </span>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="10">
          <v-card elevation="0" color="transparent" id="action-bar-template">
            <v-row>
              <v-col cols="6" class="mt-3 font-weight-bold">
                <button id="left-filter">Popular</button>
                <button id="right-filter">Newest</button>

                <v-menu offset-y :close-on-content-click="false" class="ml-5">
                  <template v-slot:activator="{ on }">
                    <v-btn color="#5cd1b4" text :ripple="false" v-on="on"
                      >Filter by categories</v-btn
                    >
                  </template>
                  <v-list flat dense>
                    <v-list-item-group multiple active-class>
                      <v-list-item
                        v-for="(item, index) in categories"
                        :key="index"
                      >
                        <template v-slot:default="{ active }">
                          <v-list-item-action>
                            <v-checkbox />
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ item.count }} template</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-menu>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  id="input-search-template"
                  outlined
                  rounded
                  label="Looking some templates"
                  background-color="white"
                  color="#2a3f54"
                />
                <v-btn
                  id="btn-search-template"
                  rounded
                  color="#5cd1b4"
                  class="white--text"
                  >Search</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-container py-0 grid-list-sm>
          <v-row>
            <v-col cols="3" v-for="template in getTemplate" :key="template.id">
              <TemplateBox :template="template" />
            </v-col>
          </v-row>
        </v-container>
      </v-row>

      <v-row justify="center" class="my-2">
        <v-col cols="3">
          <v-btn block rounded color="white">
            <v-icon left color="#5cd1b4">mdi-reload</v-icon>View more templates
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TemplateBox from '@/components/TemplateBox'
export default {
  components: {
    TemplateBox
  },
  computed: {
    getTemplate() {
      return [
        {
          id: 1,
          name:
            'Halloween Email Template "Scary Decor" for Furniture, Interior & DIY industry',
          thumbnail: '/img/demo/1.png',
          categories: [{ id: 1, name: 'Halloween' }]
        },
        {
          id: 2,
          name:
            'Halloween Email Template "Beautiful Pumpkin" for Hotels industry',
          thumbnail: '/img/demo/2.png',
          categories: [{ id: 1, name: 'Halloween' }, { id: 2, name: 'Hotel' }]
        },
        {
          id: 3,
          name:
            'Halloween Email Template "Trick or Treat" for Fashion industry',
          thumbnail: '/img/demo/3.png',
          categories: [{ id: 1, name: 'Halloween' }, { id: 3, name: 'Fashion' }]
        },
        {
          id: 4,
          name:
            'Halloween Email Template "Awful Pretty Make-up" for Beauty & Personal Care industry',
          thumbnail: '/img/demo/4.png',
          categories: [
            { id: 1, name: 'Halloween' },
            { id: 4, name: 'Beauty' },
            { id: 5, name: 'Personal Care' },
            { id: 6, name: 'Medical' },
            { id: 7, name: 'Make-up' }
          ]
        },
        {
          id: 5,
          name:
            'Halloween Email Template "Unforgettable Tours" for Tourism industry',
          thumbnail: '/img/demo/5.png',
          categories: [{ id: 1, name: 'Halloween' }, { id: 6, name: 'Tourism' }]
        },
        {
          id: 6,
          name: 'Halloween Email Template "Sweet Treat" for Beverages industry',
          thumbnail: '/img/demo/6.png',
          categories: [{ id: 1, name: 'Halloween' }]
        }
      ]
    }
  },
  data() {
    return {
      categories: [
        { title: 'Shopping', count: 2 },
        { title: 'Technology & Information', count: 10 },
        { title: 'Education', count: 5 },
        { title: 'Business', count: 4 }
      ]
    }
  }
}
</script>

<style scoped>
.page-container {
  background-color: #f7f7f7;
}
>>> #action-bar-template .v-btn::before {
  background-color: transparent;
}
#btn-search-template {
  position: absolute;
  right: 2%;
  top: 20%;
}
>>> #input-search-template {
  padding-right: 100px;
}
#left-filter {
  width: 100px;
  background-color: white;
  color: #5cd1b4;
  padding: 8px;
  border: solid grey 1px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
#left-filter:focus {
  outline: 0;
}
#right-filter {
  width: 100px;
  background-color: white;
  color: grey;
  padding: 8px;
  border: solid grey 1px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
#right-filter:focus {
  outline: 0;
}
</style>
