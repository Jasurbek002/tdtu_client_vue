import { defineStore } from "pinia";
export const useThemaStore = defineStore("themaStore", {
  state: () => ({
    thema:true,
    lang:true
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
