export const navlinks = [
  {
    id: 1,
    name: "Bosh sahifa",
    to: "/",
    items:[]
  },
  {
    id: 2,
    name: "Doktorantura",
    to: "/doctarant",
    items:[
      {
        name:'Mustaqil izlanuvchilar',
        to:'/doctarant/independent'
      },
      {
        name:'Tayanch doktorant',
        to:'/doctarant/support'
      },
      {
        name:'Stajor tadqiqotchi',
        to:'/doctarant/intern'
      },
      {
        name:'DSc doktorant',
        to:'/doctarant/ds'
      },
    ]
  },
  {
    id: 3,
    name: "Ilmiy-tadqiqot",
    to: "/science",
    items:[
      {
        name:'ILMIY-TEXNIK kengash',
        to:'/science/tech'
      },
      {
        name:'Ilmiy loyihalar',
        to:'/science/projects'
      },
      {
        name:'Ilmiy laboratoriya',
        to:'/science/laboratory'
      },
      {
        name:'Intelektual mulk obyektlari',
        to:'/science/objects'
      },
    ]
  },
  {
    id: 4,
    name: "Reyting",
    to: "/reyting",
    items:[
      {
        name:'QS Ranking',
        to:'/reyting/qs'
      },
      {
        name:'THE Ranking',
        to:'/reyting/the'
      },
      {
        name:'Milliy reyting',
        to:'/reyting/national'
      },
      {
        name:'Greenmetric',
        to:'/reyting/green'
      },
    ]
  },
  {
    id: 5,
    name: "Iqtidorli-talabalar",
    to: "/students",
    items:[
      {
        name:'Stipendiyalar',
        to:'/students/finances'
      },
      {
        name:"To'garaklar",
        to:'/students/courses'
      },
      {
        name:"Olimpiadalar",
        to:'/students/olympics'
      },
    ]
  },
  {
    id: 6,
    name: "Tijoratlashtirish",
    to: "/shopping",
    items:[
      {
        name:"Xo'jalik shartnomalar",
        to:'/shopping/contracts'
      },
      {
        name:"Start-up loyixalar",
        to:'/shopping/startup'
      },
      {
        name:"Muommoli ishlanmalar royxati",
        to:'/shopping/problems'
      },
    ]
  },
  {
    id: 7,
    name: "Ilmiy jurnallar",
    to: "/newspaper",
    items:[
      {
        name:"Technical science and innovation",
        to:'/newspaper/tech'
      },
      {
        name:"Ta'lim tizimida ijtimoiy-gumanitar fanlar",
        to:'/newspaper/edu'
      },
      {
        name:"Energiya va resurs tejash muammolari",
        to:'/newspaper/energy'
      },
    ]
  },
  {
    id: 8,
    name: "INNO Texnopark",
    to: "/inno",
    items:[]
  },
];
