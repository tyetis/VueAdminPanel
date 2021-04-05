<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <br /><br />
                <b>Here is login</b>
                <b-form @submit="handleSubmit" method="post" ref="form">
                    <b-form-group id="input-group-1"
                                  label="Email:"
                                  label-for="input-1"
                                  description="We'll never share your email with anyone else.">
                        <b-form-input id="input-1"
                                      v-model="email"
                                      type="text"
                                      placeholder="User Email" required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                        <b-form-input id="input-2"
                                      v-model="password"
                                      placeholder="Enter Password" required></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Login</b-button>
                </b-form>
            </b-col>
            <b-col cols="4"></b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'Login',
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.$store.dispatch("login", { email: this.email, password: this.password })
                    .then(() => this.$router.push('/'))
                    .catch(err => alert(err));
            }
        },
        data: function () {
            return {
                email: "",
                password: ""
            }
        }
    }
</script>