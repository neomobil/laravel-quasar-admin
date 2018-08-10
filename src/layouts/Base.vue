<template>
  <q-layout view="IHh Lpr fFr">
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
        <q-btn dense flat icon-right="mdi-logout" label="Logout" @click="logout"/>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer side="left" v-model="leftDrawerOpen">
      <q-list no-border link inset-separator>
        <q-list-header>Essential Links</q-list-header>
        <q-item to="/docs">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item to="/forum">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item to="/chat">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item to="/twitter">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer>
      <q-toolbar>
      <q-toolbar-title>
        Layout Footer
      </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
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
    openURL,
    logout () {
      this.$store.commit('base/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
