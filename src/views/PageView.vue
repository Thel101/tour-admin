<template>
  <div class="mt-10">
    <h3>Page Management</h3>
    <div>
      <v-sheet class="mt-10 mr-5 rounded-md grey lighten-4">
        <v-form class="ma-10">
          <v-row class="fill-height" align="center">
            <v-col col="12" md="4" sm="4">
              <v-subheader class="black--text font-weight-bold">Choose main page</v-subheader>
            </v-col>
            <v-col col="12" md="4" sm="4">
              <v-select v-model="page_name" :items="items" label="Choose Page Level" solo></v-select>
            </v-col>

          </v-row>
          <v-row class="fill-height" align="center">
            <v-col col="12" md="4" sm="4">
              <v-subheader class="black--text font-weight-bold">Choose component level</v-subheader>
            </v-col>
            <v-col col="12" md="4" sm="4">
              <v-select v-model="content_slots" :items="contents" label="Choose Contnet Slots" solo></v-select>
            </v-col>

          </v-row>
          <v-row class="fill-height" align="center">
            <v-col col="12" md="4" sm="4">
              <v-subheader class="black--text font-weight-bold">Enter Content Title</v-subheader>
            </v-col>
            <v-col col="12" md="4" sm="4">
              <v-text-field v-model="title"></v-text-field>
            </v-col>

          </v-row>

          <v-row class="fill-height" align="center">
            <v-col col="12" md="4" sm="4">
              <v-subheader class="headling black--text font-weight-bold">Select background</v-subheader>
            </v-col>
            <v-col col="12" md="8" sm="8">
              <v-file-input accept="image/*" label="country image"></v-file-input>
            </v-col>
            <v-col col="12">

            </v-col>

          </v-row>
          <v-textarea v-model="description" class="pl-3" label="Enter Content Description"></v-textarea>

          <v-row class="text-center mb-10">
            <v-col>
              <v-btn @click="addContent" class="blue">Create Content</v-btn>
            </v-col>

          </v-row>
        </v-form>
      </v-sheet>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  components: {

  },
  data() {
    return {
      items: ['Home', 'Contact', 'Plan', 'About'],
      contents: [1, 2, 3, 4, 5],
      page_name: '',
      content_slots: '',
      status: 'active',
      background: 'image1.jpeg',
      title: '',
      description: ''

    }
  },
  methods: {
    addContent() {
      axios.post('http://tourism-app-backend.test/api/contents', {
        page_name: this.page_name,
        content_slots: this.content_slots,
        status: this.status,
        background: this.background,
        title: this.title,
        description: this.description
      }).then(function(response){
        console.log(response)
      }).catch(function(error){
        console.log(error);
      })

    }
  }
}
</script>
