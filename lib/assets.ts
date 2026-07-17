export type PpaImageAsset = {
  type: "image";
  src: string;
  alt: string;
  caption: string;
};

export type PpaVideoAsset = {
  type: "video";
  src: string;
  poster?: string;
  caption: string;
  alt: string;
};

export type PpaMediaAsset = PpaImageAsset | PpaVideoAsset;

export const assets = {
  wooliesColes: {
    type: "image" as const,
    src: "/assets/grok-23e2e4c1-691b-4024-8cfa-292ee59f2884.jpg",
    alt: "Family at Coles checkout reacting to grocery prices",
    caption: "Woolies & Coles jacking prices?",
  },
  bulkHacks: {
    type: "image" as const,
    src: "/assets/grok-6a6f7e1f-8d6b-4fdd-b106-da7593cb4301.jpg",
    alt: "Shopper holding a watermelon in a bulk warehouse aisle",
    caption: "Bulk shopping hacks",
  },
  aldiShopping: {
    type: "image" as const,
    src: "/assets/grok-9b1eb672-6017-4e89-8849-acf462b314d9.jpg",
    alt: "Shopper reaching for cereal in an ALDI aisle",
    caption: "Bulk shopping at ALDI",
  },
  shopLocal: {
    type: "image" as const,
    src: "/assets/grok-551ee6c2-4059-4ff8-a8c3-579160b6534e.jpg",
    alt: "Woman at a local produce market holding a shopping local sign",
    caption: "Local shopping power",
  },
  unitPrice: {
    type: "image" as const,
    src: "/assets/grok-7d2ee4d9-5932-493d-bd79-a8666a870b31.jpg",
    alt: "Phone showing Vegemite unit price comparison in a supermarket aisle",
    caption: "Check unit price per 100g",
  },
  ppaLogo: {
    type: "image" as const,
    src: "/assets/grok-ed3b816d-58f1-49ab-82f2-d9c3a2aae5ea.jpg",
    alt: "Punter Power Australia logo — grassroots, mates helping mates",
    caption: "PPA Logo concept",
  },
  heroVideo: {
    type: "video" as const,
    src: "/assets/grok-51fe0de5-6c00-4524-b6ef-dfbf5efe4ca2-720p.mp4",
    poster: "/assets/grok-23e2e4c1-691b-4024-8cfa-292ee59f2884.jpg",
    alt: "PPA campaign video",
    caption: "Cost of living — film the truth",
  },
  clipCheckout: {
    type: "video" as const,
    src: "/assets/grok-c5e4ef8d-7174-44ee-9ac6-9e4feae3594b-720p.mp4",
    poster: "/assets/grok-23e2e4c1-691b-4024-8cfa-292ee59f2884.jpg",
    alt: "Campaign clip about supermarket prices",
    caption: "Checkout reality check",
  },
  clipSurveillance: {
    type: "video" as const,
    src: "/assets/grok-video-b7f94e16-cdc6-4a69-aa12-f933a034b666.mp4",
    poster: "/assets/grok-ed3b816d-58f1-49ab-82f2-d9c3a2aae5ea.jpg",
    alt: "Campaign clip on systems watching everyday Aussies",
    caption: "They're watching. We're paying.",
  },
  clipResources: {
    type: "video" as const,
    src: "/assets/grok-video-d00cb6ae-ae82-42ac-8300-e21d859a50da.mp4",
    poster: "/assets/grok-ed3b816d-58f1-49ab-82f2-d9c3a2aae5ea.jpg",
    alt: "Campaign clip on resources and fair share",
    caption: "Resources leave. Bills stay.",
  },
  clipDuopoly: {
    type: "video" as const,
    src: "/assets/grok-video-c81a36f2-34c7-4621-abba-d3da4d690469.mp4",
    poster: "/assets/grok-23e2e4c1-691b-4024-8cfa-292ee59f2884.jpg",
    alt: "Campaign clip on supermarket duopoly",
    caption: "Duopoly dollars vs family budgets",
  },
  clipLocal: {
    type: "video" as const,
    src: "/assets/grok-video-b5f4686d-98d3-4df7-a73a-cbd02662494d.mp4",
    poster: "/assets/grok-551ee6c2-4059-4ff8-a8c3-579160b6534e.jpg",
    alt: "Campaign clip about shopping local",
    caption: "Local markets over mega aisles",
  },
  clipPower: {
    type: "video" as const,
    src: "/assets/grok-video-ddbc42f2-6964-4a36-8982-b4cd80ce5185.mp4",
    poster: "/assets/grok-ed3b816d-58f1-49ab-82f2-d9c3a2aae5ea.jpg",
    alt: "PPA power and solidarity campaign clip",
    caption: "Punter Power — mates helping mates",
  },
  clipMessage: {
    type: "video" as const,
    src: "/assets/grok-video-e025b77e-b769-4656-afa2-ca3a89bdf465.mp4",
    poster: "/assets/grok-7d2ee4d9-5932-493d-bd79-a8666a870b31.jpg",
    alt: "Campaign clip for spreading the message",
    caption: "Phone + truth = media",
  },
};

/** Curated Mass Media Power gallery: 6 images + 2 videos */
export const mediaGalleryItems: PpaMediaAsset[] = [
  assets.wooliesColes,
  assets.bulkHacks,
  assets.ppaLogo,
  assets.shopLocal,
  assets.aldiShopping,
  assets.unitPrice,
  assets.clipCheckout,
  assets.clipLocal,
];
