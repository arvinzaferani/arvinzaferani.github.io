import type { Dictionary } from "./en";

/**
 * Persian copy (§22). Translations cover UI chrome only.
 * Persian typography needs shorter line lengths, so headline strings are kept
 * concise rather than word-for-word mirrors of the English.
 */
export const fa: Dictionary = {
  nav: {
    work: "کارها",
    about: "درباره",
    contact: "تماس",
    home: "خانه",
  },
  hero: {
    phases: [
      { lead: "آرین", accent: "زعفرانی" },
      { lead: "می‌سازم", accent: "محصولات دیجیتال" },
      { lead: "می‌سازم", accent: "محصولات وب" },
      { lead: "از ایده", accent: "تا محصول" },
      { lead: "مسئولیتش با من", accent: "تا آخر" },
    ],
    role: "توسعه‌دهنده فول‌استک",
    city: "تهران",
    available: "آماده پروژه‌های منتخب",
    ctaPrimary: "شروع پروژه",
    ctaSecondary: "دیدن کارها",
    scroll: "اسکرول",
  },
  capability: {
    label: "توانمندی",
    heading: "چه کاری انجام می‌دهم",
    items: [
      {
        title: "توسعه MVP و محصول",
        description:
          "تبدیل یک ایده به محصولی که کار می‌کند، با پایه‌ای فنی و واقع‌بینانه.",
      },
      {
        title: "اپلیکیشن‌های وب فول‌استک",
        description:
          "طراحی و ساخت وب‌اپلیکیشن‌های اختصاصی، داشبورد و پلتفرم‌های کسب‌وکاری.",
      },
      {
        title: "توسعه محصول موجود",
        description:
          "ادامه، بهبود یا بازسازی یک اپلیکیشن موجود.",
      },
      {
        title: "استقرار و نگهداری",
        description:
          "بردن محصول از مرحله توسعه به محیط عملیاتی و نگهداری آن.",
      },
    ],
    stackLabel: "عمدتاً با این‌ها کار می‌کنم",
  },
  proof: {
    label: "اثبات",
    heading: "کارهای منتخب",
    viewProject: "دیدن پروژه",
    viewCaseCursor: ["دیدن", "پروژه"],
    roleLabel: "نقش",
    yearLabel: "سال",
    storyLabel: "داستان پروژه",
    storySteps: {
      idea: "ایده",
      problem: "مسئله",
      design: "طراحی",
      build: "ساخت",
      deploy: "استقرار",
    },
    screenshotPending: "تصویر در انتظار",
  },
  otherWork: {
    label: "سایر کارها",
    heading: "پروژه‌های دیگر",
  },
  process: {
    label: "فرآیند",
    heading: "از ایده تا محصول",
    stages: [
      {
        id: "discover",
        label: "کشف",
        description: "محصول، کاربران و وضعیت فعلی را بشناسم.",
      },
      {
        id: "plan",
        label: "برنامه",
        description: "دامنه، مدل داده و استک را قبل از کدزدن مشخص کنم.",
      },
      {
        id: "build",
        label: "ساخت",
        description: "قابلیت‌های اصلی را از رابط کاربری تا API و دیتابیس بسازم.",
      },
      {
        id: "deploy",
        label: "استقرار",
        description: "استقرار واقعی: کانتینر، تنظیمات محیطی، دامنه و دیتابیس.",
      },
      {
        id: "improve",
        label: "بهبود",
        description: "رفع ایرادهای نسخه‌ی زنده و توسعه‌ی بیشتر محصول.",
      },
    ],
  },
  about: {
    label: "درباره",
    name: "آرین زعفرانی",
    bio: "توسعه‌دهنده فول‌استک جاوااسکریپت؛ از توسعه‌ی محصول و نگهداری نسخه‌ی عملیاتی تا طراحی دیتابیس، API، معماری رابط کاربری و زیرساختی که محصول را زنده نگه می‌دارد.",
    linksLabel: "جای دیگر",
    portraitPending: "تصویر در انتظار",
  },
  contact: {
    label: "تماس",
    headingLine1: "پروژه‌ای در ذهنتان هست؟",
    headingLine2: "بیایید بسازیمش.",
    body: "از چه چیزی صحبت می‌کنید؟ قدم بعدی را با هم مشخص کنیم.",
    cta: "شروع پروژه",
    email: "ایمیل",
    phone: "تلفن",
    linkedin: "لینکدین",
    github: "گیت‌هاب",
    availability: "آماده پروژه‌های منتخب",
  },
  footer: {
    rights: "تمام حقوق محفوظ است.",
  },
  common: {
    pending: "محتوا در انتظار تکمیل",
    placeholderNote:
      "محتوای موقت — مقادیر داخل کروشه در lib/projects.ts را جایگزین کنید.",
  },
  chapters: [
    { id: "intro", label: "شروع" },
    { id: "capability", label: "توانمندی" },
    { id: "proof", label: "کارها" },
    { id: "process", label: "فرآیند" },
    { id: "about", label: "درباره" },
    { id: "contact", label: "تماس" },
  ],
};
