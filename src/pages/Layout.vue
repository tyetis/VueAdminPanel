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
                        <router-link to="/login" custom v-slot="{ href, route, navigate, isActive }">
                            <b-nav-item :active="isActive" :href="href" @click="navigate">Login</b-nav-item>
                        </router-link>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

</script>