const TRANSFER_NOTICS_MAP = [
  {
    iconName: "truck-outline",
    title: "ارسال رایگان",
    desc: "خریدهای بالای 1 میلیون تومان",
    size: 30,
  },
  {
    iconName: "box-outline",
    title: "ارسال با پست و تیپاکس",
    desc: "به سراسر کشور",
    size: 30,
  },
  {
    iconName: "cigarret-outline",
    title: "تنوع بالای محصولات",
    desc: "لوازم مورد نیاز روزمره",
    size: 30,
  },
  {
    iconName: "arrowback-outline",
    title: "عودت کالا بدون شرط",
    desc: "بدون بازشدن وکیوم اولیه",
    size: 30,
  },
  {
    iconName: "verify-outline",
    title: "ضمانت کالاها طبق توضیحات ذکر شده برای هر محصول",
    desc: "ضمانت بازگشت وجه",
    size: 50,
  },
];

const FAST_ACCESSE_FOOTER = [
  { title: "قوانین و مقررات باشگاه مشتریان", href: "/" },
  { title: "قوانین و مقررات سایت", href: "/" },
  { title: "راهنمای خرید", href: "/" },
  { title: "سوالات متداول", href: "/" },
  { title: "پیگیری مرسوله پستی", href: "/" },
];

const CATEGORY_FOOTER = [
  { title: "فندک‌های خاص", href: "/" },
  { title: "عود", href: "/" },
  { title: "پایه عود", href: "/" },
  { title: "اکسسوری", href: "/" },
  { title: "زیرسیگاری", href: "/" },
  { title: "عود آبشاری", href: "/" },
  { title: "جاکلیدی و جاسوییچی", href: "/" },
];

const POPULAR_BRANDS_FOOTER = [
  { name: "Winston", href: "/" },
  { name: "Marlbro", href: "/" },
  { name: "Kent", href: "/" },
  { name: "Kavalo", href: "/" },
  { name: "Madox", href: "/" },
];

const SLIDER_BREAK_POINT = {
  0: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 2,
  },
  640: {
    slidesPerView: 2,
  },
  990: {
    slidesPerView: 3,
  },
};

export {
  TRANSFER_NOTICS_MAP,
  FAST_ACCESSE_FOOTER,
  CATEGORY_FOOTER,
  POPULAR_BRANDS_FOOTER,
  SLIDER_BREAK_POINT,
};
