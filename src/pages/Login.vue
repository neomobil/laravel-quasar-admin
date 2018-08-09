<template>
    <q-page class="animate-fade bg-faded">
        <q-item class="row flex-center">
            <q-item-main class="col-12 col-sm-6" style="max-width: 500px; margin-top: 5vh;">
                <q-item-tile class="bg-white">
                    <q-card class="col col-sm-6">
                        <q-card-media class="q-pa-sm">
                            <img src="~assets/quasar-logo-full.svg" style="max-height:150px">
                        </q-card-media>
                        <q-card-title class="text-center">
                            <span class="uppercase">Login</span>
                        </q-card-title>
                        <q-card-main>
                            <q-field
                                    tabindex="-1"
                                    icon="account_box"
                                    helper="Email"
                                    :error="$v.email.$error"
                                    error-label="Die Emailadresse ist ungültig"
                            >
                                <q-input ref="email"
                                         v-model="email"
                                         @blur="$v.email.$touch()"
                                         autofocus
                                />
                            </q-field>
                            <q-field class="q-mb-md"
                                     icon="vpn_key"
                                     helper="Passwort"
                                     :error="$v.password.$error"
                                     error-label="Passwort muss ausgefüllt und mindestens 6 character lang sein"
                            >
                                <q-input ref="password"
                                         v-model="password"
                                         @blur="$v.password.$touch()"
                                         @input="$v.password.$touch()"
                                />
                            </q-field>
                        </q-card-main>
                        <q-card-separator/>
                        <q-card-actions>
                            <q-btn :disable="$v.$invalid" color="primary" class="full-width" icon-right="mdi-login"
                                   label="Anmelden" @click="submit"/>
                        </q-card-actions>
                    </q-card>
                </q-item-tile>
            </q-item-main>
        </q-item>
    </q-page>
</template>

<style>
</style>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'
import { notifyMixin } from '../mixins/notifyMixin'

export default {
  name: 'PageLogin',
  mixins: [notifyMixin],
  data () {
    return {
      email: null,
      opened: true,
      password: null
    }
  },
  methods: {
    focusEmail () {
      this.$refs.email.$el.children[1].children[0].children[0].focus()
    },
    submit () {
      const form = new FormData()
      form.append('username', this.email)
      form.append('password', this.password)
      form.append('grant_type', 'password')
      form.append('client_id', '4')
      form.append('client_secret', '85hgoMXGQ5S4QNzJjuXqm7P6ehec9wVqNNEIEeav')
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        data: form,
        url: '/oauth/token'
      }
      this.$axios(options)
        .then(response => {
          this.$store.commit('base/setToken', response.data.access_token)
        })
        .then(() => {
          this.$axios({
            method: 'GET',
            url: 'api/user',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${this.$store.state.base.token}`
            }
          }).then(response => this.$store.commit('base/setUser', response.data.data))
        })
        .catch(error => this.catch(error))
    }
  },
  validations: {
    email: {required, email},
    password: {minLength: minLength(6), required}
  }
}
</script>
