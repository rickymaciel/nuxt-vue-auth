import VuexPersistence from 'vuex-persist'
import Cookies from 'js-cookie'

export default ({ store }) => {
  new VuexPersistence({
    key: 'pinbusStore',
    restoreState: (key, storage) => {
      console.log('vuex-persist::restoreState', {
        json: Cookies.getJSON(key)
      });
      return Cookies.getJSON(key);
    },
    saveState: (key, state, storage) =>
      Cookies.set(key, state, {
        expires: 365
        // domain: process.env.PINBUS_COOKIE_DOMAIN
      }),
    reducer: state => ({ auth: state.auth })
  }).plugin(store)
}
