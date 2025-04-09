import { createStore } from 'vuex'

export default createStore({
  state: {
    
    Member_ID:"",
    FetchedObject:null,
    Message:"",
    Authorized:true,
    Status:'Approved'

  },
  getters: {
  },
  mutations: {
 
    SetFetchedObject(state,OBJ)
    {
      state.FetchedObject=OBJ
    },

    SetMessage(state,MESSAGE)
    {
      state.Message=MESSAGE
    },

    SetAuthorization(state,AUTHORIZATION)
    {
      state.Authorized=AUTHORIZATION
    },

    SetStatus(state,STATUS)
    {
      this.Status=STATUS
    }

  },
  actions: {
  },
  modules: {
  }
})
