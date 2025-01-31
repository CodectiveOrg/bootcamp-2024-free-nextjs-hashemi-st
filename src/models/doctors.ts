import { DoctorModel } from "@/models/doctor.model";
import user1 from "@/assets/images/user1.jpg"
import user2 from "@/assets/images/user2.jpg"
export const doctors: DoctorModel[] = [
  {
    id: "76b55838",
    name: "نیما دستگیر",
    image:
      "/getImage/p24/search-men/9b45c32fe70f1321b4b349bc1a5aff9c.jpeg?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 4.7,
    totalVotes: 1973,
    address: "تهران,جردن، بلوار گلشهر ، پلاک 7، طبقه سوم واحد 7",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "عفونت مغزی،عفونت گوش و حلق و بینی،سلولیت",
    degree: "متخصص",
    expertise: "عفونی",
    badges: ["کمترین معطلی"],
    city: "تهران",
    code: 58549,
    experience: 29,
    phone: "021-78561234",
    comments: [
      {
        user: "علی رضایی",
        image: user1,
        comment: "دکتر بسیار خوش برخورد و حرفه‌ای بودند.",
        date: "2025-01-15",
        visited: true,
        answer : "سلامت باشید"
      },
      {
        user: "سارا حسینی",
        image: user2,
        comment: "وقت‌دهی به‌موقع انجام شد و مشکلی نداشتم.",
        date: "2025-01-12",
        visited: true,
        answer : "سلامت باشید"
      },
      {
        user: "محمد کریمی",
        image: user1,
        comment: "مشاوره خوب بود ولی داروها کمی گران بودند.",
        date: "2025-01-18",
        visited: true,
        answer:""
      },
    ]
  },
  {
    id: "61ea57d2",
    name: "یحیی افتخاری",
    image:
      "/getImage/p24/search-men/ac84246810671c2744de34cb4e938aa2.jpg?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 4.7,
    totalVotes: 147,
    address: "یزد,یزد بلوار جمهوری بیمارستان افشار -کلینیک",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "فلوشیپ فوق تخصصی آنژیوگرافی.آنژیوپلاستی عروق .استراکچرال و واریس",
    degree: "فلوشیپ",
    expertise: "قلب و عروق",
    badges: [],
    city: "یزد",
    code: 138229,
    experience: 11,
    phone: "035-49872301",
    comments:[
      {
        user: "فاطمه رحمانی",
        image: user2,
        comment: "نوبت‌دهی بسیار کند بود، پیشنهاد نمی‌کنم.",
        date: "2025-01-20",
        visited: false,
        answer:""
      },
      {
        user: "رضا محمدی",
        image: user1,
        comment: "همه چیز عالی بود، خیلی راضی هستم.",
        date: "2025-01-14",
        visited: true,
        answer : "تشکر"
      },
    ]
  },
  {
    id: "e408016a",
    name: "مرجان همتیان",
    image:
      "/getImage/p24/search-women/dc1c321cabe87e09772530d3480d2adc.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 4.56,
    totalVotes: 318,
    address:
      "قم,۲۰ متری امام حسین، نبش خیابان دانیال، بعد از کوچه ۲۹ دانیال، پلاک ۵۶۵، روبروی قنادی سیب، از سمت دیگر: خیابان صدوق، ۵۵ متری فردوسی، چهار راه قلم ، سمت چپ به سمت خیابان دانیال، روبروی قنادی سیب، ساعت تماس ۱۶.۳۰ الی ۱۹.۳۰",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief:
      "بهداشت باروری، بهداشت جنسی، روابط زناشویی، واژینسموس، تنظیم خانواده، درمان کاهش و افزایش میل جنسی، اختلالات جنسی زوجین، مشاوره یائسگی، اختلالات قاعدگی",
    degree: "کاردان",
    expertise: "زنان، زایمان و نازایی",
    badges: ["کمترین معطلی"],
    city: "قم",
    code: 39843,
    experience: 15,
    phone: "025-23654789",
    comments:[
      
      {
        user: "نرگس",
        image: user2,
        comment: "دکتر خیلی به حرف‌ها گوش می‌دهند و دقیق هستند.",
        date: "2025-01-10",
        visited: true,
        answer : "تشکر"

      },
      {
       user: "حمید توکلی",
       image: user1,
        comment: "تجربه خیلی خوبی داشتم، برخورد منشی خوب بود.",
       date: "2025-01-08",
        visited: false,
        answer:""
      },
        ]
  },
  {
    id: "1a8daf37",
    name: "عاطفه مهرعلی تبار فیروزجاه",
    image:
      "/getImage/p24/search-women/c3998d645d48d0580494589c72028da2.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 4.77,
    totalVotes: 178,
    address:
      "علی آباد کتول,علی آباد کتول، بلوار امام رضا، جنگلده، مجتمع اسپانتا، بلوک یک، طبقه یک",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "متخصص زنان زایمان نازایی زیبایی",
    degree: "متخصص",
    expertise: "زنان، زایمان و نازایی",
    badges: [],
    city: "علی آباد",
    code: 163323,
    experience: 7,
    phone: "173-80915672",
    comments: [
      {
        user: "امین",
        image: user1,
        comment: "توضیحات کامل و مفیدی دریافت کردم.",
        date: "2025-01-07",
        visited: true,
        answer : "تشکر"

      }
    ]
  },
  {
    id: "973ef75f",
    name: "مهدي ممبني",
    image:
      "/getImage/p24/search-men/c0a4da00da796354da26c3b1ed016ab3.png?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 4.47,
    totalVotes: 134,
    address:
      "اهواز,مطب اول: کیانپارس، نبش خیابان 13 غربی، درمانگاه شبانه روزی فرهنگیان: مطب دوم : پادادشهر. خیابان 10 پاداد. درمانگاه شبانه روزی اَمان شماره تماس مطب: 09106433945_06133346824",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "کارشناس علوم تغذیه nutrition (لاغری،بارداری،اطفال،دیابت،قلبی و..)",
    degree: "کارشناس",
    expertise: "تغذیه",
    badges: ["کمترین معطلی"],
    city: "اهواز",
    code: 8492,
    experience: 11,
    phone: "061-67382940",
    comments:[
      {
        user: "مینا جعفری",
        image: user2,
        comment: "دکتر وقت زیادی برای بیمارها نمی‌گذارند.",
        date: "2025-01-09",
        visited: false,
        answer:""
      },
      {
        user: "حسین افشار",
        image: user1,
        comment: "محیط تمیز و آرامش‌بخشی بود.",
        date: "2025-01-16",
        visited: true,
        answer : "تشکر"

      },
    ]
  },
  {
    id: "2b52cf72",
    name: "جمشید شایان فر",
    image:
      "/getImage/p24/search-men/82a97e2604e388b027fe1380e53e7975.jpg?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 4.38,
    totalVotes: 441,
    address:
      "تهران,تهران، بزرگراه آبشناسان،سردار شمال، پنج تن، قدس، نبش یکم مرکزی",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "دکترای تخصصی (Ph.D) طب سنتی ایرانی",
    degree: "دکترای تخصصی",
    expertise: "طب سنتی",
    badges: ["کمترین معطلی"],
    city: "تهران",
    code: 54763,
    experience: 30,
    phone: "021-52918736",
    comments:[
      {
        user: "زهرا احمدی",
        image: user2,
        comment: "دکتر با حوصله همه چیز را توضیح دادند.",
        date: "2025-01-19",
        visited: true,
        answer : "سلامت باشید"

      },
      {
        user: "مهدی",
        image: user1,
        comment: "مشکلم به خوبی برطرف شد. تشکر!",
        date: "2025-01-05",
       visited: true,
       answer:""
      },
    ]
  },
  {
    id: "baeeab42",
    name: "عرفان اشجعي",
    image:
      "/getImage/p24/search-men/8c981c886725e524c0e0f100ff25f22c.jpg?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 4.83,
    totalVotes: 699,
    address: "تهران,تهران، ولیعصر، حق شناس، پلاک پنج، طبقه همکف",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "پزشک عمومی فارغ‌التحصیل تهران",
    degree: "دکترای",
    expertise: "پزشک عمومی",
    badges: ["منتخب پذیرش24", "خوش برخورد", "کمترین معطلی"],
    city: "تهران",
    code: 185923,
    experience: 22,
    phone: "021-31467289",
    comments:[]
  },
  {
    id: "d476e2fd",
    name: "مهسا بالاجازاده",
    image:
      "/getImage/p24/search-men/52f8f4d6a99df1f215eaf6366976903f.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 5,
    totalVotes: 24,
    address: "ورامین,ورامین، بلوار باهنر، بین هداوند خانی و گل آفتاب",
    firstAvailableAppointment: "",
    brief: "درمان تخصصی تنبلی تخمدان_عفونت_اختلالات جنسی بانوان_ناباروری",
    degree: "کارشناس",
    expertise: "زنان، زایمان و نازایی",
    badges: ["منتخب پذیرش24", "خوش برخورد", "کمترین معطلی"],
    city: "ورامین",
    code: 58898,
    experience:19,
    phone: "021-98273014",
    comments:[
      {
        user: "احسان اسکندری",
        image: user2,
        comment: "نوبت‌دهی خیلی سریع بود، راضی هستم.",
        date: "2025-01-17",
        visited: true,
        answer : "سلامت باشید"

      },
      {
        user: "جواد",
        image: user1,
        comment: "تشخیص خیلی خوب بود و داروها جواب دادند.",
        date: "2025-01-11",
        visited: true,
        answer : "سلامت باشید"

      },
      {
        user: "Sima Ranjbar",
        image: user2,
        comment: "متاسفانه برخورد اصلاً مناسب نبود.",
        date: "2025-01-13",
        visited: false,
        answer:""
      },
    ]
  },
  {
    id: "da8a5af6",
    name: "الهام معززی",
    image:
      "/getImage/p24/search-women/e6dcd6f22945150f7345689cff9c7370.jpeg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 4.67,
    totalVotes: 64,
    address:
      "بجنورد,بجنورد،خیابان دوچنار کوچه شهید محمد زاده، تقاطع آزمایشگاه طالقانی داخل کوچه سمت چپ ساختمان اداری امید طبقه دوم مرکزمامایی سپینود",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "مامایی ،زنان،زایمان",
    degree: "کارشناس ارشد",
    expertise: "زنان، زایمان و نازایی",
    badges: ["کمترین معطلی"],
    city: "بجنورد",
    code: 43898,
    experience: 12,
    phone: "058-76190543",
    comments:[ ]
  },
  {
    id: "98577481",
    name: "مهدی دهقان",
    image:
      "/getImage/p24/search-men/e03322586ab83ce88cbc98c2195157e8.jpg?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 3.41,
    totalVotes: 92,
    address: "تبریز,والمان، روبروی هتل فرید",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "متخصص جراحی دهان و فک و صورت، دکترای حرفه ای دندانپزشکی",
    degree: "دانشجوی تخصص",
    expertise: "جراحی دهان و دندان",
    badges: ["کمترین معطلی"],
    city: "تبریز",
    code: 5698,
    experience:16,
    phone: "041-42815639",
    comments:[
      {
        user: "یاسمین توانا",
        image: user2,
        comment: "برای اولین بار مراجعه کردم و کاملاً راضی بودم.",
        date: "2025-01-06",
        visited: true,
        answer : "تشکر"

      },
      {
        user: "احسان",
        image: user1,
        comment: "محیط خیلی شلوغ بود و من نوبت را کنسل کردم.",
        date: "2025-01-03",
        visited: false,
        answer:""
      }
    ]
  },
  {
    id: "8cec9d31",
    name: "خدیجه حسنلو",
    image:
      "/getImage/p24/search-women/e8117aaea59c85615bb7341d74642787.png?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 4.82,
    totalVotes: 1222,
    address:
      "زنجان,دروازه ارک، روبروی بیمارستان بهشتی، ساختمان پزشکان ارک، طبقه اول، واحد اول",
    firstAvailableAppointment: "",
    brief: "عفونت واژن،بکارت، پریودنامنظم،زنان،مامایی",
    degree: "کارشناس ارشد",
    expertise: "زنان، زایمان و نازایی",
    badges: ["منتخب پذیرش24", "خوش برخورد", "کمترین معطلی"],
    city: "زنجان",
    code: 58228,
    experience:20, 
    phone: "024-50489271",
    comments:[
      {
        user: "شیرین امینی",
        image: user2,
        comment: "مشکلات من به خوبی توضیح داده شد.",
        date: "2025-01-04",
        visited: true,
        answer:""
      }
    ]
  },
  {
    id: "97421b53",
    name: "فرشته سبزواری",
    image:
      "/getImage/p24/search-men/b93bddca7a8589c39013da8f1d67113e.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 5,
    totalVotes: 25,
    address:
      "اسلامشهر,اسلامشهر، بسیج، نبش خیابان کاشانی، بالای فروشگاه آپاچی پلاک 852، طبقه اول",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "کارشناسی‌ارشد گفتاردرمانی",
    degree: "کارشناس ارشد",
    expertise: "توانبخشی",
    badges: ["منتخب پذیرش24", "خوش برخورد", "کمترین معطلی"],
    city: "اسلامشهر",
    code: 48296,
    experience:16,
    phone: "021-83746120",
    comments:[
      {
        user: "پارسا",
        image: user1,
        comment: "بسیار راضی بودم، پیشنهاد می‌کنم.",
        date: "2025-01-21",
        visited: true,
        answer:""
      }
    ]
  },
  {
    id: "a70497d6",
    name: "محمد اخوان بازارده",
    image:
      "/getImage/p24/search-men/ffe01df9c737d76a59ddd88b564f993e.jpg?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 4.73,
    totalVotes: 32,
    address:
      "رشت,رشت، فاز2 معلم، میدان سرگل، بلوار شمسی پور،  میدان هاشمی ساختمان آنتیک 1 طبقه دوم واحد2",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "آسیب شناس گفتار و زبان",
    degree: "کارشناس",
    expertise: "توانبخشی",
    badges: ["کمترین معطلی"],
    city: "رشت",
    code: 89318,
    experience:11,
    phone: "033-29147836",
    comments:[
      {
        user: "لیلا اعتمادی",
        image: user2,
        comment: "دکتر با صبر و حوصله پاسخگو بودند.",
        date: "2025-01-02",
        visited: true,
        answer:""
      }
    ]
  },
  {
    id: "2b8367b3",
    name: "لیلا بیرانوند",
    image:
      "/getImage/p24/search-women/729f21caa2f2a37e9a38d9f0bc3bfc95.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 4.79,
    totalVotes: 18,
    address: "خرم آباد,خرم آباد، بلوار شهید شفیع پور، بابک 2 غربی",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "زنان و زایمان و مامایی",
    degree: "کارشناس",
    expertise: "زنان، زایمان و نازایی",
    badges: ["منتخب پذیرش24", "کمترین معطلی"],
    city: "خرم آباد",
    code: 13828,
    experience:8,
    phone: "066-68023914",
    comments:[
      {
        user: "نازی",
        image: user2,
        comment: "با صبر و حوصله پاسخگو بودند.",
        date: "2025-01-02",
        visited: true,
        answer:""
      }
    ]
  },
  {
    id: "974248f5",
    name: "ليلا رواز",
    image:
      "/getImage/p24/search-men/f1d11ac34256ea84614d1f6086a23d0a.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 3.88,
    totalVotes: 30,
    address:
      "بندرعباس,استان هرمزگان- بندرعباس_خیابان سیدجمال_جلوتر از سه راه سازمان_کوچه ی مهیار ۱۸_ساختمان اوپال_واحد ۶_طبقه ی دوم",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief:
      "کارشناسی مامایی.مربی بین المللی یوگای بارداری و یوگای پس از زایمان.مدرک زایمان فیزیولوژیک",
    degree: "کارشناس",
    expertise: "زنان، زایمان و نازایی",
    badges: ["خوش برخورد", "کمترین معطلی"],
    city: "بندرعباس",
    code: 48768,
    experience:29,
    phone: "076-74391562",
    comments:[]
  },
  {
    id: "9ce1d81f",
    name: "محمدمهدی درخشان مهر",
    image:
      "/getImage/p24/search-women/5ba7fa66fb0fc8ab18d19675b1c9347d.jpg?size=150",
    isVerified: true,
    gender: "مرد",
    averageRating: 4.92,
    totalVotes: 108,
    address: "تهران,تهران، سعادت آباد، خیابان دوم شمالی",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "جراحی مغز واعصاب و ستون فقرات ( درد دست، سیاتیک، دیسک کمر و گردن)",
    degree: "دانشجوی تخصص",
    expertise: "مغز و اعصاب",
    badges: ["منتخب پذیرش24", "کمترین معطلی"],
    city: "تهران",
    code: 57798,
    experience:25,
    phone: "021-49027381",
    comments:[
      {
        user: "نیما",
        image: user1,
        comment: "دکتر خوبی هستند.",
        date: "2025-01-02",
        visited: true,
        answer:""
      }
    ]
  },
  {
    id: "56909296",
    name: "لیلا قاسمی",
    image:
      "/getImage/p24/search-men/b6ed21a88e738f7f3484bcb94f541ccd.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 3.92,
    totalVotes: 13,
    address: "شهرکرد,..",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "کارشناسی مامایی",
    degree: "کارشناس",
    expertise: "زنان، زایمان و نازایی",
    badges: ["منتخب پذیرش24", "کمترین معطلی"],
    city: "شهرکرد",
    code: 55598,
    experience:17,
    phone: "038-65482907",
    comments:[
      {
        user: "لیلا اعتمادی",
        image: user2,
        comment: "دکتر با صبر و حوصله پاسخگو بودند.",
        date: "2025-01-02",
        visited: true,
        answer:""
      }
    ]
  },
  {
    id: "3f9b752a",
    name: "زهرا غلامی",
    image:
      "/getImage/p24/search-men/89fc445342ac78f79191e829134c2405.jpg?size=150",
    isVerified: true,
    gender: "زن",
    averageRating: 4.54,
    totalVotes: 200,
    address:
      "تهران,فلکه دوم تهرانپارس ابتدای خیابان جشنواره ساختمان پزشکان ابن سینا طبقه اول واحد 6",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "تخصص زنان و زایمان نازایی. کولپوسکوپی",
    degree: "متخصص",
    expertise: "زنان، زایمان و نازایی",
    badges: [],
    city: "تهران",
    code: 48844,
    experience:15,
    phone:"021-37290615",
    comments:[]
  },
  {
    id: "e6719f23",
    name: "مجتبی قدسی",
    image:
      "/getImage/p24/search-men/75fb4a009a8ab4af3a5c4f819f1846c7.jpg?size=150",
    isVerified: true,
    averageRating: 4.92,
    totalVotes: 1487,
    address:
      "اردبیل,اردبیل، اول خیابان والی، خیابان شهیدان نوعی اقدم، نرسیده به بیمارستان امام خمینی، جنب داروخانه دکترنصیرپور",
    firstAvailableAppointment: "16 دی 11 صبح",
    brief: "متخصص بیماری‌های کودکان",
    badges: ["خوش برخورد", "کمترین معطلی"],
    expertise: "کودکان و اطفال",
    city: "اردبیل",
    degree: "متخصص",
    gender: "مرد",
    code: 56832,
    experience:13,
    phone:"051-86019432",
    comments:[]
  },
];
