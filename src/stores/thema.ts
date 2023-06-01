import { defineStore } from "pinia";
export const useThemaStore = defineStore("themaStore", {
  state: () => ({
    thema:false
  }),
  getters: {
   getThema:state => state.thema
  },

  actions: {
   setThmea(){
     this.thema = !this.thema
   }
  },
});
