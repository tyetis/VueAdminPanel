<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <Users />
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import Users from '@/components/Users.vue'

    export default {
        name: 'UsersPage',
        data: function () {
            return {}
        },
        methods: {
        },
        components: {
            Users
        }
    }
</script>