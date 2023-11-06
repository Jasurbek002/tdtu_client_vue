import { defineStore } from "pinia";
import { news1, news2, news3, news4 } from "@/assets/static";
import { hakaton, image1, image2, image3, image4 } from "@/assets/static/bunner";
export const useDataStore = defineStore("dataStore", {
  state: () => ({
    data: [
      {
        id:1,
        title:"Toshkent davlat texnika universitetida “InnoWeek.Uz-2023”",
        text:"Tadbirni universitetning Ilmiy ishlar va innovatsiyalar bo'yicha prorektor S.Donayev talabalarga omad va zafarlar tilab ochib berdi",
        image:hakaton
      },
      {
        id:2,
        title:"Toshkent davlat texnika universiteti Turkiyaning yana bir universiteti bilan hamkorlikni o‘rnatyapti.",
        text:"Bugun Toshkent davlat texnika universitetida Sakaryo amaliy fanlar universiteti rektori Mehmet Saribiyik boshchiligidagi delegatsiya kutib olindi. ",
        image:image1
      },
      {
        id:3,
        title:"TDTU Jizzax viloyati Sharof Rashidov tumaniga tashrif buyurdi",
        text:"U yerda viloyat hokim o‘rinbosari, turizm  va madaniy me’ros bo‘limi boshlig‘i tomonidan kutib olindi",
        image:image2
      },
      {
        id:4,
        title:"TDTU delegatsiya vakillari Yaponiyaga tashrifi nufuzli OTMlar e’tiborida…",
        text:"Xabaringiz bor, yaqinda Toshkent davlat texnika universiteti delegatsiyasi Yaponiyaning bir qator universitetlarida bo’lib qaytishgan edi. ",
        image:image3
      },
      {
        id:5,
        title:"Akademik Sayyora Rashidova tavalludining 80 yilligi",
        text:"Anjumanda Toshkent davlat texnika universiteti rektori, prof. S.M.Turabdjanov ham ishtirok etdi. ",
        image:image4
      },
    ],
  }),
  getters: {
    getnews: (state) => state.data,
  },

  actions: {
    getOneNews(newsId:number){
      return this.data.find((el) => el.id == newsId)
    }
  },
});
