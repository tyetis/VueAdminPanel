<template>
    <b-modal id="edituser"
             ref="modal"
             @ok="handleOk">
        <template #modal-title>
            {{id ? "Edit" + id : "Add" }}
        </template>
        <form @submit.stop.prevent="handleSubmit" method="get" ref="form">
            <b-form-group id="input-group-1"
                          label="UserName:"
                          label-for="input-1">
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
            <b-button type="submit" v-if="false"></b-button>
        </form>
    </b-modal>
</template>

<script>
    export default {
        name: 'EditUserForm',
        methods: {
            show(item) {
                this.username = item.name;
                this.email = item.email;
                this.id = item.id;
                this.$bvModal.show('edituser');
            },
            handleOk(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.handleSubmit();
            },
            handleSubmit() {
                this.$store.dispatch("addUser", { name: this.username, email: this.email });
                this.$nextTick(() => {
                    this.$bvModal.hide('edituser')
                })
            }
        },
        data: function () {
            return {
                id: null,
                username: "",
                email: ""
            }
        }
    }
</script>