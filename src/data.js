import orbitalImg from "./assets/orbital.png";
import caledonianroadImg from "./assets/Caledonianroad.jpg";
import threeDaysInJuneImg from "./assets/ThreeDaysinJune.jpg";
import fundamentallyImg from "./assets/Fundamentally.jpg";
import waterMoonImg from "./assets/WaterMoon.jpg";
import weAreWatchingImg from "./assets/Wearewatching.jpg";
import greatBigBeautifulLifeImg from "./assets/greatbigbeautifullife.jpg";
import homeseekingImg from "./assets/homeseeking.jpg";
import deathTakesMeImg from "./assets/deathtakesme.jpg";
import oneDayEveryoneImg from "./assets/onedayeveryonewillhavealwaysbeenagainstthis.jpg";
import authorityImg from "./assets/authority.jpg";
import theNextDayImg from "./assets/thenextday.jpg";
import gingkoSeasonImg from "./assets/gingkoseason.jpg";
import uncharmedImg from "./assets/uncharmed.jpg";
import emperorOfGladnessImg from "./assets/theemperorofgladness.jpg";
import disappointMeImg from "./assets/disappointme.jpg";
import deepEndImg from "./assets/deepend.jpg";
import aSeaOfUnspokenThingsImg from "./assets/ASeaofUnspokenThings.jpg";
import sayYoullRememberMeImg from "./assets/sayyoullrememberme.jpg";
import auditionImg from "./assets/audition.jpg";

export const books = [
  {
    id: 1,
    title: "Orbital",
    author: "Samantha Harvey",
    year: "2024",
    genre: "Philosophical novel",
    coverImage: orbitalImg,
    description:
      "Kosmosda insoniyat va hayot haqida falsafiy roman. Asarda astronavtlar Yer atrofida aylanib, o‘z hayotlari va insoniyat taqdiri haqida chuqur mulohazalar yuritadilar. Har bir bobda inson ruhiyati va koinot o‘rtasidagi bog‘liqlik o‘ziga xos tarzda ochib beriladi.",
    rating: 4.7,
    price: "$14.99",
  },
  {
    id: 2,
    title: "Caledonian Road",
    author: "Andrew O’Hagan",
    year: "2024",
    genre: "Literary fiction",
    coverImage: caledonianroadImg,
    description:
      "London hayoti va zamonaviy jamiyat haqida roman. Muallif shahar hayotining yorqin va qorong‘u tomonlarini, turli ijtimoiy qatlamlar o‘rtasidagi ziddiyatlarni mahorat bilan tasvirlaydi. Kitob o‘quvchini zamonaviy insonning ichki dunyosiga sayohatga chorlaydi.",
    rating: 4.3,
    price: "$13.99",
  },
  {
    id: 3,
    title: "Three Days in June",
    author: "Anne Tyler",
    year: "2025",
    genre: "Literary fiction",
    coverImage: threeDaysInJuneImg,
    description:
      "Bir oilaning uch kunlik hayoti haqida hikoya. Qahramonlar o‘zaro munosabatlar, eski xotiralar va yangi umidlar bilan kurashadilar. Har bir kun oila a’zolari uchun yangi kashfiyot va o‘zgarishlarga boy bo‘ladi.",
    rating: 4.5,
    price: "$12.5",
  },
  {
    id: 4,
    title: "Fundamentally",
    author: "Nussaibah Younis",
    year: "2025",
    genre: "Literary fiction",
    coverImage: fundamentallyImg,
    description:
      "Hayotning asosiy qadriyatlari haqida roman. Asarda bosh qahramon o‘z hayotining tub mohiyatini izlab, turli sinovlardan o‘tadi. Kitob o‘quvchini o‘z hayotiga boshqacha nigoh bilan qarashga undaydi.",
    rating: 4.2,
    price: "$11.99",
  },
  {
    id: 5,
    title: "Water Moon",
    author: "Unknown Author",
    year: "2025",
    genre: "Fantasy novel",
    coverImage: waterMoonImg,
    description:
      "Sehrli dunyoda sarguzashtlar. Qahramon suv osti shohligida g‘aroyib mavjudotlar va sirli kuchlar bilan uchrashadi. Hikoya do‘stlik, jasorat va orzular sari intilish haqida.",
    rating: 4.0,
    price: "$10.99",
  },
  {
    id: 6,
    title: "We Are Watching",
    author: "Alison Gaylin",
    year: "2025",
    genre: "Psychological thriller",
    coverImage: weAreWatchingImg,
    description:
      "Psixologik triller va sirli voqealar. Asarda bosh qahramon o‘zini doimiy kuzatuv ostida his qiladi va bu uning hayotini butunlay o‘zgartiradi. Kitobda ishonch va haqiqat o‘rtasidagi nozik chiziq ochib beriladi.",
    rating: 4.4,
    price: "$13.5",
  },
  {
    id: 7,
    title: "Great Big Beautiful Life",
    author: "Emily Henry",
    year: "2025",
    genre: "Contemporary romance",
    coverImage: greatBigBeautifulLifeImg,
    description:
      "Zamonaviy sevgi va hayot haqida hikoya. Qahramonlar o‘z orzulari va sevgisi uchun kurashadilar, hayotning go‘zalliklarini kashf etadilar. Kitob iliq va samimiy tuyg‘ular bilan to‘la.",
    rating: 4.6,
    price: "$12.99",
  },
  {
    id: 8,
    title: "Homeseeking",
    author: "Karissa Chen",
    year: "2025",
    genre: "Historical fiction",
    coverImage: homeseekingImg,
    description:
      "Tarixiy voqealar va oilaviy izlanishlar. Asarda bosh qahramon o‘z ildizlarini topish uchun uzoq safarga chiqadi. Oila, vatan va o‘zlikni anglash mavzulari kitobning asosiy g‘oyasidir.",
    rating: 4.1,
    price: "$11.5",
  },
  {
    id: 9,
    title: "Death Takes Me",
    author: "Cristina Rivera Garza",
    year: "2025",
    genre: "Literary thriller",
    coverImage: deathTakesMeImg,
    description:
      "Hayot va o‘lim o‘rtasidagi chegaralar haqida triller. Qahramon o‘zining eng qorong‘u qo‘rquvlari bilan yuzma-yuz keladi. Kitobda hayotning o‘zi ham sirli va kutilmagan bo‘lishi mumkinligi ko‘rsatiladi.",
    rating: 4.3,
    price: "$13.2",
  },
  {
    id: 10,
    title: "One Day, Everyone Will Have Always Been Against This",
    author: "Omar El Akkad",
    year: "2025",
    genre: "Nonfiction",
    coverImage: oneDayEveryoneImg,
    description:
      "Jamiyat va insoniyat haqida publitsistik asar. Muallif zamonaviy dunyodagi ijtimoiy muammolar va inson huquqlari haqida o‘z fikrlarini bildiradi. Kitob o‘quvchini chuqur o‘y va tahlilga undaydi.",
    rating: 4.0,
    price: "$15.0",
  },
  {
    id: 11,
    title: "Authority",
    author: "Andrea Long Chu",
    year: "2025",
    genre: "Essay collection",
    coverImage: authorityImg,
    description:
      "Avtoritarizm va hokimiyat haqida esseylar to'plami. Muallif o'z asarida zamonaviy jamiyatdagi avtoritar tendentsiyalarni tahlil qiladi va ularning insoniyat hayotiga ta'sirini ko'rsatadi. Har bir essey o'ziga xos mavzu va yondashuvga ega bo'lib, o'quvchini chuqur fikrlashga undaydi.",
    rating: 4.1,
    price: "$16.99",
  },
  {
    id: 12,
    title: "The Next Day",
    author: "Melinda French Gates",
    year: "2025",
    genre: "Memoir",
    coverImage: theNextDayImg,
    description:
      "Melinda French Gates ning shaxsiy va professional hayoti haqida esdaliklar. U o'zining muvaffaqiyatlari, qiyinchiliklari va hayotidagi muhim lahzalar haqida ochiqchasiga hikoya qiladi. Kitob o'quvchini ilhomlantiruvchi va o'z hayotini qayta ko'rib chiqishga undovchi xususiyatga ega.",
    rating: 4.6,
    price: "$18.00",
  },
  {
    id: 13,
    title: "Gingko Season",
    author: "Naomi Xu Elegant",
    year: "2025",
    genre: "Literary fiction",
    coverImage: gingkoSeasonImg,
    description:
      "Gingko yaproqlari tushadigan mavsumda uchraydigan insonlar hikoyasi. Har bir qahramon o'zining ichki kurashlari va orzulari bilan yashaydi. Hikoya inson ruhiyatining murakkabligi va go'zalligi haqida.",
    rating: 4.4,
    price: "$12.00",
  },
  {
    id: 14,
    title: "Uncharmed",
    author: "Lucy Jane Wood",
    year: "2025",
    genre: "Cozy fantasy",
    coverImage: uncharmedImg,
    description:
      "Sehrli, ammo noqulay vaziyatlarga tushib qolgan qiz haqida hikoya. Qahramon o'zining sehrli qobiliyatlari va oddiy hayoti o'rtasida muvozanatni topishga harakat qiladi. Kitobda do'stlik, jasorat va o'z-o'zini kashf etish mavzulari yoritilgan.",
    rating: 4.3,
    price: "$11.75",
  },
  {
    id: 15,
    title: "The Emperor of Gladness",
    author: "Ocean Vuong",
    year: "2025",
    genre: "Literary fiction",
    coverImage: emperorOfGladnessImg,
    description:
      "Baxt va qayg'u o'rtasidagi nozik muvozanat haqida roman. Asarda bosh qahramon o'zining ichki dunyosi va atrofidagi haqiqatlar bilan yuzma-yuz keladi. Kitob o'quvchini o'z his-tuyg'ulari va hayotiy tanlovlari ustida qayta o'ylashga majbur qiladi.",
    rating: 4.5,
    price: "$13.00",
  },
  {
    id: 16,
    title: "Disappoint Me",
    author: "Nicola Dinan",
    year: "2025",
    genre: "Literary fiction",
    coverImage: disappointMeImg,
    description:
      "Kutilmagan voqealar va hayotiy saboqlar haqida hikoya. Qahramon o'zining eng chuqur qo'rquvlari va umidlari bilan yuzma-yuz keladi. Har bir voqea uning shaxsiy o'sishi va o'zini anglashida muhim ahamiyatga ega.",
    rating: 4.2,
    price: "$10.50",
  },
  {
    id: 17,
    title: "Deep End",
    author: "Ali Hazelwood",
    year: "2025",
    genre: "Sports romance",
    coverImage: deepEndImg,
    description:
      "Sport va sevgi o'rtasidagi tanlovlar haqida roman. Qahramon professional sportdagi muvaffaqiyatlari va shaxsiy hayotidagi muammolari o'rtasida tanlov qilishga majbur. Kitobda sevgi, sadoqat va o'z-o'zini kashf etish mavzulari yoritilgan.",
    rating: 4.4,
    price: "$12.25",
  },
  {
    id: 18,
    title: "A Sea of Unspoken Things",
    author: "Adrienne Young",
    year: "2025",
    genre: "Magical realism",
    coverImage: aSeaOfUnspokenThingsImg,
    description:
      "Suhbatlashmagan his-tuyg'ular va sehrli voqealar. Asarda bosh qahramon o'zining ichki olami va tashqi haqiqat o'rtasidagi nozik chiziqni kashf etadi. Kitob sehr va haqiqatning uyg'unligi haqida.",
    rating: 4.6,
    price: "$13.75",
  },
  {
    id: 19,
    title: "Say You’ll Remember Me",
    author: "Abby Jimenez",
    year: "2025",
    genre: "Romantic comedy",
    coverImage: sayYoullRememberMeImg,
    description:
      "Romantik va kulgili vaziyatlar orqali sevgi hikoyasi. Qahramonlar o'zaro tushunmovchiliklar, kutilmagan uchrashuvlar va samimiy suhbatlar orqali bir-birlarini kashf etadilar. Kitob o'quvchini iliq va quvnoq his-tuyg'ular bilan to'ldiradi.",
    rating: 4.3,
    price: "$11.25",
  },
  {
    id: 20,
    title: "Audition",
    author: "Katie Kitamura",
    year: "2025",
    genre: "Literary fiction",
    coverImage: auditionImg,
    description:
      "San'at, hayot va o'z-o'zini kashf etish haqida roman. Qahramon aktyorlik san'ati orqali o'zining haqiqiy 'men'ini topishga harakat qiladi. Kitobda san'at va hayot o'rtasidagi nozik chiziq, insoniy orzular va o'zgarishlar chuqur yoritiladi.",
    rating: 4.5,
    price: "$12.99",
  },
];
