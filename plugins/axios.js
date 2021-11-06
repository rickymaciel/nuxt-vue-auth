import { IsTokenExpired } from "@/services/jwt-services";

export default function ({ $axios, redirect, store }) {

  $axios.setBaseURL(process.env.VUE_APP_API_URL);

  $axios.onRequest((config) => {

    console.log('axios::onRequest', {config});

    const token = store.state.auth.token;

    const isExpired = IsTokenExpired(token);

    console.log("axios", {
      isExpired,
    });

    if (isExpired) {
      // TODO Clear cookie and state
      return;
    }

    if (token) {
      config.headers.common.Authorization = token;
    }
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    console.log('axios::onError', {code, error});
    if (code === 400) {
      redirect("/400");
    }
  });
}
