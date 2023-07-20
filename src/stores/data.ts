import { defineStore } from "pinia";
import { news1, news2, news3, news4 } from "@/assets/static";
export const resDataStore = defineStore("resStore", {
  state: () => ({
    data: [],
    bunner:[]
  }),
  getters: {
    getnews: (state) => state.data,
    getBunner:(state) => state.bunner
  },

  actions: {
    setData(data:any){
       this.data = data
    },
    setBunner(data:any){
       this.bunner = data
    },
    getOneNews(dataId:number){
      return this.data?.find((el:any) => el.id == dataId)
    }
  },
});