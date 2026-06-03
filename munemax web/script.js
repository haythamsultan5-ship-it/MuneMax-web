/* =====================================================================
   MuneMax — منيو ماكس | ملف المحتوى والمنطق
   =====================================================================

   ✏️  دليل التعديل السريع (اقرأ هذا أولاً)
   ---------------------------------------------------------------------
   كل المحتوى القابل للتعديل موجود في الـ object اسمه siteContent بالأسفل.
   عدّل القيم فقط — لا تلمس باقي الكود (HTML/CSS). كل شي يتحدّث تلقائياً.

   • تغيير رقم الواتساب:
       غيّر قيمة  whatsapp  (بصيغة دولية بدون + أو مسافات، مثال: 966559711579)

   • تغيير رسالة الواتساب الجاهزة:
       غيّر  whatsappMessageAr  و  whatsappMessageEn

   • تغيير أي نص (عربي/إنجليزي):
       كل نص له نسختين تنتهي بـ Ar (عربي) و En (إنجليزي). غيّر النسختين.

   • إضافة رابط فيديو الديمو:
       ضع رابط الفيديو في  demoVideo
       - رابط يوتيوب embed مثل:  https://www.youtube.com/embed/XXXXXXXX
       - أو رابط فيديو مباشر mp4
       لو تركته فاضي "" يظهر موكأپ موبايل أنيق بدل الفيديو.

   • تغيير روابط السوشيال ميديا:
       غيّر القيم داخل  social  (instagram / facebook / tiktok)
       أي رابط تتركه فاضي "" تختفي أيقونته تلقائياً.

   • استبدال اللوجو بصورة:
       ضع رابط الصورة في  logoUrl  (مثال: "logo.png")
       لو تركته فاضي "" يظهر اسم MuneMax كنص.

   • إضافة صور الواجهات (Screenshots):
       أضف عناصر داخل مصفوفة  screenshots  بهذا الشكل:
       { titleAr: "اسم الواجهة", titleEn: "Screen name", image: "shot1.png" }
       لو لم تضع image تظهر صورة placeholder أنيقة.

   • إضافة رأي عميل جديد (Testimonial):
       أضف عنصر داخل مصفوفة  testimonials  بهذا الشكل:
       { nameAr: "اسم المطعم", nameEn: "Restaurant", textAr: "الرأي", textEn: "Review", rating: 5 }

   • إضافة لوجو مطعم جديد (شريط العملاء):
       أضف عنصر داخل مصفوفة  restaurantLogos  بهذا الشكل:
       { name: "اسم المطعم", image: "rest-logo.png" }
       لو تركت المصفوفة فاضية [] يختفي القسم بالكامل تلقائياً.

   • إضافة/تعديل سؤال في الأسئلة الشائعة (FAQ):
       عدّل أو أضف عناصر داخل مصفوفة  faq  بهذا الشكل:
       { qAr: "السؤال", qEn: "Question", aAr: "الجواب", aEn: "Answer" }

   • وضع ملف البروشور PDF:
       ضع ملف الـ PDF في نفس مجلد الموقع باسم  munemax-brochure.pdf
       أو غيّر الاسم/المسار في  pdfUrl
       الزر يبقى ظاهراً حتى لو لم تضف الملف بعد.

   • تغيير الألوان:
       الألوان موجودة في ملف  styles.css  داخل  :root  كمتغيرات CSS
       (مثال: --color-primary: #273DCE). غيّرها هناك.

   ===================================================================== */


const siteContent = {

  /* ---------------- معلومات التواصل ---------------- */

  // رقم الواتساب (صيغة دولية بدون + أو مسافات)
  whatsapp: "966559711579",

  // رسالة الواتساب الجاهزة (عربي)
  whatsappMessageAr: "السلام عليكم، حابب أعرف أكثر عن منيو ماكس",
  // رسالة الواتساب الجاهزة (إنجليزي)
  whatsappMessageEn: "Hello, I'd like to know more about MuneMax",

  // روابط السوشيال ميديا (اتركها "" لإخفاء الأيقونة)
  social: {
    instagram: "",
    facebook: "",
    tiktok: ""
  },

  // رابط ملف البروشور PDF
  pdfUrl: "munemax-brochure.pdf",

  // رابط فيديو الديمو (يوتيوب embed أو mp4). فاضي = موكأپ موبايل
  demoVideo: "demo.mp4",

  // رابط صورة اللوجو (فاضي = يظهر النص)
  logoUrl: "logo.jpg",

  // اسم البراند
  brandName: "MuneMax",
  brandNameAr: "منيو ماكس",


  /* ---------------- نصوص الواجهة العامة ---------------- */

  // زر تبديل اللغة (يظهر اللغة الأخرى)
  langToggleToEn: "EN",
  langToggleToAr: "ع",


  /* ---------------- قسم الهيرو ---------------- */
  hero: {
    badgeAr: "نظام منيو ذكي للمطاعم",
    badgeEn: "Smart Menu System for Restaurants",
    titleAr: "منيو ذكي يرفع مستوى خدمة مطعمك",
    titleEn: "A Smart Menu That Elevates Your Restaurant",
    subtitleAr: "الزبون يطلب من موبايله، والطلب يوصل الكاشير فوراً مع تنبيه صوتي — بدون تطبيق وبدون تغيير نظامك الحالي.",
    subtitleEn: "Customers order from their phones and orders reach the cashier instantly with a sound alert — no app, no change to your current system.",
    ctaWhatsappAr: "تواصل واتساب",
    ctaWhatsappEn: "Contact on WhatsApp",
    ctaDemoAr: "شاهد الديمو",
    ctaDemoEn: "Watch Demo",
    // نص يظهر داخل موكأپ الموبايل (placeholder)
    mockupLabelAr: "معاينة المنيو",
    mockupLabelEn: "Menu Preview"
  },


  /* ---------------- الديمو التفاعلي ---------------- */
  demo: {
    // عنوان القسم (عربي / إنجليزي)
    titleAr: "جرّب تجربة الزبون بنفسك",
    titleEn: "Try the Customer Experience Yourself",
    subtitleAr: "ديمو مبسط — بس كافي يوريك كيف الزبون يطلب من موبايله وكيف يوصل الطلب للكاشير فوراً",
    subtitleEn: "A simplified demo — enough to show how customers order from their phone and how it reaches the cashier instantly",
    // اسم المطعم داخل الديمو
    restaurantNameAr: "مطعم الديمو",
    restaurantNameEn: "Demo Restaurant",
    // الأصناف (3 كتيجوري)
    categories: [
      { ar: "مشروبات", en: "Drinks",   icon: "☕" },
      { ar: "وجبات",   en: "Meals",    icon: "🍔" },
      { ar: "حلويات",  en: "Desserts", icon: "🍰" }
    ],
    // الأصناف (cat = رقم الكتيجوري)
    items: [
      { cat: 0, ar: "قهوة لاتيه",      en: "Latte",             price: 18, emoji: "☕" },
      { cat: 0, ar: "كابتشينو",         en: "Cappuccino",        price: 20, emoji: "☕" },
      { cat: 0, ar: "موكا",             en: "Mocha",             price: 22, emoji: "🍫" },
      { cat: 0, ar: "شاي بالحليب",     en: "Milk Tea",          price: 12, emoji: "🍵" },
      { cat: 0, ar: "شاي كرك",         en: "Karak Tea",         price: 10, emoji: "🍵" },
      { cat: 0, ar: "عصير برتقال",     en: "Orange Juice",      price: 15, emoji: "🍊" },
      { cat: 0, ar: "ليموناضة نعناع",  en: "Mint Lemonade",     price: 16, emoji: "🍋" },
      { cat: 0, ar: "قهوة عربية",      en: "Arabic Coffee",     price: 10, emoji: "🫖" },
      { cat: 0, ar: "كولا",            en: "Cola",              price: 8,  emoji: "🥤" },
      { cat: 1, ar: "برجر دجاج",       en: "Chicken Burger",    price: 35, emoji: "🍔" },
      { cat: 1, ar: "شاورما لحم",      en: "Beef Shawarma",     price: 28, emoji: "🥙" },
      { cat: 1, ar: "بيتزا صغيرة",    en: "Mini Pizza",        price: 42, emoji: "🍕" },
      { cat: 1, ar: "فراخ مشوية",      en: "Grilled Chicken",   price: 45, emoji: "🍗" },
      { cat: 1, ar: "سمبوسة (6 حبات)", en: "Samosa (6 pcs)",    price: 18, emoji: "🥟" },
      { cat: 1, ar: "باستا كريمة",     en: "Creamy Pasta",      price: 38, emoji: "🍝" },
      { cat: 1, ar: "ساندويتش تونة",   en: "Tuna Sandwich",     price: 22, emoji: "🥪" },
      { cat: 1, ar: "كبدة دجاج",       en: "Chicken Liver",     price: 25, emoji: "🍳" },
      { cat: 2, ar: "كيك شوكولا",      en: "Chocolate Cake",    price: 22, emoji: "🍰" },
      { cat: 2, ar: "آيس كريم",        en: "Ice Cream",         price: 16, emoji: "🍦" },
      { cat: 2, ar: "كنافة",           en: "Kunafa",            price: 20, emoji: "🍮" },
      { cat: 2, ar: "بسبوسة",          en: "Basbousa",          price: 14, emoji: "🍮" },
      { cat: 2, ar: "تشيز كيك",        en: "Cheesecake",        price: 26, emoji: "🍰" },
      { cat: 2, ar: "وافل بالعسل",     en: "Honey Waffle",      price: 28, emoji: "🧇" },
      { cat: 2, ar: "أم علي",          en: "Umm Ali",           price: 18, emoji: "🍮" }
    ],
    // نصوص صفحة الإحصائيات
    analytics: {
      titleAr:    "الإحصائيات",
      titleEn:    "Analytics",
      emptyAr:    "أرسل طلباً\nلترى الإحصائيات هنا",
      emptyEn:    "Send an order\nto see analytics here",
      ordersAr:   "إجمالي الطلبات",
      ordersEn:   "Total Orders",
      revenueAr:  "إجمالي الإيرادات",
      revenueEn:  "Total Revenue",
      avgAr:      "متوسط الطلب",
      avgEn:      "Avg. Order",
      topAr:      "الأكثر طلباً",
      topEn:      "Top Item",
      splitAr:    "توزيع الأصناف",
      splitEn:    "Category Split",
      sarAr:      "ر.س",
      sarEn:      "SAR"
    },
    // نصوص شاشة الكاشير
    cashier: {
      titleAr:    "شاشة الكاشير",
      titleEn:    "Cashier Screen",
      emptyAr:    "في انتظار الطلبات...\nسيظهر الطلب هنا فور إرساله",
      emptyEn:    "Waiting for orders…\nOrders appear here instantly",
      tableAr:    "طاولة رقم",
      tableEn:    "Table",
      newAr:      "جديد 🔔",
      newEn:      "New 🔔",
      totalAr:    "الإجمالي:",
      totalEn:    "Total:",
      copyAr:     "نسخ للكاشير",
      copyEn:     "Copy to POS",
      copiedAr:   "✓ تم النسخ",
      copiedEn:   "✓ Copied!",
      doneAr:     "تم ✓",
      doneEn:     "Done ✓"
    }
  },


  /* ---------------- قسم المشكلة والحل (قبل / بعد) ---------------- */
  comparison: {
    titleAr: "الفرق اللي هتلمسه من أول يوم",
    titleEn: "The Difference You'll Notice From Day One",
    subtitleAr: "شوف مطعمك قبل منيو ماكس وبعده",
    subtitleEn: "See your restaurant before and after MuneMax",

    before: {
      titleAr: "من غير منيو ماكس",
      titleEn: "Without MuneMax",
      items: [
        { ar: "الزبون يستنى الويتر ويستنى في الطابور", en: "Customers wait for the waiter and stand in line" },
        { ar: "الويتر يلف بين الطاولات والكاشير ياخد الطلبات يدوياً", en: "Waiters run between tables and the cashier takes orders manually" },
        { ar: "وقت ضايع وأخطاء في نقل الطلبات", en: "Wasted time and errors in transferring orders" },
        { ar: "ضغط على الموظفين في ساعات الذروة", en: "Pressure on staff during peak hours" }
      ]
    },

    after: {
      titleAr: "مع منيو ماكس",
      titleEn: "With MuneMax",
      items: [
        { ar: "الزبون يطلب من على الطاولة من موبايله مباشرة", en: "Customers order right from their table on their phone" },
        { ar: "الطلب يوصل للكاشير فوراً مع تنبيه صوتي", en: "The order reaches the cashier instantly with a sound alert" },
        { ar: "الويتر بس ينزّل الطلب — مش بيلف ياخد طلبات", en: "The waiter just serves — no more running to take orders" },
        { ar: "خدمة أسرع وضغط أقل على الموظفين", en: "Faster service and less pressure on staff" },
        { ar: "تجربة زبون مميزة تخليه يرجع مرة ثانية", en: "A memorable customer experience that brings them back" }
      ]
    }
  },


  /* ---------------- قسم المزايا الرئيسية ---------------- */
  features: {
    titleAr: "كل اللي يحتاجه مطعمك في نظام واحد",
    titleEn: "Everything Your Restaurant Needs in One System",
    subtitleAr: "مزايا مصمّمة عشان تسهّل شغلك وترضي زبونك",
    subtitleEn: "Features designed to ease your work and delight your customers",
    items: [
      { icon: "⚡", titleAr: "سريع", titleEn: "Fast", descAr: "الطلب يوصل في ثانية واحدة مع تنبيه صوتي.", descEn: "Orders arrive in one second with a sound alert." },
      { icon: "🔗", titleAr: "يكمّل نظامك", titleEn: "Complements Your System", descAr: "يتوافق مع جميع أنظمة نقاط البيع بدون أي تغيير في طريقة شغلك.", descEn: "Works with all POS systems without changing how you operate." },
      { icon: "📱", titleAr: "بدون تطبيق", titleEn: "No App Needed", descAr: "الزبون يطلب من المتصفح بعد مسح كود QR.", descEn: "Customers order from the browser after scanning a QR code." },
      { icon: "🍽️", titleAr: "طلب من الطاولة", titleEn: "Order From the Table", descAr: "يقلل الضغط على الويتر ويسرّع الخدمة.", descEn: "Reduces waiter load and speeds up service." },
      { icon: "📊", titleAr: "إحصائيات ذكية", titleEn: "Smart Analytics", descAr: "تقارير فورية ومقارنة يومية لأداء مطعمك.", descEn: "Instant reports and daily comparisons of your performance." },
      { icon: "💰", titleAr: "دفعة واحدة", titleEn: "One-Time Payment", descAr: "بدون اشتراك شهري — تمتلكه ولا تستأجره.", descEn: "No monthly subscription — you own it, not rent it." },
      { icon: "🗂️", titleAr: "أرشيف كامل", titleEn: "Full Archive", descAr: "سجل الطلبات القديمة مع بحث وفلترة.", descEn: "A log of past orders with search and filtering." },
      { icon: "💳", titleAr: "طرق دفع متعددة", titleEn: "Multiple Payment Methods", descAr: "كاش، مدى، فيزا — كل الخيارات.", descEn: "Cash, Mada, Visa — all options supported." },
      { icon: "🔒", titleAr: "آمن ومحمي", titleEn: "Secure & Protected", descAr: "تسجيل دخول منفصل للكاشير والأدمن.", descEn: "Separate login for cashier and admin." }
    ]
  },


  /* ---------------- قسم كيف يعمل (3 خطوات) ---------------- */
  howItWorks: {
    titleAr: "كيف يعمل؟ ثلاث خطوات بس",
    titleEn: "How It Works? Just Three Steps",
    subtitleAr: "من مسح الكود لاستلام الطلب",
    subtitleEn: "From scanning the code to receiving the order",
    steps: [
      { titleAr: "الزبون يمسح QR", titleEn: "Customer Scans QR", descAr: "الزبون يمسح كود QR على الطاولة بكاميرا موبايله، والمنيو يفتح فوراً بدون تحميل أي تطبيق.", descEn: "The customer scans the QR code on the table with their phone camera, and the menu opens instantly with no app to download." },
      { titleAr: "يطلب من موبايله", titleEn: "Orders From Their Phone", descAr: "يتصفّح الأصناف بالصور، يختار، يضيف ملاحظات، ويرسل طلبه مباشرة.", descEn: "They browse items with photos, choose, add notes, and send the order directly." },
      { titleAr: "الكاشير يستلم فوراً", titleEn: "Cashier Receives Instantly", descAr: "الطلب يظهر على شاشة الكاشير مع تنبيه صوتي، وينقله لنظامه الحالي بسهولة.", descEn: "The order appears on the cashier's screen with a sound alert, and is easily passed to their current system." }
    ]
  },


  /* ---------------- قسم لمن هذا النظام ---------------- */
  audience: {
    titleAr: "لمن هذا النظام؟",
    titleEn: "Who Is This For?",
    subtitleAr: "مناسب لكل من يقدّم طعاماً ويهتم بخدمة أسرع",
    subtitleEn: "Perfect for anyone serving food who cares about faster service",
    items: [
      { icon: "☕", titleAr: "الكافيهات", titleEn: "Cafés" },
      { icon: "🍔", titleAr: "المطاعم", titleEn: "Restaurants" },
      { icon: "🚚", titleAr: "عربات الطعام", titleEn: "Food Trucks" },
      { icon: "✨", titleAr: "المطاعم الجديدة", titleEn: "New Restaurants" }
    ]
  },


  /* ---------------- قسم معرض الواجهات (Screenshots) ---------------- */
  screenshotsSection: {
    titleAr: "شوف الواجهات بنفسك",
    titleEn: "See the Interfaces Yourself",
    subtitleAr: "تصميم نظيف وسهل لكل من يستخدمه",
    subtitleEn: "A clean, easy design for everyone who uses it"
  },
  // صور الواجهات — أضف image لكل عنصر. بدونها يظهر placeholder
  screenshots: [
    { titleAr: "منيو الزبون", titleEn: "Customer Menu", image: "" },
    { titleAr: "شاشة الكاشير", titleEn: "Cashier Screen", image: "" },
    { titleAr: "لوحة الإدارة", titleEn: "Admin Panel", image: "" },
    { titleAr: "الإحصائيات", titleEn: "Analytics", image: "" }
  ],


  /* ---------------- قسم آراء العملاء (Testimonials) ---------------- */
  testimonialsSection: {
    titleAr: "وش يقولون عملاؤنا",
    titleEn: "What Our Clients Say"
  },
  // آراء العملاء — استبدل هذا برأي حقيقي
  testimonials: [
    {
      nameAr: "صاحب مطعم",
      nameEn: "Restaurant Owner",
      textAr: "الزبون يطلب من موبايله والطلب يوصلني فوراً. مافي ضغط على الموظفين وخدمتنا صارت أسرع.",
      textEn: "Customers order from their phones and I get the order instantly. Less pressure on staff and faster service.",
      rating: 5
    }
  ],


  /* ---------------- قسم المطاعم اللي تستخدمنا ---------------- */
  logosSection: {
    titleAr: "مطاعم تثق بنا",
    titleEn: "Restaurants That Trust Us"
  },
  // لوجوهات المطاعم — اتركها [] ليختفي القسم بالكامل
  restaurantLogos: [
    // { name: "اسم المطعم", image: "rest-logo.png" }
  ],


  /* ---------------- قسم الأسئلة الشائعة (FAQ) ---------------- */
  faqSection: {
    titleAr: "الأسئلة الشائعة",
    titleEn: "Frequently Asked Questions",
    subtitleAr: "كل اللي تحتاج تعرفه قبل ما تبدأ",
    subtitleEn: "Everything you need to know before you start"
  },
  faq: [
    { qAr: "هل سيغيّر نظام مطعمي الحالي؟", qEn: "Will it change my current system?", aAr: "لا، منيو ماكس يعمل فوق نظامك الحالي كإضافة وليس بديلاً.", aEn: "No, MuneMax works on top of your current system as an add-on, not a replacement." },
    { qAr: "هل متوافق مع Foodics وYalla Plus؟", qEn: "Is it compatible with Foodics and Yalla Plus?", aAr: "نعم، يعمل مع أي نظام نقاط بيع.", aEn: "Yes, it works with any POS system." },
    { qAr: "هل يحتاج الموظفون تدريباً؟", qEn: "Do employees need training?", aAr: "لا، الكاشير يتعلمه في دقائق.", aEn: "No, the cashier learns it in minutes." },
    { qAr: "ما هو الجانب القانوني والضريبي؟", qEn: "What about the legal and tax side?", aAr: "الفوترة الرسمية والضريبة تبقى على نظامك الحالي.", aEn: "Official invoicing and tax remain on your current system." },
    { qAr: "كم تبلغ التكلفة؟", qEn: "How much does it cost?", aAr: "دفعة واحدة بدون اشتراك شهري. تواصل للتفاصيل.", aEn: "A one-time payment with no monthly subscription. Contact us for details." },
    { qAr: "ماذا لو حدثت مشكلة تقنية؟", qEn: "What if a technical issue happens?", aAr: "دعم متواصل لحل أي مشكلة بسرعة.", aEn: "Continuous support to solve any issue quickly." }
  ],


  /* ---------------- قسم CTA التجربة المجانية ---------------- */
  freeTrialCTA: {
    titleAr: "جرّبه في مطعمك أسبوعاً كاملاً — مجاناً",
    titleEn: "Try It in Your Restaurant for a Full Week — Free",
    subtitleAr: "بدون التزام وبدون رسوم خفية",
    subtitleEn: "No commitment and no hidden fees",
    ctaWhatsappAr: "ابدأ تجربتك المجانية",
    ctaWhatsappEn: "Start Your Free Trial",
    ctaPdfAr: "حمّل البروشور",
    ctaPdfEn: "Download Brochure"
  },


  /* ---------------- الفوتر ---------------- */
  footer: {
    taglineAr: "نظام منيو ذكي يرفع مستوى خدمة مطعمك.",
    taglineEn: "A smart menu system that elevates your restaurant's service.",
    pdfLabelAr: "حمّل البروشور (PDF)",
    pdfLabelEn: "Download Brochure (PDF)",
    rightsAr: "جميع الحقوق محفوظة © 2025 منيو ماكس",
    rightsEn: "All rights reserved © 2025 MuneMax"
  }
};


/* =====================================================================
   ⚙️  المنطق — لا حاجة للتعديل بالأسفل
   ===================================================================== */

// اللغة الحالية: من localStorage أو "ar" افتراضياً
let currentLang = localStorage.getItem("munemax-lang") || "ar";

// اختصار: اختيار النص حسب اللغة الحالية من كائن فيه Ar/En
function pick(obj, key) {
  return currentLang === "ar" ? obj[key + "Ar"] : obj[key + "En"];
}

// اختصار: اختيار من عنصر فيه { ar, en }
function pickAB(item) {
  return currentLang === "ar" ? item.ar : item.en;
}

// بناء رابط الواتساب الكامل مع الرسالة المشفّرة
function whatsappLink() {
  const msg = currentLang === "ar"
    ? siteContent.whatsappMessageAr
    : siteContent.whatsappMessageEn;
  return `https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// أيقونة واتساب SVG (مضمّنة لتجنّب مكتبات خارجية)
const WHATSAPP_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.515 5.26l-.999 3.648 3.733-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 105.84 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.3 0 .59.05.86.13V9.4a6.33 6.33 0 00-.86-.06A6.34 6.34 0 005.43 20.5a6.34 6.34 0 0010.6-4.69V8.66a8.16 8.16 0 004.65 1.49V6.69a4.79 4.79 0 01-1.09-.01z"/></svg>`
};

const STAR_FULL = "★";
const STAR_EMPTY = "☆";

// ===== تيكر طلبات قسم المقارنة =====
let afterFeedInterval = null;
let afterFeedCount    = 0;

const FEED_ITEMS = [
  { emoji: "☕", price: 18 }, { emoji: "🍵", price: 12 },
  { emoji: "🍊", price: 15 }, { emoji: "🍔", price: 35 },
  { emoji: "🥙", price: 28 }, { emoji: "🍕", price: 42 },
  { emoji: "🍰", price: 22 }, { emoji: "🍦", price: 16 },
  { emoji: "🍮", price: 20 }, { emoji: "🍗", price: 45 },
  { emoji: "🧇", price: 28 }, { emoji: "🍋", price: 16 },
  { emoji: "🫖", price: 10 }, { emoji: "🥤", price: 8  }
];

function genFeedOrder() {
  const count = Math.floor(Math.random() * 2) + 1;
  const used  = new Set();
  const items = [];
  let total   = 0;
  for (let i = 0; i < count; i++) {
    let it;
    do { it = FEED_ITEMS[Math.floor(Math.random() * FEED_ITEMS.length)]; }
    while (used.has(it.emoji));
    used.add(it.emoji);
    const qty = Math.floor(Math.random() * 2) + 1;
    items.push({ emoji: it.emoji, qty, price: it.price });
    total += it.price * qty;
  }
  return { table: Math.floor(Math.random() * 12) + 1, items, total };
}

function addFeedOrder() {
  const list = document.getElementById("after-feed-list");
  if (!list) return;
  afterFeedCount++;

  const ar    = currentLang === "ar";
  const times = ar
    ? ["الآن", "منذ لحظة", "منذ دقيقة", "منذ دقيقتين"]
    : ["Now",  "Just now",  "1 min ago", "2 min ago"];

  // تحريك أوقات الصفوف الموجودة
  [...list.querySelectorAll(".after-feed-row")].forEach((row, i) => {
    const t = row.querySelector(".aff-time");
    if (t && times[i + 1]) t.textContent = times[i + 1];
  });

  // حذف الأقدم لو وصلنا ٤
  const rows = list.querySelectorAll(".after-feed-row");
  if (rows.length >= 4) {
    const old = rows[rows.length - 1];
    old.style.cssText += "opacity:0;transform:translateX(12px);transition:all .25s ease";
    setTimeout(() => old.remove(), 260);
  }

  // بناء الصف الجديد وإضافته في الأعلى
  const itemsStr = genFeedOrder().items;           // نعيد استخدام آخر generate
  const order    = genFeedOrder();
  const iStr     = order.items.map(x => `${x.emoji} ×${x.qty}`).join(" · ");
  const row      = document.createElement("div");
  row.className  = "after-feed-row is-new";
  row.innerHTML  = `
    <div class="aff-top">
      <span class="aff-dot"></span>
      <span class="aff-table">${ar ? "طاولة" : "Table"} ${order.table}</span>
      <span class="aff-time">${times[0]}</span>
    </div>
    <div class="aff-bottom">
      <span class="aff-items">${iStr}</span>
      <span class="aff-total">${order.total} ${ar ? "ر.س" : "SAR"}</span>
    </div>`;
  list.insertBefore(row, list.firstChild);
  setTimeout(() => row.classList.remove("is-new"), 500);

  const countEl = document.getElementById("after-feed-count");
  if (countEl) countEl.textContent = ar
    ? `${afterFeedCount} طلب اليوم`
    : `${afterFeedCount} orders today`;
}

function initAfterFeed() {
  if (afterFeedInterval) clearInterval(afterFeedInterval);
  const list = document.getElementById("after-feed-list");
  if (!list) return;
  afterFeedCount = 0;
  list.innerHTML = "";
  // 3 طلبات ابتدائية
  addFeedOrder();
  addFeedOrder();
  addFeedOrder();
  afterFeedInterval = setInterval(addFeedOrder, 5000);
}

// ===== حالة الديمو التفاعلي =====
let demoCart = {};        // { itemIndex: quantity }
let demoActiveCat = 0;
let demoOrders = [];      // قائمة الطلبات على شاشة الكاشير
let demoOrderCounter = 0; // رقم الطلب التسلسلي
let demoStats = { totalOrders: 0, totalRevenue: 0, itemCounts: {}, catCounts: {} };

// ===== دوال البناء لكل قسم =====

// ===== الديمو التفاعلي =====

function demoCatCount()   { return Object.values(demoCart).reduce((a, b) => a + b, 0); }
function demoCartTotal()  { return Object.entries(demoCart).reduce((t, [i, q]) => t + siteContent.demo.items[i].price * q, 0); }
function demoAR(s)        { return currentLang === "ar" ? s.ar : s.en; }

function renderDemoCats() {
  const el = document.getElementById("demo-cats");
  if (!el) return;
  el.innerHTML = siteContent.demo.categories.map((c, i) => `
    <button class="demo-cat-tab ${i === demoActiveCat ? "active" : ""}" data-cat="${i}">
      ${c.icon} ${demoAR(c)}
    </button>`).join("");
}

function renderDemoItems() {
  const el = document.getElementById("demo-items");
  if (!el) return;
  const items = siteContent.demo.items;
  el.innerHTML = items
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => item.cat === demoActiveCat)
    .map(({ item, idx }) => {
      const qty = demoCart[idx] || 0;
      return `
        <div class="demo-item">
          <div class="demo-item-emoji">${item.emoji}</div>
          <div class="demo-item-info">
            <div class="demo-item-name">${demoAR(item)}</div>
            <div class="demo-item-price">${item.price} ر.س</div>
          </div>
          <div class="demo-item-qty">
            ${qty > 0 ? `<button class="dqb dm" data-i="${idx}">−</button><span class="dqn">${qty}</span>` : ""}
            <button class="dqb dp" data-i="${idx}">+</button>
          </div>
        </div>`;
    }).join("");
}

function updateDemoBar() {
  const count = demoCatCount();
  const bar   = document.getElementById("demo-bar");
  if (!bar) return;
  if (count === 0) {
    bar.style.opacity = "0";
    bar.style.pointerEvents = "none";
  } else {
    bar.style.opacity = "1";
    bar.style.pointerEvents = "auto";
    document.getElementById("demo-bar-count").textContent =
      currentLang === "ar" ? `${count} عنصر — ${demoCartTotal()} ر.س` : `${count} item — ${demoCartTotal()} SAR`;
  }
}

function renderCashierOrders() {
  const screen = document.getElementById("cashier-screen");
  const badge  = document.getElementById("cashier-badge-count");
  if (!screen) return;

  const c = siteContent.demo.cashier;
  const ar = currentLang === "ar";

  // تحديث عداد الطلبات في الشريط العلوي
  if (badge) badge.textContent = demoOrders.length > 0 ? demoOrders.length : "";

  if (demoOrders.length === 0) {
    screen.innerHTML = `
      <div class="cashier-empty">
        <div class="cashier-empty-icon">🔔</div>
        <div class="cashier-empty-txt">${ar ? c.emptyAr : c.emptyEn}</div>
      </div>`;
    return;
  }

  screen.innerHTML = demoOrders.map(order => `
    <div class="cashier-order-card ${order.isNew ? "is-new" : ""}" data-oid="${order.id}">
      <div class="cashier-card-head">
        <span class="cashier-table-lbl">${ar ? c.tableAr : c.tableEn} ${order.tableNum}</span>
        <span class="cashier-new-badge">${ar ? c.newAr : c.newEn}</span>
      </div>
      <div class="cashier-items-list">
        ${order.items.map(item => `
          <div class="cashier-item-row">
            <span class="cashier-item-name">${item.emoji} ${ar ? item.ar : item.en}</span>
            <span class="cashier-item-qty">×${item.qty}</span>
            <span class="cashier-item-sub">${item.price * item.qty} ر.س</span>
          </div>`).join("")}
      </div>
      <div class="cashier-card-foot">
        <span class="cashier-total-txt">${ar ? c.totalAr : c.totalEn} ${order.total} ر.س</span>
        <div class="cashier-actions">
          <button class="cashier-copy-btn" data-oid="${order.id}">${ar ? c.copyAr : c.copyEn}</button>
          <button class="cashier-done-btn" data-oid="${order.id}">${ar ? c.doneAr : c.doneEn}</button>
        </div>
      </div>
    </div>`).join("");

  // بعد الأنيميشن اشيل is-new عشان ما يتكرر عند re-render
  demoOrders.forEach(o => { o.isNew = false; });
}

function renderAnalytics() {
  const screen = document.getElementById("analytics-screen");
  if (!screen) return;

  const a  = siteContent.demo.analytics;
  const ar = currentLang === "ar";
  const sar = ar ? a.sarAr : a.sarEn;

  if (demoStats.totalOrders === 0) {
    screen.innerHTML = `
      <div class="analytics-empty">
        <div class="analytics-empty-icon">📊</div>
        <div class="analytics-empty-txt">${ar ? a.emptyAr : a.emptyEn}</div>
      </div>`;
    return;
  }

  const avg = Math.round(demoStats.totalRevenue / demoStats.totalOrders);

  // الصنف الأكثر طلباً
  let topIdx = -1, topCount = 0;
  Object.entries(demoStats.itemCounts).forEach(([idx, cnt]) => {
    if (cnt > topCount) { topCount = cnt; topIdx = +idx; }
  });
  const topItem = topIdx >= 0 ? siteContent.demo.items[topIdx] : null;

  // توزيع الكتيجوري
  const cats = siteContent.demo.categories;
  const catTotals = cats.map((_, i) => demoStats.catCounts[i] || 0);
  const maxCat = Math.max(...catTotals, 1);

  const statCards = [
    { icon: "📦", labelAr: a.ordersAr, labelEn: a.ordersEn, value: demoStats.totalOrders, unit: "" },
    { icon: "💰", labelAr: a.revenueAr, labelEn: a.revenueEn, value: demoStats.totalRevenue, unit: sar },
    { icon: "💵", labelAr: a.avgAr, labelEn: a.avgEn, value: avg, unit: sar },
    { icon: "⭐", labelAr: a.topAr, labelEn: a.topEn,
      value: topItem ? `${topItem.emoji} ${ar ? topItem.ar : topItem.en}` : "—", unit: "", isText: true }
  ];

  screen.innerHTML = `
    <div class="analytics-stats-grid">
      ${statCards.map(s => `
        <div class="analytics-stat-card">
          <div class="analytics-stat-icon">${s.icon}</div>
          <div class="analytics-stat-body">
            <div class="analytics-stat-label">${ar ? s.labelAr : s.labelEn}</div>
            <div class="analytics-stat-value ${s.isText ? "is-text" : ""}">
              ${s.value}${s.unit ? `<span class="analytics-stat-unit"> ${s.unit}</span>` : ""}
            </div>
          </div>
        </div>`).join("")}
    </div>
    <div class="analytics-split">
      <div class="analytics-split-title">${ar ? a.splitAr : a.splitEn}</div>
      ${cats.map((cat, i) => {
        const pct = Math.round((catTotals[i] / maxCat) * 100);
        return `
          <div class="analytics-bar-row">
            <span class="analytics-bar-label">${cat.icon} ${ar ? cat.ar : cat.en}</span>
            <div class="analytics-bar-track">
              <div class="analytics-bar-fill" style="width:${pct}%"></div>
            </div>
            <span class="analytics-bar-count">${catTotals[i]}</span>
          </div>`;
      }).join("")}
    </div>`;
}

function showDemoCart() {
  const overlay = document.getElementById("demo-cart-overlay");
  if (!overlay) return;
  overlay.style.display = "flex";
  const rows = Object.entries(demoCart).map(([idx, qty]) => {
    const item = siteContent.demo.items[idx];
    return `<div class="demo-cart-row">
      <span>${item.emoji} ${demoAR(item)}</span>
      <span class="dcr-qty">×${qty}</span>
      <span class="dcr-price">${item.price * qty} ر.س</span>
    </div>`;
  }).join("");
  document.getElementById("demo-cart-rows").innerHTML = rows;
  document.getElementById("demo-cart-total-txt").textContent =
    (currentLang === "ar" ? "الإجمالي: " : "Total: ") + demoCartTotal() + " ر.س";
}

function buildDemo() {
  const d  = siteContent.demo;
  const ar = currentLang === "ar";

  document.getElementById("demo-title").textContent    = pick(d, "title");
  document.getElementById("demo-subtitle").textContent = pick(d, "subtitle");

  const wrapper = document.getElementById("demo-wrapper");
  wrapper.innerHTML = `

    <!-- ===== جانب الزبون: الموبايل ===== -->
    <div class="demo-phone">
      <div class="demo-notch"></div>
      <div class="demo-screen">

        <div class="demo-app-bar">
          <span class="demo-app-name">${pick(d, "restaurantName")}</span>
          <span class="demo-app-tag">${ar ? "ديمو مبسط" : "Simple Demo"}</span>
        </div>

        <div class="demo-cats" id="demo-cats"></div>
        <div class="demo-items" id="demo-items"></div>

        <div class="demo-bar" id="demo-bar" style="opacity:0;pointer-events:none">
          <span id="demo-bar-count"></span>
          <button class="demo-bar-btn" id="demo-bar-btn">
            ${ar ? "عرض الطلب" : "View Order"} →
          </button>
        </div>

        <div class="demo-cart-overlay" id="demo-cart-overlay" style="display:none;flex-direction:column">
          <div class="demo-cart-head">
            <span>${ar ? "طلبك" : "Your Order"}</span>
            <button id="demo-cart-close">✕</button>
          </div>
          <div class="demo-cart-rows" id="demo-cart-rows"></div>
          <div class="demo-cart-total-txt" id="demo-cart-total-txt"></div>
          <button class="demo-send-btn" id="demo-send-btn">
            ${ar ? "أرسل الطلب" : "Send Order"}
          </button>
        </div>

        <div class="demo-success" id="demo-success" style="display:none">
          <div class="demo-success-check">✓</div>
          <div class="demo-success-txt">${ar ? "وصل طلبك للكاشير! 🎉" : "Order sent to cashier! 🎉"}</div>
          <div class="demo-success-sub">${ar ? "جرّب مرة ثانية" : "Try again"}</div>
        </div>

      </div>
    </div>

    <!-- ===== سهم الاتصال ===== -->
    <div class="demo-connector" aria-hidden="true">→</div>

    <!-- ===== جانب الكاشير ===== -->
    <div class="demo-cashier-frame">
      <div class="cashier-titlebar">
        <div class="cashier-dots"><span></span><span></span><span></span></div>
        <span class="cashier-title-txt">${ar ? d.cashier.titleAr : d.cashier.titleEn}</span>
      </div>
      <div class="cashier-appbar">
        <span class="cashier-appbar-title">${ar ? "الطلبات الواردة" : "Incoming Orders"}</span>
        <span class="cashier-badge-count" id="cashier-badge-count"></span>
      </div>
      <div class="cashier-screen" id="cashier-screen"></div>
    </div>

    <!-- ===== سهم ثانٍ ===== -->
    <div class="demo-connector" aria-hidden="true">→</div>

    <!-- ===== لوحة الإحصائيات ===== -->
    <div class="demo-analytics-frame">
      <div class="cashier-titlebar">
        <div class="cashier-dots"><span></span><span></span><span></span></div>
        <span class="cashier-title-txt">${ar ? d.analytics.titleAr : d.analytics.titleEn}</span>
      </div>
      <div class="cashier-appbar">
        <span class="cashier-appbar-title">${ar ? "لحظية — تتحدث فوراً" : "Live — Updates Instantly"}</span>
        <span class="analytics-live-dot" aria-hidden="true"></span>
      </div>
      <div class="analytics-screen" id="analytics-screen"></div>
    </div>`;

  renderDemoCats();
  renderDemoItems();
  updateDemoBar();
  renderCashierOrders();
  renderAnalytics();

  // --- أحداث الكتيجوري ---
  document.getElementById("demo-cats").addEventListener("click", e => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    demoActiveCat = +btn.dataset.cat;
    renderDemoCats();
    renderDemoItems();
  });

  // --- أحداث الأصناف (+ / −) ---
  document.getElementById("demo-items").addEventListener("click", e => {
    const plus  = e.target.closest(".dp");
    const minus = e.target.closest(".dm");
    if (plus) {
      const i = +plus.dataset.i;
      demoCart[i] = (demoCart[i] || 0) + 1;
      renderDemoItems();
      updateDemoBar();
    }
    if (minus) {
      const i = +minus.dataset.i;
      demoCart[i] = Math.max(0, (demoCart[i] || 0) - 1);
      if (demoCart[i] === 0) delete demoCart[i];
      renderDemoItems();
      updateDemoBar();
    }
  });

  // --- زر عرض الطلب ---
  document.getElementById("demo-bar-btn").addEventListener("click", showDemoCart);

  // --- إغلاق السلة ---
  document.getElementById("demo-cart-close").addEventListener("click", () => {
    document.getElementById("demo-cart-overlay").style.display = "none";
  });

  // --- إرسال الطلب → يظهر على الكاشير + الإحصائيات ---
  document.getElementById("demo-send-btn").addEventListener("click", () => {
    const orderItems = Object.entries(demoCart).map(([idx, qty]) => ({
      ...siteContent.demo.items[+idx], qty
    }));
    const total = demoCartTotal();

    demoOrderCounter++;
    demoOrders.unshift({
      id:       demoOrderCounter,
      tableNum: Math.floor(Math.random() * 8) + 1,
      items:    orderItems,
      total,
      isNew:    true
    });

    // تحديث الإحصائيات التراكمية
    demoStats.totalOrders++;
    demoStats.totalRevenue += total;
    orderItems.forEach(item => {
      const idx = siteContent.demo.items.indexOf(
        siteContent.demo.items.find(x => x.ar === item.ar)
      );
      demoStats.itemCounts[idx] = (demoStats.itemCounts[idx] || 0) + item.qty;
      demoStats.catCounts[item.cat] = (demoStats.catCounts[item.cat] || 0) + item.qty;
    });

    // شاشة نجاح على الموبايل
    document.getElementById("demo-cart-overlay").style.display = "none";
    const success = document.getElementById("demo-success");
    success.style.display = "flex";
    setTimeout(() => {
      success.style.display = "none";
      demoCart = {};
      renderDemoItems();
      updateDemoBar();
    }, 3000);

    // تحديث الكاشير والإحصائيات فوراً
    renderCashierOrders();
    renderAnalytics();
  });

  // --- أحداث الكاشير: نسخ + تم ---
  document.getElementById("cashier-screen").addEventListener("click", e => {
    const copyBtn = e.target.closest(".cashier-copy-btn");
    const doneBtn = e.target.closest(".cashier-done-btn");
    const c       = siteContent.demo.cashier;
    const ar2     = currentLang === "ar";

    if (copyBtn) {
      copyBtn.textContent = ar2 ? c.copiedAr : c.copiedEn;
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = ar2 ? c.copyAr : c.copyEn;
        copyBtn.classList.remove("copied");
      }, 2000);
    }

    if (doneBtn) {
      const oid  = +doneBtn.dataset.oid;
      const card = doneBtn.closest(".cashier-order-card");
      card.style.opacity   = "0";
      card.style.transform = currentLang === "ar" ? "translateX(-20px)" : "translateX(20px)";
      setTimeout(() => {
        demoOrders = demoOrders.filter(o => o.id !== oid);
        renderCashierOrders();
      }, 280);
    }
  });
}

// تحديث سمات html (lang/dir)
function applyDirection() {
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === "ar" ? "rtl" : "ltr";
}

// الهيدر: اللوجو + التبديل + زر واتساب
function buildHeader() {
  // اللوجو
  const logoEl = document.getElementById("brand-logo");
  if (siteContent.logoUrl) {
    logoEl.innerHTML = `<img src="${siteContent.logoUrl}" alt="${siteContent.brandName}" class="logo-img">`;
  } else {
    logoEl.innerHTML = `<span class="logo-text">${siteContent.brandName}</span>`;
  }

  // زر تبديل اللغة (يعرض اللغة الأخرى)
  const langBtn = document.getElementById("lang-toggle");
  langBtn.textContent = currentLang === "ar" ? siteContent.langToggleToEn : siteContent.langToggleToAr;
  langBtn.setAttribute("aria-label", currentLang === "ar" ? "Switch to English" : "التبديل إلى العربية");

  // زر واتساب في الهيدر
  const headerWa = document.getElementById("header-whatsapp");
  headerWa.href = whatsappLink();
  headerWa.innerHTML = `${WHATSAPP_ICON}<span>${currentLang === "ar" ? "واتساب" : "WhatsApp"}</span>`;
}

// قسم الهيرو
function buildHero() {
  const h = siteContent.hero;
  document.getElementById("hero-badge").textContent = pick(h, "badge");
  document.getElementById("hero-title").textContent = pick(h, "title");
  document.getElementById("hero-subtitle").textContent = pick(h, "subtitle");

  const waBtn = document.getElementById("hero-whatsapp");
  waBtn.href = whatsappLink();
  waBtn.innerHTML = `${WHATSAPP_ICON}<span>${pick(h, "ctaWhatsapp")}</span>`;

  const demoBtn = document.getElementById("hero-demo");
  demoBtn.textContent = pick(h, "ctaDemo");

  // المساحة البصرية: فيديو أو موكأپ موبايل
  const visual = document.getElementById("hero-visual");
  if (siteContent.demoVideo) {
    const isYoutube = siteContent.demoVideo.includes("youtube") || siteContent.demoVideo.includes("youtu.be");
    if (isYoutube) {
      visual.innerHTML = `<div class="video-wrap"><iframe src="${siteContent.demoVideo}" title="${pick(h, "ctaDemo")}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    } else {
      visual.innerHTML = `<div class="video-wrap"><video src="${siteContent.demoVideo}" controls></video></div>`;
    }
  } else {
    // موكأپ موبايل أنيق (placeholder)
    visual.innerHTML = `
      <div class="phone-mockup" aria-hidden="true">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="mock-header">
            <div class="mock-logo">${siteContent.brandName}</div>
            <div class="mock-label">${pick(h, "mockupLabel")}</div>
          </div>
          <div class="mock-cats">
            <span class="mock-cat active"></span><span class="mock-cat"></span><span class="mock-cat"></span>
          </div>
          <div class="mock-item"><div class="mock-thumb"></div><div class="mock-lines"><span></span><span></span></div></div>
          <div class="mock-item"><div class="mock-thumb"></div><div class="mock-lines"><span></span><span></span></div></div>
          <div class="mock-item"><div class="mock-thumb"></div><div class="mock-lines"><span></span><span></span></div></div>
          <div class="mock-cta">${currentLang === "ar" ? "إرسال الطلب" : "Send Order"}</div>
        </div>
      </div>`;
  }
}

// قسم المقارنة قبل/بعد
function buildComparison() {
  const c = siteContent.comparison;
  document.getElementById("comparison-title").textContent    = pick(c, "title");
  document.getElementById("comparison-subtitle").textContent = pick(c, "subtitle");

  document.getElementById("before-title").textContent = pick(c.before, "title");
  document.getElementById("after-title").textContent  = pick(c.after, "title");

  const beforeList = document.getElementById("before-list");
  beforeList.innerHTML = c.before.items.map(item =>
    `<li><span class="x-mark" aria-hidden="true">✕</span><span>${pickAB(item)}</span></li>`
  ).join("");

  const afterList = document.getElementById("after-list");
  afterList.innerHTML = c.after.items.map(item =>
    `<li><span class="check-mark" aria-hidden="true">✓</span><span>${pickAB(item)}</span></li>`
  ).join("");
}

// قسم المزايا
function buildFeatures() {
  const f = siteContent.features;
  document.getElementById("features-title").textContent = pick(f, "title");
  document.getElementById("features-subtitle").textContent = pick(f, "subtitle");

  const grid = document.getElementById("features-grid");
  grid.innerHTML = f.items.map(item => `
    <article class="feature-card reveal">
      <div class="feature-icon" aria-hidden="true">${item.icon}</div>
      <h3>${pick(item, "title")}</h3>
      <p>${pick(item, "desc")}</p>
    </article>
  `).join("");
}

// قسم كيف يعمل
function buildHowItWorks() {
  const w = siteContent.howItWorks;
  document.getElementById("how-title").textContent = pick(w, "title");
  document.getElementById("how-subtitle").textContent = pick(w, "subtitle");

  const steps = document.getElementById("how-steps");
  steps.innerHTML = w.steps.map((step, i) => `
    <div class="step reveal">
      <div class="step-num">${i + 1}</div>
      <h3>${pick(step, "title")}</h3>
      <p>${pick(step, "desc")}</p>
    </div>
    ${i < w.steps.length - 1 ? '<div class="step-arrow" aria-hidden="true">→</div>' : ''}
  `).join("");
}

// قسم لمن هذا النظام
function buildAudience() {
  const a = siteContent.audience;
  document.getElementById("audience-title").textContent = pick(a, "title");
  document.getElementById("audience-subtitle").textContent = pick(a, "subtitle");

  const grid = document.getElementById("audience-grid");
  grid.innerHTML = a.items.map(item => `
    <div class="audience-card reveal">
      <div class="audience-icon" aria-hidden="true">${item.icon}</div>
      <h3>${pick(item, "title")}</h3>
    </div>
  `).join("");
}

// موكأپات CSS للواجهات الأربع
function ssMenuMockup() {
  return `<div class="ss-menu">
    <div class="ss-topbar"><span class="ss-brand">MuneMax</span><span class="ss-tag-blue">طاولة 5</span></div>
    <div class="ss-tabs">
      <span class="ss-tab ss-active">☕ مشروبات</span>
      <span class="ss-tab">🍔 وجبات</span>
      <span class="ss-tab">🍰 حلويات</span>
    </div>
    <div class="ss-items">
      <div class="ss-item"><span class="ss-em">☕</span><span class="ss-iname">قهوة لاتيه</span><span class="ss-price">18 ر.س</span><span class="ss-plus">+</span></div>
      <div class="ss-item"><span class="ss-em">🍵</span><span class="ss-iname">شاي كرك</span><span class="ss-price">10 ر.س</span><span class="ss-plus">+</span></div>
      <div class="ss-item ss-selected"><span class="ss-em">🍊</span><span class="ss-iname">عصير برتقال</span><span class="ss-price">15 ر.س</span><div class="ss-qty"><span class="ss-qb">−</span><span class="ss-qn">2</span><span class="ss-qb ss-qp">+</span></div></div>
      <div class="ss-item"><span class="ss-em">🍋</span><span class="ss-iname">ليموناضة</span><span class="ss-price">16 ر.س</span><span class="ss-plus">+</span></div>
    </div>
    <div class="ss-bar"><span>2 عنصر — 30 ر.س</span><span class="ss-bar-btn">عرض الطلب →</span></div>
  </div>`;
}

function ssCashierMockup() {
  return `<div class="ss-cashier">
    <div class="ss-win-bar"><div class="ss-dots"><span class="ss-dr"></span><span class="ss-dy"></span><span class="ss-dg"></span></div><span class="ss-win-title">شاشة الكاشير</span></div>
    <div class="ss-cashier-app">
      <div class="ss-cashier-header"><span>الطلبات الواردة</span><span class="ss-cnt">2</span></div>
      <div class="ss-c-card ss-c-new">
        <div class="ss-c-head"><span class="ss-c-table">طاولة 3</span><span class="ss-new-badge">جديد 🔔</span></div>
        <div class="ss-c-rows"><span>☕ ×2 · 🍔 ×1</span></div>
        <div class="ss-c-foot"><span class="ss-c-total">53 ر.س</span><div class="ss-c-btns"><span class="ss-copy-btn">نسخ للكاشير</span><span class="ss-done-btn">تم ✓</span></div></div>
      </div>
      <div class="ss-c-card">
        <div class="ss-c-head"><span class="ss-c-table">طاولة 7</span><span class="ss-new-badge">جديد 🔔</span></div>
        <div class="ss-c-rows"><span>🥙 ×1 · 🍵 ×2</span></div>
        <div class="ss-c-foot"><span class="ss-c-total">52 ر.س</span><div class="ss-c-btns"><span class="ss-copy-btn">نسخ للكاشير</span><span class="ss-done-btn">تم ✓</span></div></div>
      </div>
    </div>
  </div>`;
}

function ssAdminMockup() {
  return `<div class="ss-admin">
    <div class="ss-sidebar">
      <div class="ss-logo-row">MuneMax</div>
      <div class="ss-si ss-si-active">📊 لوحة التحكم</div>
      <div class="ss-si">🍽️ المنيو</div>
      <div class="ss-si">📋 الطلبات</div>
      <div class="ss-si">👥 الموظفين</div>
      <div class="ss-si">⚙️ الإعدادات</div>
    </div>
    <div class="ss-admin-main">
      <div class="ss-a-stats">
        <div class="ss-a-stat"><div class="ss-a-num">247</div><div class="ss-a-lbl">طلب اليوم</div></div>
        <div class="ss-a-stat"><div class="ss-a-num">6.4k</div><div class="ss-a-lbl">ر.س اليوم</div></div>
        <div class="ss-a-stat"><div class="ss-a-num">18</div><div class="ss-a-lbl">منتج نشط</div></div>
        <div class="ss-a-stat"><div class="ss-a-num">12</div><div class="ss-a-lbl">طاولة</div></div>
      </div>
      <div class="ss-a-chart">
        <div class="ss-a-bar" style="height:45%"></div>
        <div class="ss-a-bar" style="height:68%"></div>
        <div class="ss-a-bar" style="height:52%"></div>
        <div class="ss-a-bar" style="height:85%"></div>
        <div class="ss-a-bar" style="height:62%"></div>
        <div class="ss-a-bar ss-a-bar-hi" style="height:93%"></div>
        <div class="ss-a-bar" style="height:74%"></div>
      </div>
    </div>
  </div>`;
}

function ssAnalyticsMockup() {
  return `<div class="ss-analytics">
    <div class="ss-an-head"><span class="ss-an-title">الإحصائيات</span><span class="ss-live-dot"></span></div>
    <div class="ss-an-cards">
      <div class="ss-an-card"><div class="ss-an-num">↑ 34%</div><div class="ss-an-lbl">نمو الطلبات</div></div>
      <div class="ss-an-card"><div class="ss-an-num">2.4 دق</div><div class="ss-an-lbl">متوسط الانتظار</div></div>
      <div class="ss-an-card"><div class="ss-an-num">93%</div><div class="ss-an-lbl">رضا الزبائن</div></div>
      <div class="ss-an-card"><div class="ss-an-num">☕ لاتيه</div><div class="ss-an-lbl">الأكثر طلباً</div></div>
    </div>
    <div class="ss-an-split">
      <div class="ss-an-split-lbl">توزيع الأصناف</div>
      <div class="ss-an-row"><span class="ss-an-cat">☕ مشروبات</span><div class="ss-an-track"><div class="ss-an-fill" style="width:78%"></div></div><span class="ss-an-pct">78%</span></div>
      <div class="ss-an-row"><span class="ss-an-cat">🍔 وجبات</span><div class="ss-an-track"><div class="ss-an-fill ss-an-fill2" style="width:55%"></div></div><span class="ss-an-pct">55%</span></div>
      <div class="ss-an-row"><span class="ss-an-cat">🍰 حلويات</span><div class="ss-an-track"><div class="ss-an-fill ss-an-fill3" style="width:38%"></div></div><span class="ss-an-pct">38%</span></div>
    </div>
  </div>`;
}

const SS_MOCKUPS = [ssMenuMockup, ssCashierMockup, ssAdminMockup, ssAnalyticsMockup];

// قسم معرض الواجهات
function buildScreenshots() {
  const s = siteContent.screenshotsSection;
  document.getElementById("screenshots-title").textContent = pick(s, "title");
  document.getElementById("screenshots-subtitle").textContent = pick(s, "subtitle");

  const grid = document.getElementById("screenshots-grid");
  grid.innerHTML = siteContent.screenshots.map((shot, i) => `
    <figure class="screenshot-card reveal">
      <div class="screenshot-frame">
        ${shot.image
          ? `<img src="${shot.image}" alt="${pick(shot, "title")}">`
          : (SS_MOCKUPS[i] ? SS_MOCKUPS[i]() : `<div class="screenshot-placeholder"><span>🖼️</span></div>`)}
      </div>
      <figcaption>${pick(shot, "title")}</figcaption>
    </figure>
  `).join("");
}

// قسم آراء العملاء
function buildTestimonials() {
  document.getElementById("testimonials-title").textContent = pick(siteContent.testimonialsSection, "title");

  const grid = document.getElementById("testimonials-grid");
  grid.innerHTML = siteContent.testimonials.map(t => {
    const rating = Math.max(0, Math.min(5, t.rating || 5));
    const stars = STAR_FULL.repeat(rating) + STAR_EMPTY.repeat(5 - rating);
    return `
      <blockquote class="testimonial-card reveal">
        <div class="stars" aria-label="${rating}/5">${stars}</div>
        <p class="testimonial-text">${pick(t, "text")}</p>
        <footer class="testimonial-name">${pick(t, "name")}</footer>
      </blockquote>
    `;
  }).join("");
}

// قسم لوجوهات المطاعم (يختفي لو فاضي)
function buildLogos() {
  const section = document.getElementById("logos-section");
  if (!siteContent.restaurantLogos || siteContent.restaurantLogos.length === 0) {
    section.style.display = "none";
    return;
  }
  section.style.display = "";
  document.getElementById("logos-title").textContent = pick(siteContent.logosSection, "title");

  const strip = document.getElementById("logos-strip");
  strip.innerHTML = siteContent.restaurantLogos.map(logo => `
    <div class="logo-item">
      ${logo.image
        ? `<img src="${logo.image}" alt="${logo.name || ''}">`
        : `<span>${logo.name || ''}</span>`}
    </div>
  `).join("");
}

// قسم الأسئلة الشائعة
function buildFAQ() {
  const f = siteContent.faqSection;
  document.getElementById("faq-title").textContent = pick(f, "title");
  document.getElementById("faq-subtitle").textContent = pick(f, "subtitle");

  const list = document.getElementById("faq-list");
  list.innerHTML = siteContent.faq.map((item, i) => `
    <div class="faq-item reveal">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span>${pick(item, "q")}</span>
        <span class="faq-toggle" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region">
        <p>${pick(item, "a")}</p>
      </div>
    </div>
  `).join("");

  // تفعيل الفتح/القفل
  list.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(!isOpen));
      btn.querySelector(".faq-toggle").textContent = isOpen ? "+" : "−";
    });
  });
}

// قسم CTA التجربة المجانية
function buildFreeTrial() {
  const c = siteContent.freeTrialCTA;
  document.getElementById("trial-title").textContent = pick(c, "title");
  document.getElementById("trial-subtitle").textContent = pick(c, "subtitle");

  const waBtn = document.getElementById("trial-whatsapp");
  waBtn.href = whatsappLink();
  waBtn.innerHTML = `${WHATSAPP_ICON}<span>${pick(c, "ctaWhatsapp")}</span>`;

  const pdfBtn = document.getElementById("trial-pdf");
  pdfBtn.href = siteContent.pdfUrl;
  pdfBtn.textContent = pick(c, "ctaPdf");
}

// الفوتر
function buildFooter() {
  const f = siteContent.footer;

  // اللوجو
  const footLogo = document.getElementById("footer-logo");
  if (siteContent.logoUrl) {
    footLogo.innerHTML = `<img src="${siteContent.logoUrl}" alt="${siteContent.brandName}" class="logo-img">`;
  } else {
    footLogo.textContent = siteContent.brandName;
  }

  document.getElementById("footer-tagline").textContent = pick(f, "tagline");

  // روابط السوشيال (تختفي لو فاضية) + واتساب دائماً
  const socialWrap = document.getElementById("footer-social");
  let socialHTML = "";
  const s = siteContent.social;
  if (s.instagram) socialHTML += `<a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>`;
  if (s.facebook) socialHTML += `<a href="${s.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>`;
  if (s.tiktok) socialHTML += `<a href="${s.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>`;
  socialHTML += `<a href="${whatsappLink()}" target="_blank" rel="noopener" aria-label="WhatsApp" class="footer-wa">${WHATSAPP_ICON}</a>`;
  socialWrap.innerHTML = socialHTML;

  // زر PDF
  const pdfBtn = document.getElementById("footer-pdf");
  pdfBtn.href = siteContent.pdfUrl;
  pdfBtn.textContent = pick(f, "pdfLabel");

  // الحقوق
  document.getElementById("footer-rights").textContent = pick(f, "rights");
}

// الزر العائم
function buildFloatingButton() {
  const fab = document.getElementById("floating-whatsapp");
  fab.href = whatsappLink();
  fab.innerHTML = WHATSAPP_ICON;
  fab.setAttribute("aria-label", currentLang === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp");
}

// إعادة بناء كل شي (عند التحميل أو تبديل اللغة)
function renderAll() {
  applyDirection();
  buildHeader();
  buildHero();
  buildDemo();
  buildComparison();
  buildFeatures();
  buildHowItWorks();
  buildAudience();
  buildScreenshots();
  buildTestimonials();
  buildLogos();
  buildFAQ();
  buildFreeTrial();
  buildFooter();
  buildFloatingButton();
  setupReveal();
}

// تبديل اللغة
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("munemax-lang", currentLang);
  renderAll();
}

// ===== Animations: fade-in + slide-up عند التمرير =====
let revealObserver;
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => revealObserver.observe(el));
}

// ===== الهيدر: ظل عند التمرير =====
function setupHeaderScroll() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ===== التشغيل =====
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  setupHeaderScroll();

  // زر التبديل
  document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);

  // زر الديمو: تمرير لمساحة الفيديو/الهيرو
  document.getElementById("hero-demo").addEventListener("click", () => {
    document.getElementById("hero-visual").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
