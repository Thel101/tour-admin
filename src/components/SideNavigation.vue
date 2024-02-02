
import { RouterLink } from 'vue-router';
<template>
    <div>

        <v-navigation-drawer permanent  class="custom-nav blue" style="height: 100vh;">
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            AsiaVista Expeditions
                        </v-list-item-title>
                        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-page-layout-sidebar-right</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Pages</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Destinations</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-form-select</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Requests</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-plane-car</v-icon>
                    </v-list-item-icon>
                   <RouterLink :to="{name: 'inqury'}">Plans</RouterLink>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Create User</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>
<style>
.custom-nav {
    height: 100%;
}
</style>
