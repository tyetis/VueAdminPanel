<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <br /><br />
                <b-card no-body>
                    <b-tabs v-model="tabIndex" card>
                        <b-tab title="General">I'm the first fading tab</b-tab>
                        <b-tab title="Edit profile">
                            I'm the second tab
                            <b-card>I'm the card in tab</b-card>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'User',
        data: function () {
            return {}
        },
        methods: {
        },
        components: {
        }
    }
</script>