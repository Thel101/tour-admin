<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col class="col-md-3">
          <SideNavigation></SideNavigation>
        </v-col>
        <v-col class="col-md-9">
          <router-view/>
        </v-col>
      </v-row>
     
      
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import SideNavigation from './components/SideNavigation.vue';
export default {
  name: 'App',
  components:{
    SideNavigation
  },
  data: () => ({
    //
  }),
};
</script>
