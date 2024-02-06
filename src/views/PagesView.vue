<template>
    <div class="mt-10">
        <h3>Pages History Page</h3>
        <DataTable :headers="this.headers" :items="this.items">
            <template v-slot:item.background="{ item }">
        <img :src="getImageUrl(item.background)" alt="Background Image" height="50" />
      </template>
        </DataTable>
      
    </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
import axios from 'axios';
export default {
    components: {
        DataTable
    },

    data() {
        return {
            headers: [
                {
                    text: 'Page Name',
                    align: 'start',
                    sortable: false,
                    value: 'page_name',
                },
                { text: 'Background', value: 'background' },
                { text: 'Content Slot', value: 'content_slots' },
                { text: 'Status', value: 'status' },
                { text: 'Content title', value: 'title' },
                { text: 'Description', value: 'description' },
            ],
            items: []
        }
    },
    mounted() {
        axios.get('http://tourism-app-backend.test/api/contents')
            .then(response => {
                this.items = response.data.map(item => ({
                    page_name: item.page_name,
                    background: item.background,
                    content_slots: item.content_slots,
                    status: item.status,
                    title: item.title,
                    description: item.description


                }))
                console.log(this.items)
            })
            .catch(error => console.log(error))
    },
    methods: {
        getImageUrl(imagePath) {
            // Assuming the imagePath is relative to the public directory
            return `http://tourism-app-backend.test/storage/images/${imagePath}`;
        },
    },
}
</script>

<style></style>