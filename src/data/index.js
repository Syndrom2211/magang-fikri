import catalogImage2 from "../assets/img/catalog/acoustic-vibe.jpg";
import catalogImage1 from "../assets/img/catalog/hiphop-beat.jpg";
import catalogImage3 from "../assets/img/catalog/edm-track.jpg";

import People1 from "../assets/img/portfolio/1D.png";
import People2 from "../assets/img/portfolio/WDW.png";
import People3 from "../assets/img/portfolio/BM.png";
import People4 from "../assets/img/portfolio/LM.png";
import "lucide-react";

export const NavLink = [
  {
    id: 1,
    path: "/home",
    name: "Home",
  },
  {
    id: 2,
    path: "/product",
    name: "Product",
  },
  {
    id: 3,
    path: "/support",
    name: "Support",
  },
  {
    id: 4,
    path: "/portfolio",
    name: "Portfolio",
  },
];

export const products = [
  {
    id: 1,
    image: catalogImage1,
    name: "Buat Musik melalui Lyric",
    description: "Ubahlah lirikmu menjadi lagu otomatis.",
    cta: "Pesan Sekarang",
    rating: "Telah dipesan sebanyak: ",
    price: "Rp 150.000",
    features: [
      "Unlimited Revisi",
      "File Format WAV & MP3",
      "Durasi max. 5 menit"
    ]
  },
  {
    id: 2,
    image: catalogImage2,
    name: "Buat Musik Instrumen",
    description: "Ciptakan melodi instrumental profesional.",
    cta: "Pesan Sekarang",
    rating: "Telah dipesan sebanyak: ",
    price: "Rp 200.000",
    features: [
      "Unlimited Revisi",
      "File Format WAV & MP3",
      "Durasi max. 5 menit"
    ]
  },
  {
    id: 3,
    image: catalogImage3,
    name: "Buat Sound Effect",
    description: "Hasilkan efek suara berkualitas tinggi.",
    cta: "Pesan Sekarang",
    rating: "Telah dipesan sebanyak: ",
    price: "Rp 100.000",
    features: [
      "Unlimited Revisi", 
      "File Format WAV & MP3",
      "Durasi max. 30 detik"
    ]
  },
];

export const dataSwiper = [
  {
    id: 1,
    video: "videos/1.mp4",
    image: People2,
    name: "Why Don't We",
    skill: "Who Am I",
    description:
      "Lagu ini menggambarkan pencarian jati diri dan refleksi tentang siapa kita sebenarnya.",
  },
  {
    id: 2,
    video: "videos/2.mp4",
    image: People1,
    name: "One Direction",
    skill: "Night Changes",
    description:
      "Lagu ini bercerita tentang kenangan indah dan perubahan yang datang seiring waktu.",
  },
  {
    id: 3,
    video: "videos/3.mp4",
    image: People2,
    name: "Why Don't We",
    skill: "Trust Fun Baby",
    description:
      "Lagu ini mengekspresikan rasa percaya dan kesenangan dalam hubungan.",
  },
  {
    id: 4,
    video: "videos/4.mp4",
    image: People1,
    name: "One Direction",
    skill: "You and I",
    description: "Lagu ini menggambarkan cinta yang kuat dan tak terpisahkan.",
  },
  {
    id: 5,
    video: "videos/5.mp4",
    image: People3,
    name: "Bruno Mars",
    skill: "Lazy Song",
    description:
      "Lagu ini merayakan momen santai dan menikmati hidup tanpa beban.",
  },
  {
    id: 6,
    video: "videos/6.mp4",
    image: People4,
    name: "Little Mix",
    skill: "Black Magic",
    description:
      "Lagu ini bercerita tentang daya tarik dan pesona yang tak tertahankan.",
  },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apa itu CMH dan bagaimana cara kerjanya?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Apakah saya perlu keahlian musik untuk menggunakan CMH?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Jenis musik apa saja yang bisa dibuat dengan CMH?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Bagaimana cara mengubah lirik menjadi lagu?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Apakah saya bisa memilih genre musik tertentu?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Berapa lama waktu yang dibutuhkan untuk membuat musik?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "Apakah musik yang dihasilkan bisa digunakan secara komersial?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
  {
    id: 8,
    eventKey: 7,
    title: "Bagaimana jika saya mengalami masalah saat membuat musik?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
  },
];

// Product Descriptions
export const productDescriptions = [
  {
    id: 1,
    page: "lyrics",
    title: "AI-Powered Music from Lyrics",
    description:
      "Transform your lyrics into a full-fledged song with our AI-powered music generator. Whether you're a songwriter or a poet, our tool will turn your words into a professional-quality track in minutes.",
  },
  {
    id: 2,
    page: "instrument",
    title: "AI-Powered Music from Instruments",
    description:
      "Create stunning instrumental music with our AI. Whether you play the guitar, piano, or any other instrument, our tool will enhance your melodies and turn them into a complete musical masterpiece.",
  },
  {
    id: 3,
    page: "sound",
    title: "AI-Powered Music from Sound Effects",
    description:
      "Generate unique music tracks using sound effects. Our AI can blend various sounds into a cohesive and professional composition, perfect for video games, movies, or experimental music.",
  },
];

// How It Works Steps
export const howItWorksSteps = [
  {
    id: 1,
    page: "lyrics",
    steps: [
      "Enter your lyrics into the input field.",
      "Select your preferred music genre and tempo.",
      "Let our AI analyze your lyrics and generate a melody.",
      "Download your song and share it with the world!",
    ],
  },
  {
    id: 2,
    page: "instrument",
    steps: [
      "Upload a recording of your instrument playing.",
      "Choose the mood and style for your track.",
      "Our AI will process the recording and create a full arrangement.",
      "Download the final track and enjoy your creation!",
    ],
  },
  {
    id: 3,
    page: "sound",
    steps: [
      "Upload your sound effects or choose from our library.",
      "Select the genre and structure for your track.",
      "Our AI will blend the sounds into a cohesive composition.",
      "Download your unique track and use it in your projects!",
    ],
  },
];

// Price Lists
export const priceLists = [
  {
    id: 1,
    page: "lyrics",
    plans: [
      {
        name: "Basic",
        price: "Rp 100.000",
        features: ["1 song per month", "Standard quality", "Limited genres"],
      },
      {
        name: "Pro",
        price: "Rp 200.000",
        features: ["5 songs per month", "High quality", "All genres"],
      },
      {
        name: "Premium",
        price: "Rp 300.000",
        features: ["Unlimited songs", "Studio quality", "All genres + custom requests"],
      },
    ],
  },
  {
    id: 2,
    page: "instrument",
    plans: [
      {
        name: "Basic",
        price: "Rp 150.000",
        features: ["1 track per month", "Standard quality", "Limited instruments"],
      },
      {
        name: "Pro",
        price: "Rp 250.000",
        features: ["5 tracks per month", "High quality", "All instruments"],
      },
      {
        name: "Premium",
        price: "Rp 350.000",
        features: ["Unlimited tracks", "Studio quality", "All instruments + custom requests"],
      },
    ],
  },
  {
    id: 3,
    page: "sound",
    plans: [
      {
        name: "Basic",
        price: "Rp 200.000",
        features: ["1 track per month", "Standard quality", "Limited sound effects"],
      },
      {
        name: "Pro",
        price: "Rp 300.000",
        features: ["5 tracks per month", "High quality", "All sound effects"],
      },
      {
        name: "Premium",
        price: "Rp 400.000",
        features: ["Unlimited tracks", "Studio quality", "All sound effects + custom requests"],
      },
    ],
  },
];