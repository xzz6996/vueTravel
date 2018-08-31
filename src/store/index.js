import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const state={
    city:localStorage.getItem('city')||'北京'
}
const actions={
    changeCity(content,city){
        content.commit('changeCity',city)
    }
}

const mutations={
    changeCity(state,city){
        localStorage.setItem('city',city)
        state.city=city;
    }
}

export default new vuex.Store({
    state,
    actions,
    mutations
})