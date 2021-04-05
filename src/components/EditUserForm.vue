<template>
    <b-modal id="edituser"
             ref="modal"
             @ok="handleOk">
        <template #modal-title>
            {{user.id ? "Edit" + user.id : "Add" }}
        </template>
        <form @submit.stop.prevent="handleSubmit" method="get" ref="form">
            <b-form-group id="input-group-1"
                          label="UserName:"
                          label-for="input-1">
                <b-form-input id="input-1"
                              v-model="user.name"
                              type="text"
                              placeholder="Name" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                <b-form-input id="input-2"
                              v-model="user.email"
                              placeholder="Enter Email" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input id="input-2"
                              v-model="user.password"
                              placeholder="Password" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Create Date:" label-for="example-datepicker">
                <b-form-datepicker id="example-datepicker" v-model="user.createDate" class="mb-2"></b-form-datepicker>
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
                this.user = item;
                this.$bvModal.show('edituser');
            },
            handleOk(bvModalEvt) {
                bvModalEvt.preventDefault();
                this.handleSubmit();
            },
            handleSubmit() {
                this.$store.dispatch("addUser", this.user);
                this.$nextTick(() => {
                    this.$bvModal.hide('edituser')
                })
            }
        },
        data: function () {
            return {
                user: {}
            }
        }
    }
</script>