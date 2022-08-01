<template>
  <div class="center">
    <router-link to="/">Home</router-link>
    <span> | </span>
    <router-link to="/empty">Empty</router-link>
  </div>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from "./electron";

ipcRenderer.send("message", "Hello from App.vue!");
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
