<template>
  <v-hover v-slot:default="{ hover }">
    <v-card width="350" height="660" :elevation="hover ? 12 : 2">
      <div class="img-wrapper">
        <img
          :src="template.thumbnail"
          alt="thumbnail"
          class="extrem-height-image"
        />
      </div>

      <v-card-text>
        <v-container pa-0 fluid>
          <v-row
            justify="center"
            align="center"
            class="headline font-weight-bold"
          >
            <v-col cols="12" class="py-3">
              <div class="block-ellipsis">{{ template.name }}</div>
            </v-col>
          </v-row>

          <VuePerfectScrollbar
            class="scroll-area"
            :settings="{ maxScrollbarLength: 60 }"
          >
            <v-row justify="center" align="center">
              <v-col cols="12" class="py-1" style="max-height: 86px;">
                <template v-for="category in template.categories">
                  <v-chip
                    :key="category.id"
                    class="ma-1 font-weight-bold"
                    color="#5cd1b4"
                    outlined
                    >{{ category.name }}</v-chip
                  >
                </template>
              </v-col>
            </v-row>
          </VuePerfectScrollbar>

          <v-row justify="center" align="center">
            <v-col cols="4" class="py-1">
              <v-btn class="mx-2" text icon color="blue lighten-2">
                60&nbsp;
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4" class="py-1">
              <v-btn class="mx-2" text icon color="red lighten-2">
                20&nbsp;
                <v-icon>mdi-thumb-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row justify="center" align="center">
            <v-col cols="12" class="py-1">
              <v-btn block rounded dark color="#5cd1b4" class="font-weight-bold"
                >Edit this one</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  components: {
    VuePerfectScrollbar
  },
  props: {
    template: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.block-ellipsis {
  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  max-width: 400px;
  height: 101px; /* Fallback for non-webkit */
  margin: 0 auto;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.img-wrapper {
  overflow: hidden;
  position: relative;
  float: left;
  height: 350px;
  width: 100%;
}

.extrem-height-image {
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  transition: top 3s ease-out 0s;
}

.extrem-height-image:hover {
  top: -350px;
}

.scroll-area {
  position: relative;
  margin: auto;
}
>>> .ps__scrollbar-x-rail {
  display: none !important;
}
</style>
