<template>
  <div class="page-container">
    <v-container fluid>
      <v-row
        class="text-center title grey--text text--darken-2"
        justify="center"
      >
        <v-col cols="8">Drag & Drop Email Template Builder</v-col>
      </v-row>
      <v-row
        class="text-center display-1 mb-5 font-weight-bold"
        justify="center"
      >
        <v-col cols="8">
          Create professional and responsive email templates fast and automation
          without any HTML skills
        </v-col>
      </v-row>
      <v-row class="text-center" justify="center">
        <v-col cols="5">
          <v-card>
            <div class="title pa-3" style="color: #5cd1b3">
              Dynamic structures for flexible layout
            </div>
            <v-img src="/img/structure.png" aspect-ratio="1.4" contain></v-img>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card>
            <div class="title pa-3" style="color: #5cd1b3">
              Various component - easy to customize your email
            </div>
            <v-img src="/img/block.jpg" aspect-ratio="1.4" contain></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="text-center" justify="center">
        <v-col cols="6">
          <v-card>
            <div class="title pa-3" style="color: #5cd1b3">
              Rich ESP Integration o get created emails automatically or
              download pure HTML code.
            </div>
            <v-img src="/img/esp.png" aspect-ratio="2" contain></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        class="text-center title grey--text text--darken-2 ma-3"
        justify="center"
      >
        <v-col cols="8"
          >We constantly develop HTML email template builder. Every day we
          extend the product with new functionality and keep it stable and
          consistent according to your needs.</v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.page-container {
  position: relative;
}
.page-container::before {
  background-image: url(/img/background/home-page.jpg);
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
}
</style>
