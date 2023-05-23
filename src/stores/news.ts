import { defineStore } from "pinia";
import { news1, news2, news3, news4 } from "@/assets/static";
export const useDataStore = defineStore("dataStore", {
  state: () => ({
    data: [
      {
        id: 1,
        title:
          "Islom Karimov nomidagi Toshkent davlat texnika universitetida targʻibot tadbiri",
        img: news1,
        text: " Tadbirda soʻzga chiqqanlar yangilanayotgan Konstitutsiyaning mazmun-mohiyati, unga kiritilgan yangi qoʻshimchalar, ularning ahamiyati va dolzarbligi haqida gapirib, yangilanayotgan Konstitutsiyadagi oʻzgartirishlarning barchasi mamlakatimiz rivoji, xalqimizning ertangi farovon hayoti, jamiyat va davlat taraqqiyotini taʼminlashda mustahkam huquqiy asos boʻlib xizmat qilishini taʼkidladilar.",
      },
      {
        id: 2,
        title:
          "O‘zbekiston-Yaponiya yoshlar innovatsiya markazida Iqtidorli talaba yoshlarga bag’ishlangan tadbir",
        img: news2,
        text: `Joriy yilning 28-aprel kunlari O‘zbekiston-Yaponiya yoshlar innovatsiya markazida Iqtidorli talaba yoshlarga bag’ishlangan “Fan va texnika taraqqiyotida intellektual yoshlarning o’rni” mavzusida respublika ilmiy-amaliy anjumani bo’lib o’tdi. Ushbu anjumanda Ilmiy ishlar va innovatsiyalar bo’yicha prorektor, fakultet dekanlari, kafedra mudirlari va 150 dan ortiq iqtidorli talabalar ishtirok etishdi. Anjuman ochilish marosimini Ilmiy ishlar va innovatsiyalar bo’yicha prorektor S.B.Donayev Rektor tabrik so’zini professor-o’qituvchi va talabalarga yetkazdi hamda Iqtidorli talabalarning ilmiy-tadqiqot ishlarini tashkil etish bo’limi boshlig’i talaba yoshlarga bo’lishi kutilayotgan Prizedent va nomdor stipendiyalar, Technoways, “Bo’lajak olim”, “Akademik harakatchanlik”, “Mirzo Ulug’bek vorislari” hamda boshqa turli xil tanlovlar haqida talabalar kerakli tushunchalar berdi va talabalarni ushbu tanlovlarga faol ishtirok etishiga chaqirdi.
        Anjuman davomida Isroil texnika universiteti talabasi Abdullah Watted o’zining qiziqarli ma’ruzasi bilan zoom orqali qatnashdi va universitetimizning iqtidorli talabalari o’zlarining qiziqarli ma’ruzalari bilan qatnashdi va anjuman yakunida Mashinasozlik dekani Sh.Sultanova anjumanda o’z ma’ruzalari bilan qatnashgan va faol ishtirok etgan talabalarga universitet rahbariyatining esdalik sovg’a va sertifikatlarini topshirdilar.
         Ushbu anjumanda respublika bo’yicha 400 dan ortiq iqtidorli talabalarni o’zlarining ilmiy maqolalari bilan qatnashishdi..`,
      },
      {
        id: 3,
        title: `O'quvchi yoshlar, talabalar, yosh o'quvchilar va korhonalar mutahassislari uchun robotics bo'yicha XALQARO TANLOV "ROBOT.Uz-2023"`,
        img: news3,
        text: `Islom Karimov nomidagi Toshkent davlat texnika universiteti 2023-yil 16-17-May kunlari robotika iqtidorli oʻquvchi va talabalar, yosh oʻquvchilar, olim va mutahassislar uchun "ROBOT.Uz-2023" xalqaro tanlovi bulib utishi haqida xabar beradi. Xalqaro tanlovni o'tkazishdan kuzlangan maqsadli robototexnika sohasidagi iqtidorli yoshlarning ilmiy-texnikaviy izhodini ommalashtirish, muxandislik kasblarini nufuzini oshirish, yoshlarning innovation va zamonaviy texnologiyalar sohasiga qiziqishini ra g'alabadan iborat. Tanlovda o'quvchilari, talabalar, o'quvchi va yosh maktablar, korkhonalarning robotlashtirilgan ishlanmalar va sohani ommalashtirish bilan shug'ullanayotgan yosh mutahassislari ishtirok etishlari mumkin. Musobakalar 9 yoshdan 15 ta bulgan o'kuvchilar va 16 yoshdan 25 ta bulgan yoshlar o'rtasida o'tkazilady. ROBOT.Uz-2023 9-15 yoshli talabalar oracida (3rd nominatsiya): - Robo-Football (har bir zhamoadan ikkita robot katnashadi) - Robot Sumo - Robotning chizik buylab harakatlanishi Har bir hududda rezerv mavjud. I, II va III o'rinlar diplomlari va qimmatbaho sovg'alar bilan taqdirlanadi`,
      },
      {
        id: 4,
        title: `The First International Conference on Innovative Technologies in Agri-food Chain: Problems and Perspectives (ITAC-2023)`,
        img: news4,
        text: `The First International Conference on Innovative Technologies in Agri-food Chain: Problems and Perspectives (ITAC-2023) is organized by Tashkent State Technical University and will be held in Tashkent, Uzbekistan during May 25-26, 2023. ITAC is going to be one of the leading international conferences in Central Asia for presenting novel and fundamental advances in the fields of Agriculture. It also serves to foster communication among researchers, academicians, students, and practitioners working in a wide variety of scientific areas with a common interest in improving Agriculture related technologies and mechanisms. With members from around the world focused on learning about Agriculture and its advances; this is the best opportunity to reach the largest assemblage of participants from the Agro community. Conducted presentations, distribute information, meet with current and potential scientists, make a splash with new advancements and developments, and receive name recognition at this 2-days scientific event. World-renowned speakers, the most recent techniques, developments, and the newest updates in Agriculture are hallmarks of this conference`
      }
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
