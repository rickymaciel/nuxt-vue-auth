export const key_cookie = 'pinbusStore';

export const state = () => ({
  token: "",
  isLoggedIn: false,
});

export const mutations = {
  SET_TOKEN(state, params) {
    state.token = params.token ?? state.token;
    state.isLoggedIn = !!state.token;
  },
  SET_LOGOUT(state) {
    state.token = "";
    state.isLoggedIn = false;
  },
};

export const actions = {
  async getToken(context) {
    try {
      const response = await this.$axios.get(`${process.env.VUE_APP_API_URL}/auth/token`);

      const { token } = response.data.content;

      this.$cookies.set( key_cookie, { token }, { domain: process.env.VUE_APP_COOKIE_DOMAIN } );

      context.commit("SET_TOKEN", { token });

    } catch (error) {
      console.error("getToken", {
        error,
      });
    }
  },
  async getLogout(context) {
    try {
      this.$cookies.remove(key_cookie);
      context.commit("SET_LOGOUT");
    } catch (error) {
      console.error("getLogout", {
        error,
      });
    }
  },
};

export const getters = {
  token: (state) => {
    return state.token;
  },
};
