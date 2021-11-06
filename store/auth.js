export const state = () => ({
  token: "",
  isLoggedIn: false,
})

export const mutations = {
  SET_TOKEN(state, params) {
    state.token = params.token ?? state.token
    state.isLoggedIn = !!params.token;
  },
  SET_LOGOUT(state) {
    state.token = "";
    state.isLoggedIn = false;
  },
}

export const actions = {
  async getToken(context) {
    try {

      const response = await this.$axios.get(`${process.env.VUE_APP_API_URL}/auth/token`);

      const {
        token
      } = response.data.content

      //this.$cookies.set('pinbusStore', {token, isLoggedIn: !!token }, { domain: process.env.VUE_APP_COOKIE_DOMAIN })

      this.$cookies.set('pinbusStore', token);

      context.commit('SET_TOKEN', { token });

    } catch (error) {
      console.error('getToken', {
        error
      });
    }
  },
  async getLogout(context) {
    try {

      context.commit('SET_LOGOUT');

      this.$cookies.remove('pinbusStore');

    } catch (error) {
      console.error('getLogout', {
        error
      })
    }
  },
}

export const getters = {
  token: (state) => {
    return state.token
  },
}
