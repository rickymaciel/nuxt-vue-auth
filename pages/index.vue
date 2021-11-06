<template>
  <div
    class="
      relative
      items-top
      justify-center
      min-h-screen
      text-blue-500
      items-center
      p-16
      shadow-xl
      max-w-full
    "
  >
    <div
      class="
        max-w-screen-2xl
        mx-auto
        sm:px-6
        lg:px-8
        bg-blue-50
        break-words
        p-16
        rounded
        border-gray-300
      "
    >
      <button
        class="
          bg--800 bg-green-700
          text-white
          p-3
          m-4
          shadow-xl
          rounded-xl
          ring-4 ring-yellow-500 ring-opacity-50
        "
        @click="getToken()"
      >
        Get token
      </button>
      <button
        class="
          bg-red-500
          border-red-700
          text-white
          p-3
          m-1
          shadow-xl
          rounded-xl
          ring-4 ring-indigo-300
        "
        @click="logout()"
      >
        Logount
      </button>

      <p class="font-bold p-3 m-1 shadow-xl p-8 border-gray-300">
        auth: {{ $store.state.auth }}
      </p>

      <p class="font-bold p-3 m-1 shadow-xl p-8 border-gray-300">
        isLoggedIn: {{ isLoggedIn }}
      </p>

      <p class="font-bold p-3 m-1 shadow-xl p-8 border-gray-300">
        token: {{ token }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  created() {},
  computed: {
    token: {
      get() {
        return this.$store.state.auth.token;
      },
    },
    isLoggedIn: {
      get() {
        return this.$store.state.auth.isLoggedIn;
      },
    },
  },
  methods: {
    getToken() {
      return this.$store.dispatch("auth/getToken");
    },
    ...mapMutations({
      logout: "auth/SET_LOGOUT",
    }),
  },
});
</script>
