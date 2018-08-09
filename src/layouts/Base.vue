<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
                flat round dense
                icon="menu"
                @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <span class="q-headline uppercase">Backend</span>
        </q-toolbar-title>
        <q-btn dense flat icon-right="mdi-logout" label="Logout"/>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LoginLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
