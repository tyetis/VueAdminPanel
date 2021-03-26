<template>
    <b-modal id="modal-prevent-closing"
             ref="modal"
             title="Submit Your Name"
             @show="resetModal"
             @hidden="resetModal"
             @ok="handleOk">
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
        </form>
    </b-modal>
</template>

<script>
    export default {
        name: 'EditUserForm',
        methods: {
            resetModal() {
                this.name = ''
                this.nameState = null
            },
            handleOk(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.$refs.form.submit();
            },
            handleSubmit(e) {
                e.preventDefault();
                alert("ok");
                this.$store.commit('setToken', '4h3k0o522');
                this.$store.dispatch("addUser", { name: this.username, email: this.email });
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing')
                })
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