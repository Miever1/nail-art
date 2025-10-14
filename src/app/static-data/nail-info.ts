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

export const nailInfo: NailInfo[] = [
    {
        title: "Alice in Wonderland",
        imagesNum: 5,
    },
    {
        title: "Armor",
        imagesNum: 3
    },
    {
        title: "Autumn Florals",
        imagesNum: 5
    },
    {
        title: "Autumn Patchwork",
        imagesNum: 3
    },
    {
        title: "Beach And Oranges",
        imagesNum: 5
    },
    {
        title: "Blue Chrome And Fuzzy",
        imagesNum: 3
    },
    {
        title: "Blue Patchwork",
        imagesNum: 3
    },
    {
        title: "Blue Snake Cyberpunk",
        imagesNum: 5
    },
    {
        title: "Butterfly Wings",
        imagesNum: 3
    },
    {
        title: "Gold Glass Florals",
        imagesNum: 5
    },
    {
        title: "Green And Brown Nature",
        imagesNum: 5
    },
    {
        title: "Holographic Pop Art",
        imagesNum: 3
    },
    {
        title: "Jade",
        imagesNum: 3
    },
    {
        title: "Jewel Tone Renaissance",
        imagesNum: 5
    },
    {
        title: "Koi Pond",
        imagesNum: 5
    },
    {
        title: "Pink And Green Florals",
        imagesNum: 5
    },
    {
        title: "Pink Chrome And Fuzzy",
        imagesNum: 3
    },
    {
        title: "Pink Miffy",
        imagesNum: 3
    },              
    {
        title: "Porcelain",
        imagesNum: 3
    },
    {
        title: "Portuguese Tiles",
        imagesNum: 3
    },
    {
        title: "Purple Celestial",
        imagesNum: 5
    },
    {
        title: "Purple Opal",
        imagesNum: 3
    },
    {
        title: "Rainbow Fruit Gradient",
        imagesNum: 3
    },
    {
        title: "Rainbow Jelly Drops",
        imagesNum: 3
    },
    {
        title: "Rainbow Stained Glass",
        imagesNum: 5
    },
    {
        title: "Rainbow Tie Dye",
        imagesNum: 3
    },
    {
        title: "Red Cyberpunk",
        imagesNum: 5
    },
    {
        title: "Sky Gradient",
        imagesNum: 3
    },
    {
        title: "Strawberry",
        imagesNum: 3
    },
    {
        title: "Stripes And Lemons",
        imagesNum: 5
    },
    {
        title: "Sweater Gradient",
        imagesNum: 3
    },
    {
        title: "Tulip Stained Glass",
        imagesNum: 4
    }
];

export const videoInfo = [
    {
        title: "Chrome Isolation Made Easy",
        description: "Learn how to achieve the perfect chrome isolation effect with this step-by-step tutorial.",
        url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-1.mp4"
    },
    {
        title: "Intro to Gel Nails at Home",
        description: "A comprehensive guide to getting started with gel nails in the comfort of your home.",
        url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-2.mp4"
    },
    {
        title: "How-to: Glass Nails",
        description: "Step-by-step instructions for creating stunning glass nails.",
        url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-3.mp4"
    },
    {
        title: "Holiday Nail Designs",
        description: "Get inspired with these festive nail designs for the holiday season.",
        url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-4.mp4"
    },
    {
        title: "Abstract Art Nails",
        description: "Explore the world of abstract art nails with this creative tutorial.",
        url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-5.mp4"
    },
    {
        title: "Metallic Nail Art Techniques",
        description: "Learn the latest techniques in metallic nail art with this informative video.",
        url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-6.mp4"
    },
    {
        title: "Animal Print Nails",
        description: "Get creative with animal print designs in this fun tutorial.",
        url: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/videos/video-7.mp4"
    }
];

export const blogPosts = [
    {
        title: "Top 10 Nail Art Trends for 2024",
        tag: "Trends",
        summary: "Discover the hottest nail art trends that will dominate 2024, from bold colors to intricate designs.",
        imageUrl: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Alice+in+Wonderland/5.jpg",
    },
    {
        title: "How to Care for Your Nails Between Manicures",
        tag: "Care",
        summary: "Learn essential tips and tricks to keep your nails healthy and strong between salon visits.",
        imageUrl: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Armor/3.jpg",
    },
    {
        title: "The Ultimate Guide to Gel Nails",
        tag: "Guide",
        summary: "Everything you need to know about gel nails, from application to removal.",
        imageUrl: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Autumn+Florals/5.jpg",
    },
    {
        title: "DIY Nail Art: Simple Designs You Can Do at Home",
        tag: "DIY",
        summary: "Step-by-step tutorials for easy and stylish nail art designs you can create yourself.",
        imageUrl: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Beach+And+Oranges/5.jpg",
    },
    {
        title: "Interview with a Nail Artist: Behind the Scenes",
        tag: "New",
        summary: "Get an insider's look into the world of professional nail artistry with this exclusive interview.",
        imageUrl: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Autumn+Patchwork/3.jpg",
    },
    {
        title: "Nail Art for Special Occasions",
        tag: "Inspiration",
        summary: "Ideas and inspiration for stunning nail art designs perfect for weddings, parties, and more.",
        imageUrl: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Beach+And+Oranges/5.jpg",
    },
    {
        title: "The History of Nail Art",
        tag: "New",
        summary: "Explore the fascinating history of nail art and how it has evolved over the centuries.",
        imageUrl: "https://miever.s3.ap-east-1.amazonaws.com/static/nail-art/types/Blue+Chrome+And+Fuzzy/3.jpg",
    }
];