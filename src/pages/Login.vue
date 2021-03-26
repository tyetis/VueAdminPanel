<template>
    <div>
        <b>Here is login</b>
        <form @submit="handleSubmit" method="post" ref="form">
            <b-form-group id="input-group-1"
                          label="UserName:"
                          label-for="input-1"
                          description="We'll never share your email with anyone else.">
                <b-form-input id="input-1"
                              v-model="username"
                              type="text"
                              placeholder="User Name" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                <b-form-input id="input-2"
                              v-model="email"
                              placeholder="Enter Email" required></b-form-input>
            </b-form-group>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.$store.dispatch("login", { name: this.username, email: this.email })
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err));
            }
        },
        data: function () {
            return {
                username: "",
                email: ""
            }
        }
    }
</script>