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

export const blogPostsList = [
  {
    id: "top-10-nail-art-trends-2024",
    title: "Top 10 Nail Art Trends for 2024",
    author: "Sabrina Smith",
    tag: "Trends",
    summary:
      "Discover the hottest nail art trends that will dominate 2024, from bold colors to intricate designs.",
    subtitle:
      "From chrome finishes to 3D details, explore the top nail trends taking over 2024.",
    imageUrl:
      "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Alice+in+Wonderland/5.jpg",
    content: `
This year&rsquo;s trends balance bold creativity with simple, at-home-friendly methods that anyone can try. We&rsquo;ll highlight both beginner-friendly styles and advanced designs for those ready to level up their nail game.

Nail art in 2025 is all about blending creativity with accessibility, giving everyone the chance to try bold new looks from the comfort of home. Whether you&rsquo;re a seasoned enthusiast or just starting out, this year&rsquo;s trends are designed to make nail art fun, achievable, and highly personal. From futuristic metallics to playful details, there&rsquo;s something for every style and skill level.

One of the biggest standouts this year is the rise of chrome and holographic finishes. Sleek metallic sheens in silver, gold, and iridescent shades bring a futuristic edge to nails, perfect for making a statement without requiring advanced techniques. Alongside chrome, jelly nails&mdash;transparent, candy-colored layers&mdash;are making a comeback, offering a playful and youthful vibe that&rsquo;s easy to recreate at home.

Another exciting direction is the embrace of 3D textures and accents. Think raised gems, sculpted designs, and layered decals that turn nails into mini works of art. While some styles lean dramatic for special occasions, simplified versions with subtle beads or minimalist accents allow everyday wearers to get creative without going over top.

Many enthusiasts are shifting toward breathable polishes, eco-friendly gels, and nail-strengthening bases to keep their designs both beautiful and healthy.

Finally, sustainability and nail health are also trending in 2025. Many enthusiasts are shifting toward breathable polishes, eco-friendly gels, and nail-strengthening bases to keep their designs both beautiful and healthy. This combination of artistry and care highlights a growing movement toward nail routines that are not just about looks but also long-term wellness. With so many fresh techniques, 2025 is shaping up to be a year where nail art truly meets innovation and self-expression.
    `,
  },
  {
    id: "how-to-care-for-your-nails-between-manicures",
    title: "How to Care for Your Nails Between Manicures",
    author: "Lily Johnson",
    tag: "Care",
    summary:
      "Learn essential tips and tricks to keep your nails healthy and strong between salon visits.",
    subtitle:
      "Simple at-home habits that keep your nails strong, hydrated, and beautiful between appointments.",
    imageUrl:
      "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Armor/3.jpg",
    content: `
Healthy nails start with consistent care&mdash;even between manicures. It&rsquo;s easy to overlook maintenance when your polish still looks fresh, but regular attention ensures long-lasting nail strength.

Moisturize your cuticles daily with nourishing oils like jojoba or vitamin E. This keeps them soft and prevents painful hangnails. Avoid using your nails as tools, as this weakens the edges and causes splitting.

When filing, move the file in one direction instead of a back-and-forth motion to reduce breakage. Keep your nails at a manageable length that fits your lifestyle.

If you use gel or acrylic nails, give your nails a break between applications to let them breathe. During that period, apply a strengthening base coat for extra protection.

A little daily care goes a long way in keeping your nails salon-ready all the time.
    `,
  },
  {
    id: "ultimate-guide-to-gel-nails",
    title: "The Ultimate Guide to Gel Nails",
    author: "Emily Carter",
    tag: "Guide",
    summary:
      "Everything you need to know about gel nails, from application to removal.",
    subtitle:
      "A complete guide to gel nails&mdash;how to apply, care for, and safely remove them.",
    imageUrl:
      "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Autumn+Florals/5.jpg",
    content: `
Gel nails have become a staple for their glossy finish and long-lasting wear. Here&rsquo;s what you should know before your next manicure.

**Application:** Start with clean, buffed nails. Apply a base coat, then thin layers of gel polish, curing each layer under a UV or LED lamp. Finish with a top coat to seal in shine.

**Maintenance:** Keep your nails moisturized and avoid peeling or picking at the gel, as this can damage the nail bed.

**Removal:** Soak a cotton pad in acetone, place it on the nail, and wrap it with foil for 10&ndash;15 minutes. Gently push off the softened gel with a wooden stick&mdash;never scrape or peel it off.

Gel nails offer the perfect balance of beauty and durability, making them ideal for busy weeks or special occasions.
    `,
  },
  {
    id: "diy-nail-art-simple-designs-you-can-do-at-home",
    title: "DIY Nail Art: Simple Designs You Can Do at Home",
    author: "Mia Kim",
    tag: "DIY",
    summary:
      "Step-by-step tutorials for easy and stylish nail art designs you can create yourself.",
    subtitle:
      "No salon? No problem! Fun and simple nail art designs you can master at home.",
    imageUrl:
      "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Beach+And+Oranges/5.jpg",
    content: `
Creating beautiful nails at home can be both relaxing and rewarding. Start with a smooth base coat, then experiment with tools like dotting pens, thin brushes, and tape for clean lines.

Try these quick designs:
- **Polka dots:** Use a bobby pin to create tiny dots in contrasting colors.
- **Diagonal stripes:** Use tape to section off parts of the nail before painting.
- **French twist:** Replace the classic white tip with metallic or pastel colors.

Finish with a glossy or matte top coat depending on your style. With practice, you&rsquo;ll find that DIY nail art is a great way to express your creativity&mdash;and save a little money.
    `,
  },
  {
    id: "interview-with-a-nail-artist-behind-the-scenes",
    title: "Interview with a Nail Artist: Behind the Scenes",
    author: "Olivia Brown",
    tag: "New",
    summary:
      "Get an insider&#39;s look into the world of professional nail artistry with this exclusive interview.",
    subtitle:
      "Professional nail artist Emma Lee shares her creative process, challenges, and favorite designs.",
    imageUrl:
      "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Autumn+Patchwork/3.jpg",
    content: `
We sat down with professional nail artist **Emma Lee** to learn about the creativity and skill behind every manicure masterpiece.

&gt; &ldquo;Nail art is storytelling,&rdquo; Emma says. &ldquo;Each design reflects someone&rsquo;s personality or mood&mdash;it&rsquo;s wearable art.&rdquo;

Emma&rsquo;s favorite trend? Minimalist chrome. &ldquo;It&rsquo;s simple yet modern, and it complements any look.&rdquo;

She also shares that client communication is key: &ldquo;Understanding what people want&mdash;and sometimes helping them find it&mdash;is the most rewarding part.&rdquo;

From inspiration to execution, Emma reminds us that nail art is not just beauty&mdash;it&rsquo;s craft and self-expression.
    `,
  },
  {
    id: "nail-art-for-special-occasions",
    title: "Nail Art for Special Occasions",
    author: "Hannah Wilson",
    tag: "Inspiration",
    summary:
      "Ideas and inspiration for stunning nail art designs perfect for weddings, parties, and more.",
    subtitle:
      "Elegant nail designs that elevate every celebration, from weddings to holidays.",
    imageUrl:
      "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Beach+And+Oranges/5.jpg",
    content: `
For big moments, every detail matters&mdash;including your nails.

- **Weddings:** Go classic with soft pinks, pearls, or a delicate ombr&eacute;. Add subtle rhinestones for sparkle.  
- **Parties:** Metallic finishes and glitter accents bring instant glam.  
- **Festive seasons:** Try deep reds, emerald greens, or icy blues for a holiday feel.

Use a top coat for shine and durability, and remember: the best design is one that makes you feel confident and radiant.
    `,
  },
  {
    id: "the-history-of-nail-art",
    title: "The History of Nail Art",
    author: "Isabella Nguyen",
    tag: "New",
    summary:
      "Explore the fascinating history of nail art and how it has evolved over the centuries.",
    subtitle:
      "From ancient China to modern salons&mdash;discover how nail art became a global form of expression.",
    imageUrl:
      "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Blue+Chrome+And+Fuzzy/3.jpg",
    content: `
Nail art has a long and colorful history that spans cultures and centuries.

**Ancient beginnings:** In ancient China, around 3000 BCE, people tinted their nails with a mixture of beeswax, egg whites, and dyes. Colors symbolized social class&mdash;gold and silver for royalty.

**Egypt and Rome:** Cleopatra was known for her red nails made from henna. In Rome, nail grooming became a sign of wealth and sophistication.

**Modern evolution:** The 20th century brought polish bottles, salons, and creativity. From the 1930s&rsquo; glossy reds to today&rsquo;s holographic gels, nail art continues to evolve as both beauty and art.

Every coat tells a story&mdash;one that reflects individuality and culture alike.
    `,
  },
];

export const blogPosts = [...blogPostsList, ...blogPostsList, ...blogPostsList];