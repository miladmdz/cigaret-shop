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

const WARNING_BEFORE_BUY = [
  {
    id: 1,
    text: "10% سبد خرید به مبلغ نهایی اضافه خواهد شد. (مالیات ارزش افزوده)",
  },
  {
    id: 2,
    text: "زمان ارسال (تحویل به پست) بر اساس زمان انتخابی می باشد. یا اولین روز بعد ثبت سفارش(این زمان تحویل به شما نیست)",
  },
  {
    id: 3,
    text: "لطفا تا زمانی که از کاربرد محصول | رنگ | رایحه | مشخصات، اطلاعات کافی یا اطمینان ندارید، سفارش خود را ثبت نکنید. بعد از ارسال تحت هیچ شرایطی تعویض یا مرجوع نمی گردد.",
  },
  {
    id: 4,
    text: "لطفا در صورت بروز هر گونه مشکل، تیکت ارسال کنید. (سریع ترین راه ارتباطی)",
  },
  {
    id: 5,
    text: "انتخاب زمان ارسال: زمانی هست که بسته تحویل پست یا پیک (فقط شهر اردبیل) می گردد.",
  },
  {
    id: 6,
    text: "نام گیرنده نمی تواند پذیرش، درمانگاه، سوپر مارکت، هتل، ویلای موقت یا نگهبانی و ... باشد.",
  },
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
  WARNING_BEFORE_BUY,
};
