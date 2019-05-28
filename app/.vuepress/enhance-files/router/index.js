import store from '../store'

export default router=>{
  async function afterEach(to, from, next) {
    await router.app.$nextTick()
  }

  router.afterEach(afterEach)
}