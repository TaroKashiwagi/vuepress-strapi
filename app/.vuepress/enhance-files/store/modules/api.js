
const state = {
  question: "",
  answerText: "",
  answerImage: "",
}

const mutations = {
  //{q: 質問文, aT, 答えテキスト, aI, 答え画像}
  update: (state, obj)=>{
    state.question = obj.q;
    state.answerText = obj.aT;
    state.answerImage = obj.aI;
  }
}

const actions = {

}

const getters = {

}



export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

