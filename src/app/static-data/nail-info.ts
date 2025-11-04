export interface NailInfo {
  title: string;
  imagesNum: number;
}

export interface StructuedNailInfo extends NailInfo {
  like: boolean;
  id: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export interface TutorialVideo {
  id: string;
  title: string;
  description: string;
  url: string;
  tag?: string;
  author?: string;
  duration?: string;
  level?: string;
  summary?: string;
  materials?: string[];
  transcript?: string;
}

export const nailInfoList: NailInfo[] = [
  { title: "Alice in Wonderland", imagesNum: 5 },
  { title: "Armor", imagesNum: 3 },
  { title: "Autumn Florals", imagesNum: 5 },
  { title: "Autumn Patchwork", imagesNum: 3 },
  { title: "Beach And Oranges", imagesNum: 5 },
  { title: "Blue Chrome And Fuzzy", imagesNum: 3 },
  { title: "Blue Patchwork", imagesNum: 3 },
  { title: "Blue Snake Cyberpunk", imagesNum: 5 },
  { title: "Butterfly Wings", imagesNum: 3 },
  { title: "Gold Glass Florals", imagesNum: 5 },
  { title: "Green And Brown Nature", imagesNum: 5 },
  { title: "Holographic Pop Art", imagesNum: 3 },
  { title: "Jade", imagesNum: 3 },
  { title: "Jewel Tone Renaissance", imagesNum: 5 },
  { title: "Koi Pond", imagesNum: 5 },
  { title: "Pink And Green Florals", imagesNum: 5 },
  { title: "Pink Chrome And Fuzzy", imagesNum: 3 },
  { title: "Pink Miffy", imagesNum: 3 },
  { title: "Porcelain", imagesNum: 3 },
  { title: "Portuguese Tiles", imagesNum: 3 },
  { title: "Purple Celestial", imagesNum: 5 },
  { title: "Purple Opal", imagesNum: 3 },
  { title: "Rainbow Fruit Gradient", imagesNum: 3 },
  { title: "Rainbow Jelly Drops", imagesNum: 3 },
  { title: "Rainbow Stained Glass", imagesNum: 5 },
  { title: "Rainbow Tie Dye", imagesNum: 3 },
  { title: "Red Cyberpunk", imagesNum: 5 },
  { title: "Sky Gradient", imagesNum: 3 },
  { title: "Strawberry", imagesNum: 3 },
  { title: "Stripes And Lemons", imagesNum: 5 },
  { title: "Sweater Gradient", imagesNum: 3 },
  { title: "Tulip Stained Glass", imagesNum: 4 },
];

export const nailInfo = [...nailInfoList, ...nailInfoList, ...nailInfoList];

export const videoInfoList: TutorialVideo[] = [
  {
    id: "chrome-isolation-made-easy",
    title: "Chrome Isolation Made Easy",
    description:
      "Learn how to achieve the perfect chrome isolation effect with this step-by-step tutorial.",
    tag: "Chrome",
    author: "Sabrina Smith",
    level: "Intermediate",
    summary: `
This tutorial walks you through the process of creating clean, precise chrome isolation nail art.
You&rsquo;ll learn how to apply a flawless base layer, use chrome powders effectively, and seal your design for long-lasting shine.
Perfect for nail enthusiasts looking to upgrade their chrome techniques.`,
    materials: [
      "Base coat",
      "Chrome powder (silver or gold)",
      "Gel polish (any color)",
      "UV/LED lamp",
      "Lint-free wipes",
      "Top coat",
    ],
    transcript: `
Hey everyone! In today&rsquo;s video, we&rsquo;re diving into one of the trendiest styles of 2025 &mdash; chrome isolation nails.
First, start with a cured gel base coat, then apply your color of choice.
After curing, use a fine liner brush to create your isolated sections and gently rub chrome powder into each one.
Finish with a top coat and cure for 60 seconds &mdash; and you&rsquo;re done!`,
    url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-1.mp4",
  },
  {
    id: "intro-to-gel-nails-at-home",
    title: "Intro to Gel Nails at Home",
    description:
      "A comprehensive guide to getting started with gel nails in the comfort of your home.",
    tag: "Gel",
    author: "Emily Lee",
    level: "Beginner",
    summary: `
If you&#39;re new to gel nails, this beginner-friendly video covers everything from prep to cure.
We&rsquo;ll go over the basic tools, safety tips, and the best way to achieve a salon-quality finish from home.`,
    materials: [
      "Gel base coat",
      "Gel color polish",
      "UV/LED lamp",
      "Cuticle pusher",
      "Nail file and buffer",
      "Top coat",
    ],
    transcript: `
Welcome back! Today we&rsquo;re starting with a clean nail surface.
First, push back your cuticles and buff the surface lightly.
Apply a thin layer of base coat and cure it for 60 seconds.
Then, add your chosen gel color, cure again, and finish with a top coat.`,
    url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-2.mp4",
  },
  {
    id: "how-to-glass-nails",
    title: "How-to: Glass Nails",
    description:
      "Step-by-step instructions for creating stunning glass nails.",
    tag: "Glass",
    author: "Naomi Tan",
    level: "Advanced",
    summary: `
Glass nails are all about layering iridescent foils and translucent gels for a sparkling finish.
This tutorial will help you master the layering technique while maintaining a lightweight, natural look.`,
    materials: [
      "Transparent gel polish",
      "Iridescent nail foil",
      "UV/LED lamp",
      "Fine scissors",
      "Tweezers",
      "Top coat",
    ],
    transcript: `
Start by applying two coats of clear gel polish and curing each layer.
Next, cut your iridescent foil into small triangles and apply them randomly across the nail surface.
Seal everything with a top coat for that perfect glassy reflection.`,
    url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-3.mp4",
  },
  {
    id: "holiday-nail-designs",
    title: "Holiday Nail Designs",
    description:
      "Get inspired with these festive nail designs for the holiday season.",
    tag: "Holiday",
    author: "Grace Liu",
    level: "All Levels",
    summary: `
In this festive tutorial, you&rsquo;ll learn 3 easy yet stylish nail art designs perfect for the holiday season.
From candy cane stripes to glitter gradients, we&rsquo;ve got you covered.`,
    materials: [
      "Red and white gel polish",
      "Striping tape",
      "Fine brush",
      "Gold glitter polish",
      "Top coat",
    ],
    transcript: `
Apply a red base coat and cure it.
Use striping tape to create clean lines, then paint alternating white stripes.
Add a touch of gold glitter on one accent nail for a perfect holiday sparkle.`,
    url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-4.mp4",
  },
];

export const videoInfo = [...videoInfoList, ...videoInfoList, ...videoInfoList];