// Dubai Tronics - Static data for the fully static site

// This file mirrors the structure of the original TypeScript data,
// but in plain JavaScript so it can be loaded directly in the browser.

window.DUBAI_TRONICS_DATA = (function () {
  const placeholderImages = [
    {
      id: "hero-1",
      description: "30% off on Laptops banner",
      imageUrl:
        "https://images.unsplash.com/photo-1713470812508-c276021f1b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsYXB0b3AlMjBzYWxlfGVufDB8fHx8MTc3MTg3MTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "laptop sale",
    },
    {
      id: "hero-2",
      description: "New earbuds collection banner",
      imageUrl:
        "https://images.unsplash.com/photo-1760410780969-07be31532d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxlYXJidWRzJTIwYXVkaW98ZW58MHx8fHwxNzcxODcxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "earbuds audio",
    },
    {
      id: "hero-3",
      description: "Buy 2 get 1 free offer banner",
      imageUrl:
        "https://images.unsplash.com/photo-1765805911816-348440534c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx0ZWNoJTIwb2ZmZXJ8ZW58MHx8fHwxNzcxODcxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "tech offer",
    },
    {
      id: "cat-mobiles",
      description: "Mobile Phones category image",
      imageUrl:
        "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzbWFydHBob25lfGVufDB8fHx8MTc3MTgxOTM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "smartphone",
    },
    {
      id: "cat-powerbanks",
      description: "Power Banks category image",
      imageUrl:
        "https://images.unsplash.com/photo-1600577231598-31ea4cb50da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwb3dlciUyMGJhbmt8ZW58MHx8fHwxNzcxODcxMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "power bank",
    },
    {
      id: "cat-laptops",
      description: "Gaming Laptops category image",
      imageUrl:
        "https://images.unsplash.com/photo-1630794180018-433d915c34ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxnYW1pbmclMjBsYXB0b3B8ZW58MHx8fHwxNzcxODQxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "gaming laptop",
    },
    {
      id: "cat-headphones",
      description: "Headphones category image",
      imageUrl:
        "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxoZWFkcGhvbmVzfGVufDB8fHx8MTc3MTg2NDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "headphones",
    },
    {
      id: "cat-combo",
      description: "Combo Offers category image",
      imageUrl:
        "https://images.unsplash.com/photo-1761507321319-2d59343016f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0ZWNoJTIwYnVuZGxlfGVufDB8fHx8MTc3MTg3MTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "tech bundle",
    },
    {
      id: "prod-iphone",
      description: "iPhone 17 product image",
      imageUrl:
        "https://images.unsplash.com/photo-1612442058361-178007e5e498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c21hcnRwaG9uZXxlbnwwfHx8fDE3NzE4MTkzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "smartphone",
    },
    {
      id: "prod-galaxy",
      description: "Samsung Galaxy S25 product image",
      imageUrl:
        "https://images.unsplash.com/photo-1741061963486-a56144a73791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzbWFydHBob25lJTIwbW9iaWxlfGVufDB8fHx8MTc3MTg1MDEyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "smartphone mobile",
    },
    {
      id: "prod-pixel",
      description: "Google Pixel 9 product image",
      imageUrl:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwaG9uZXxlbnwwfHx8fDE3NzE4NzExNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "phone",
    },
    {
      id: "prod-macbook",
      description: "MacBook Pro 16-inch product image",
      imageUrl:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxsYXB0b3B8ZW58MHx8fHwxNzcxODY3Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "laptop",
    },
    {
      id: "prod-dell",
      description: "Dell XPS 15 product image",
      imageUrl:
        "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwwfHx8fDE3NzE4NjExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "laptop computer",
    },
    {
      id: "prod-sony-wh",
      description: "Sony WH-1000XM6 Headphones product image",
      imageUrl:
        "https://images.unsplash.com/photo-1634717037148-4dc76c09a328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MHx8fHwxNzcxNzg2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "headphones audio",
    },
    {
      id: "prod-airpods",
      description: "Apple AirPods Pro 3 product image",
      imageUrl:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxlYXJidWRzfGVufDB8fHx8MTc3MTg3MTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "earbuds",
    },
    {
      id: "prod-powerbank",
      description: "Anker PowerCore 20000mAh product image",
      imageUrl:
        "https://images.unsplash.com/photo-1566554738544-d962991c3fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwb3dlciUyMGJhbmt8ZW58MHx8fHwxNzcxODcxMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "power bank",
    },
    {
      id: "deal-drone",
      description: "DJI Mavic Air 3 drone deal image",
      imageUrl:
        "https://images.unsplash.com/photo-1487219116710-23ffcb172b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZHJvbmV8ZW58MHx8fHwxNzcxODcxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "drone",
    },
    {
      id: "deal-watch",
      description: "Smartwatch Series 10 deal image",
      imageUrl:
        "https://images.unsplash.com/photo-1617625802912-cde586faf331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzbWFydHdhdGNofGVufDB8fHx8MTc3MTg1MDYwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "smartwatch",
    },
    {
      id: "deal-speaker",
      description: "Bluetooth Speaker deal image",
      imageUrl:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzcGVha2VyfGVufDB8fHx8MTc3MTg2NDc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "speaker",
    },
    {
      id: "deal-tablet",
      description: "Galaxy Tab S10 deal image",
      imageUrl:
        "https://images.unsplash.com/photo-1527698266440-12104e498b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0YWJsZXR8ZW58MHx8fHwxNzcxODY0Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "tablet",
    },
    {
      id: "avatar-1",
      description: "User avatar 1",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwZXJzb24lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NzE4NDc3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "person portrait",
    },
    {
      id: "avatar-2",
      description: "User avatar 2",
      imageUrl:
        "https://images.unsplash.com/photo-1521146764736-56c929d59c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc3MTg0ODAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "person face",
    },
    {
      id: "avatar-3",
      description: "User avatar 3",
      imageUrl:
        "https://images.unsplash.com/photo-1711645169736-53327e726205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzcxODIxNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "woman smiling",
    },
    {
      id: "prod-rog",
      description: "ASUS ROG Zephyrus G16 product image",
      imageUrl:
        "https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxnYW1pbmclMjBsYXB0b3B8ZW58MHx8fHwxNzcxODQxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "gaming laptop",
    },
    {
      id: "contact-person",
      description: "Contact person photo",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzc0ODUxNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "professional man",
    },
    {
  id: "avatar-2",
  description: "sarvesh profile photo",
  imageUrl: "assets/images/sarvesh.jpg",
  imageHint: "person portrait",
},
  ];

  const imageMap = {};
  for (const img of placeholderImages) {
    imageMap[img.id] = img;
  }

  function getImageUrl(id) {
    return imageMap[id] ? imageMap[id].imageUrl : "";
  }

  function getImageHint(id) {
    return imageMap[id] ? imageMap[id].imageHint : "";
  }

  const products = [
    {
      id: "iphone-17",
      name: "iPhone 17",
      description:
        "The latest iPhone with a stunning new camera system, A18 Bionic chip, and all-day battery life.",
      price: 87499,
      rating: 4.5,
      reviewCount: 125,
      category: "Mobile Phones",
      imageId: "prod-iphone",
      images: [{ id: "prod-iphone", hint: getImageHint("prod-iphone") }],
      specs: [
        { name: "Display", value: "6.7-inch Super Retina XDR" },
        { name: "Chip", value: "A18 Bionic" },
        { name: "Camera", value: "Pro 48MP camera system" },
      ],
    },
    {
      id: "galaxy-s25",
      name: "Galaxy S25",
      description:
        "Experience the future with Galaxy AI, a pro-grade camera, and our most powerful processor yet.",
      price: 79999,
      rating: 4.6,
      reviewCount: 98,
      category: "Mobile Phones",
      imageId: "prod-galaxy",
      images: [{ id: "prod-galaxy", hint: getImageHint("prod-galaxy") }],
      specs: [
        { name: "Display", value: "6.8-inch Dynamic AMOLED 2X" },
        { name: "Processor", value: "Snapdragon 9 Gen 4" },
        { name: "Camera", value: "200MP Wide-angle Camera" },
      ],
    },
    {
      id: "pixel-9",
      name: "Google Pixel 9",
      description:
        "The AI-powered phone from Google. Unmatched camera quality and helpful features for your day.",
      price: 64999,
      rating: 4.8,
      reviewCount: 150,
      category: "Mobile Phones",
      imageId: "prod-pixel",
      images: [{ id: "prod-pixel", hint: getImageHint("prod-pixel") }],
      specs: [
        { name: "Display", value: "6.3-inch Actua display" },
        { name: "Chip", value: "Google Tensor G4" },
        { name: "Camera", value: "Advanced 50MP dual camera system" },
      ],
    },
    {
      id: "macbook-pro-16",
      name: 'MacBook Pro 16"',
      description:
        "The most powerful MacBook Pro ever. Supercharged by the M4 Pro chip for pro-level workflows.",
      price: 249900,
      rating: 4.9,
      reviewCount: 210,
      category: "Gaming Laptops",
      imageId: "prod-macbook",
      images: [{ id: "prod-macbook", hint: getImageHint("prod-macbook") }],
      specs: [
        { name: "Display", value: "16.2-inch Liquid Retina XDR" },
        { name: "Chip", value: "Apple M4 Pro" },
        { name: "Memory", value: "Up to 96GB unified memory" },
      ],
    },
    {
      id: "dell-xps-15",
      name: "Dell XPS 15",
      description:
        "Stunning display, immersive sound, and powerful performance in a sleek, premium design.",
      price: 179990,
      rating: 4.4,
      reviewCount: 85,
      category: "Gaming Laptops",
      imageId: "prod-dell",
      images: [{ id: "prod-dell", hint: getImageHint("prod-dell") }],
      specs: [
        { name: "Display", value: "15.6-inch OLED 3.5K" },
        { name: "Processor", value: "Intel Core Ultra 9" },
        { name: "Graphics", value: "NVIDIA GeForce RTX 4070" },
      ],
    },
    {
      id: "asus-rog-zephyrus-g16",
      name: "ASUS ROG Zephyrus G16",
      description:
        "Ultra-slim gaming powerhouse with a stunning Nebula Display and unmatched performance.",
      price: 199990,
      originalPrice: 229990,
      rating: 4.7,
      reviewCount: 112,
      category: "Gaming Laptops",
      imageId: "prod-rog",
      images: [{ id: "prod-rog", hint: getImageHint("prod-rog") }],
      specs: [
        { name: "Display", value: "16-inch ROG Nebula Display OLED" },
        { name: "Processor", value: "Intel Core Ultra 9 Processor 185H" },
        { name: "Graphics", value: "NVIDIA GeForce RTX 4090 Laptop GPU" },
      ],
    },
    {
      id: "sony-wh-1000xm6",
      name: "Sony WH-1000XM6",
      description:
        "Industry-leading noise canceling headphones with exceptional sound quality and a comfortable design.",
      price: 34990,
      rating: 4.9,
      reviewCount: 520,
      category: "Headphones",
      imageId: "prod-sony-wh",
      images: [{ id: "prod-sony-wh", hint: getImageHint("prod-sony-wh") }],
      specs: [
        { name: "Type", value: "Over-ear, Closed-back" },
        { name: "Noise Canceling", value: "HD Noise Canceling Processor QN2" },
        { name: "Battery Life", value: "Up to 30 hours" },
      ],
    },
    {
      id: "airpods-pro-3",
      name: "Apple AirPods Pro 3",
      description:
        "Richer audio quality, next-level Active Noise Cancellation, and adaptive transparency.",
      price: 26900,
      rating: 4.7,
      reviewCount: 830,
      category: "Headphones",
      imageId: "prod-airpods",
      images: [{ id: "prod-airpods", hint: getImageHint("prod-airpods") }],
      specs: [
        { name: "Type", value: "In-ear" },
        { name: "Chip", value: "H3 Chip" },
        { name: "Connectivity", value: "Bluetooth 5.3" },
      ],
    },
    {
      id: "anker-powercore-20000",
      name: "Anker PowerCore 20000mAh",
      description:
        "Ultra-high capacity portable charger with fast-charging technology. Never run out of power again.",
      price: 3999,
      rating: 4.8,
      reviewCount: 1500,
      category: "Power Banks",
      imageId: "prod-powerbank",
      images: [{ id: "prod-powerbank", hint: getImageHint("prod-powerbank") }],
      specs: [
        { name: "Capacity", value: "20,000mAh" },
        { name: "Output", value: "PowerIQ and VoltageBoost" },
        { name: "Ports", value: "2 USB-A" },
      ],
    },
    {
      id: "deal-drone",
      name: "DJI Mavic Air 3",
      description:
        "Capture breathtaking aerial footage with this compact and powerful drone. Perfect for creators.",
      price: 98999,
      originalPrice: 109999,
      rating: 4.8,
      reviewCount: 75,
      category: "Deals",
      imageId: "deal-drone",
      images: [{ id: "deal-drone", hint: getImageHint("deal-drone") }],
      specs: [
        { name: "Camera", value: "4/3 CMOS Wide-Angle" },
        { name: "Flight Time", value: "46 minutes" },
        { name: "Video", value: "5.1K/50fps" },
      ],
    },
    {
      id: "deal-watch",
      name: "Smartwatch Series 10",
      description:
        "The ultimate device for a healthy life. Track your fitness, stay connected, and monitor your health.",
      price: 45900,
      originalPrice: 49900,
      rating: 4.7,
      reviewCount: 320,
      category: "Deals",
      imageId: "deal-watch",
      images: [{ id: "deal-watch", hint: getImageHint("deal-watch") }],
      specs: [
        { name: "Display", value: "Always-On Retina display" },
        { name: "Sensors", value: "Blood Oxygen, ECG" },
        { name: "Water Resistance", value: "50 meters" },
      ],
    },
    {
      id: "deal-speaker",
      name: "Bose SoundLink Revolve+",
      description:
        "Engineered to deliver deep, loud and immersive sound in every direction. True 360° sound.",
      price: 24500,
      originalPrice: 28900,
      rating: 4.8,
      reviewCount: 410,
      category: "Deals",
      imageId: "deal-speaker",
      images: [{ id: "deal-speaker", hint: getImageHint("deal-speaker") }],
      specs: [
        { name: "Sound", value: "360° Sound" },
        { name: "Battery Life", value: "Up to 17 hours" },
        { name: "Connectivity", value: "Bluetooth" },
      ],
    },
    {
      id: "deal-tablet",
      name: "Galaxy Tab S10",
      description:
        "A tablet that feels like a PC. Get a PC-like experience with the snap of a keyboard.",
      price: 75999,
      originalPrice: 85999,
      rating: 4.6,
      reviewCount: 180,
      category: "Deals",
      imageId: "deal-tablet",
      images: [{ id: "deal-tablet", hint: getImageHint("deal-tablet") }],
      specs: [
        { name: "Display", value: "12.4-inch Super AMOLED" },
        { name: "Processor", value: "Snapdragon 9 Gen 4" },
        { name: "Special Feature", value: "S Pen included" },
      ],
    },
  ];

  const featuredProducts = products.slice(0, 8);
  const deals = products.filter((p) => !!p.originalPrice).slice(0, 4);

  const categories = [
    { id: "cat-mobiles", name: "Mobile Phones", imageId: "cat-mobiles", href: "#" },
    { id: "cat-powerbanks", name: "Power Banks", imageId: "cat-powerbanks", href: "#" },
    { id: "cat-laptops", name: "Gaming Laptops", imageId: "cat-laptops", href: "#" },
    { id: "cat-headphones", name: "Headphones", imageId: "cat-headphones", href: "#" },
    { id: "cat-combo", name: "Combo Offers", imageId: "cat-combo", href: "#" },
  ];

  const reviews = [
    {
      id: "review-1",
      userName: "Ali Khan",
      userImageId: "avatar-1",
      rating: 5,
      feedback:
        "Amazing service and incredibly fast delivery! The iPhone 17 is a masterpiece. Dubai Tronics is my go-to for gadgets.",
    },
    {
      id: "avatar-2",
      userName: "Sarvesh",
      userImageId: "avatar-sarvesh",
      rating: 5,
      feedback:
        "Amazing service and incredibly fast delivery! The iPhone 17 is a masterpiece. Dubai Tronics is my go-to for gadgets.",
    },
    {
      id: "review-3",
      userName: "John Smith",
      userImageId: "avatar-3",
      rating: 5,
      feedback:
        "I am so impressed with the quality of the Sony headphones. The noise cancellation is out of this world. Highly recommend!",
    },
  ];

  const heroBanners = [
    {
      id: "banner-1",
      title: "Flat 30% Off on Laptops",
      subtitle: "Upgrade your work and play.",
      imageId: "hero-1",
      href: "#",
    },
    {
      id: "banner-2",
      title: "New Earbuds Collection",
      subtitle: "Immerse yourself in sound.",
      imageId: "hero-2",
      href: "#",
    },
    {
      id: "banner-3",
      title: "Buy 2 Get 1 Free",
      subtitle: "On select accessories. Limited time offer!",
      imageId: "hero-3",
      href: "#",
    },
  ];

  return {
    placeholderImages,
    products,
    featuredProducts,
    deals,
    categories,
    reviews,
    heroBanners,
    getImageUrl,
    getImageHint,
  };
})();

