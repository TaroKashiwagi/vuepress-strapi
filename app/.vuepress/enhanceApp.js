import TitleMixin from './enhance-files/mixins/title-mixin'
import store from './enhance-files/store'
import routerSetup from './enhance-files/router'
import axios from 'axios'

const axiosSetup = ()=>{
  //いつか別ファイルで定義する
  const apiBaseUrl = "http://localhost:1337/tests";
  const http = axios.create({
    baseURL: apiBaseUrl
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