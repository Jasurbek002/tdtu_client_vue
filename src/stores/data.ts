import { defineStore } from "pinia";
import { news1, news2, news3, news4 } from "@/assets/static";
import { image1, image2 } from "@/assets/static/bunner";
export const resDataStore = defineStore("resStore", {
  state: () => ({
    data: [],
    bunner:[
      {
        id:1,
        title:"Toshkent davlat texnika universiteti Turkiyaning yana bir universiteti bilan hamkorlikni o‘rnatyapti.",
        text:"Bugun Toshkent davlat texnika universitetida Sakaryo amaliy fanlar universiteti rektori Mehmet Saribiyik boshchiligidagi delegatsiya kutib olindi. ",
        image:image1
      },
      {
        id:2,
        title:"TDTU Jizzax viloyati Sharof Rashidov tumaniga tashrif buyurdi",
        text:"U yerda viloyat hokim o‘rinbosari, turizm  va madaniy me’ros bo‘limi boshlig‘i tomonidan kutib olindi",
        image:image2
      },
      {
        id:3,
        title:"TDTU Jizzax viloyati Sharof Rashidov tumaniga tashrif buyurdi",
        text:"U yerda viloyat hokim o‘rinbosari, turizm  va madaniy me’ros bo‘limi boshlig‘i tomonidan kutib olindi",
        image:image2
      },
    ]
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