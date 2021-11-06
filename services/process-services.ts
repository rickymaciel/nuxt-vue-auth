function getApiUrl() {
  return process.env.VUE_APP_API_URL;
}

function getCookieDomain() {
  return process.env.VUE_APP_COOKIE_DOMAIN;
}

export { getApiUrl, getCookieDomain };
