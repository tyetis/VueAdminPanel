<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <br /><br />
                <b-button @click="ShowEditModal" class="btn btn-success">New User</b-button>
                <br /><br />
                <b-table bordered :current-page="currentPage" :per-page="perPage" hover show-empty fixed :items="users" :fields="fields">
                    <template #cell()="data">
                        {{ data.value.toString().substring(0, 20) }}
                    </template>
                    <template #cell(actions)="row">
                        <b-button size="sm" variant="primary" @click="ShowEditModal(row.item, row.index, $event.target)" class="mr-1">
                            Info modal
                        </b-button>
                        <b-button size="sm" variant="info" @click="row.toggleDetails">
                            Details
                        </b-button>
                    </template>
                    <template #row-details="row">
                        <b-card>
                            <ul>
                                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                            </ul>
                        </b-card>
                    </template>
                </b-table>
                <b-pagination v-model="currentPage"
                              :total-rows="totalRows"
                              :per-page="perPage"
                              aria-controls="my-table"></b-pagination>
            </b-col>
        </b-row>
        <EditUserForm ref="EditUserForm"/>
    </b-container>
</template>

<script>
    import { mapState } from 'vuex'
    import EditUserForm from '@/components/EditUserForm.vue'

    export default {
        name: 'Users',
        props: ['count'],
        created() {
            this.$store.dispatch("users");
        },
        data: function() {
            return {
                fields: [
                    "name",
                    "username",
                    "email",
                    "address",
                    "phone",
                    "actions"
                ],
                currentPage: 1,
                perPage: 5
            }
        },
        methods: {
            ShowEditModal(item) {
                this.$refs.EditUserForm.show(item);
            }
        },
        computed: {
            ...mapState([
                'users',
                'token'
            ]),
            totalRows: function () {
                return this.$store.state.users.length
            }
        },
        components: {
            EditUserForm
        }
    }
</script>