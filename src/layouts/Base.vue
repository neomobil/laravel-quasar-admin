<template>
  <q-layout view="hHh Lpr lFf">
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
          <span class="q-headline uppercase">{{$t('appName')}}</span>
        </q-toolbar-title>
        <q-btn dense flat icon-right="mdi-logout" label="Logout" @click="logout"/>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer side="left" v-model="leftDrawerOpen">
      <q-list no-border link>
        <q-item to="/home">
          <q-item-side icon="home" />
          <q-item-main :label="$t('home')"/>
        </q-item>
        <q-item to="/users">
          <q-item-side icon="people" />
          <q-item-main :label="$t('users')" :sublabel="$t('user_menu_sublabel')" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer>
      <q-toolbar color="light" text-color="dark">
      <q-toolbar-title>
          {{$t('poweredBy')}}
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
