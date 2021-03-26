<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <b-button v-b-modal.modal-prevent-closing class="btn btn-success">New User</b-button>
                <b-table bordered :current-page="currentPage" :per-page="perPage" hover :items="users" :fields="fields">
                </b-table>
                <b-pagination v-model="currentPage"
                              :total-rows="totalRows"
                              :per-page="perPage"
                              aria-controls="my-table"></b-pagination>
            </b-col>
        </b-row>
        <EditUserForm/>
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
                    "phone"
                ],
                currentPage: 1,
                perPage: 5
            }
        },
        methods: {
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