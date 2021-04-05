<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <router-link to="/" custom v-slot="{ href, route, navigate, isActive }">
                            <b-nav-item :active="isActive" :href="href" @click="navigate">Home</b-nav-item>
                        </router-link>
                        <router-link to="/users" custom v-slot="{ href, route, navigate, isActive }">
                            <b-nav-item :active="isActive" :href="href" @click="navigate">Users</b-nav-item>
                        </router-link>
                        <router-link to="/about" custom v-slot="{ href, route, navigate, isActive }">
                            <b-nav-item :active="isActive" :href="href" @click="navigate">About</b-nav-item>
                        </router-link>
                        <router-link to="/login" custom v-slot="{ href, route, navigate, isActive }" v-if="!isLoggedIn">
                            <b-nav-item :active="isActive" :href="href" @click="navigate">Login</b-nav-item>
                        </router-link>
                        <li class="nav-item"><a href="#" class="nav-link" @click="logout" v-if="isLoggedIn">Logout</a></li>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto" v-if="isLoggedIn">
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>{{isLoggedIn && user ? user.name : ""}}</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Layout',
        created: function () {
            if (this.isLoggedIn)
                this.$store.dispatch("getAccountInfo");
        },
        computed: {
            isLoggedIn: function () { return this.$store.getters.isLoggedIn },
            ...mapState([
                'user'
            ])
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        }
    }
</script>