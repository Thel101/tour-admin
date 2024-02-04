<template>
    <div class="mt-10">
        <h3>User Lists</h3>
        <v-row>
            <div class="text-center">
                <v-dialog v-model="dialog" width="50vw">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="my-5 primary" v-bind="attrs" v-on="on"><v-icon>mdi-plus</v-icon>Create New
                            User</v-btn>
                    </template>
                    <v-card>
                        <h3 class="mt-5 pa-5">Create New Admin User</h3>
                        <v-divider></v-divider>

                        <v-form class="ma-10">
                            <v-row class="fill-height" align="center">
                                <v-col col="12" md="4" sm="4">
                                    <v-subheader class="black--text font-weight-bold">User Name</v-subheader>
                                </v-col>
                                <v-col col="12" md="8" sm="8">
                                    <v-text-field></v-text-field>
                                </v-col>

                            </v-row>
                            <v-row class="fill-height" align="center">
                                <v-col col="12" md="4" sm="4">
                                    <v-subheader class="headling black--text font-weight-bold">Email Address</v-subheader>
                                </v-col>
                                <v-col col="12" md="8" sm="8">
                                    <v-text-field></v-text-field>
                                </v-col>

                            </v-row>
                            <v-row class="fill-height" align="center">
                                <v-col col="12" md="4" sm="4">
                                    <v-subheader class="headling black--text font-weight-bold">Password</v-subheader>
                                </v-col>
                                <v-col col="12" md="8" sm="8">
                                    <v-text-field></v-text-field>
                                </v-col>

                            </v-row>

                            <div class="text-center mb-10 d-flex justify-end">

                                <v-btn class="blue me-5 my-5">Create New User</v-btn>

                                <v-btn @click="dialog=false" class="red my-5">Close</v-btn>
                            </div>
                        </v-form>


                    </v-card>
                </v-dialog>

            </div>

        </v-row>


        <DataTable></DataTable>
    </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
export default {
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        DataTable
    }
}
</script>

<style></style>