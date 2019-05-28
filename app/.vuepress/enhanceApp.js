import TitleMixin from './enhance-files/mixins/title-mixin'
import store from './enhance-files/store'
import routerSetup from './enhance-files/router'
import axios from 'axios'

const axiosSetup = ()=>{
  //いつか別ファイルで定義する
  const apiBaseUrl = "https://asia-northeast1-manga-cp.cloudfunctions.net";
  const token = "nKtNTVZrTXRAQR-jN5UirntkdS82crLeGXk456Pkdb3m7zL586"
  const http = axios.create({
    baseURL: apiBaseUrl
  });

  //tokenの設定
  http.interceptors.request.use((config) => {
    if (token) {  
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });



  return http;
}

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  //setup axios
  Vue.prototype.$http = axiosSetup();
  
  //setup mixins
  Vue.mixin(TitleMixin);
  Vue.mixin({store: store});

  //use vue router
  routerSetup(router);
}