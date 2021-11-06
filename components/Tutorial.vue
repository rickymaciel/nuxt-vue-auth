<!-- Please remove this file from your project -->
<template>
  <div
    class="
      relative
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <ul>
        <li v-for="todo in todos" :key="todo.text">
          <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
          <span class="py-4" :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li>
          <input
            class="p-4 m-4"
            @keyup.enter="addTodo"
            placeholder="What needs to be done?"
          />
        </li>
      </ul>
    </div>

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <p class="font-bold p-3 m-1 shadow-xl bg-blue-500">
        getApiUrl: {{ getApiUrl }}
      </p>
      <p class="font-bold p-3 m-1 shadow-xl bg-blue-800 text-white">
        getAppDomain: {{ getAppDomain }}
      </p>
      <button
        class="bg-gray-500 border-gray-700 text-white p-3 m-4"
        @click="getToken()"
      >
        Get token
      </button>

      <p class="font-bold p-3 m-1 shadow-xl">token: {{ token }}</p>
      <button
        class="bg-gray-500 border-gray-700 text-white p-3 m-4"
        @click="setToken('asdasdasdasdasdasdasd')"
      >
        Set Token
      </button>

      <button
        class="bg-red-500 border-red-700 text-white p-3 m-1"
        @click="logout()"
      >
        SLogount
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import { getApiUrl, getCookieDomain } from "@/services/process-services";

export default Vue.extend({
  created() {},
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
    token() {
      return this.$store.state.auth.token;
    },
    getApiUrl() {
      return getApiUrl();
    },
    getAppDomain() {
      return getCookieDomain();
    },
  },
  methods: {
    // ...mapActions("auth", ["getToken"]),
    addTodo(e: { target: { value: string } }) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    setToken(token: string) {
      this.$store.commit("auth/setToken", token);
    },
    getToken() {
      return this.$store.dispatch("auth/getToken");
    },
    ...mapMutations({
      toggle: "todos/toggle",
      logout: "auth/setLogout",
    }),
  },
});
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
