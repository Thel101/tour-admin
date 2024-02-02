<template>
  <div class="mt-10">
    <h3>Page Management</h3>
    <div>
      <v-sheet class="mt-10 mr-5 rounded-md grey lighten-4">
        <v-form class="ma-10">
          <v-row class="fill-height" align="center">
            <v-col col="12" md="4" sm="4">
              <v-subheader class="headling black--text font-weight-bold">Choose main page</v-subheader>
            </v-col>
            <v-col col="12" md="4" sm="4">
              <v-select :items="items" label="Choose Page Level" solo></v-select>
            </v-col>
  
          </v-row>
          <v-row class="fill-height" align="center">
            <v-col col="12" md="4" sm="4">
              <v-subheader class="headling black--text font-weight-bold">Choose component level</v-subheader>
            </v-col>
            <v-col col="12" md="4" sm="4">
              <v-select :items="contents" label="Choose Contnet Slots" solo></v-select>
            </v-col>
  
          </v-row>
          <v-textarea class="pl-3" label="Enter Content Description"></v-textarea>
  
          <v-row class="text-center mb-10">
            <v-col>
              <v-btn class="blue">Create Content</v-btn>
            </v-col>
           
          </v-row>
        </v-form>
      </v-sheet>
     
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {

  },
  data() {
    return {
      items: ['Home', 'Destinations', 'Contact', 'Plan', 'About'],
      contents : ['Content 1', 'Content 2', 'Content 3', 'Content 4']
    }
  }
}
</script>
