import catalogImage1 from "../assets/img/catalog/hiphop-beat.jpg";
import catalogImage2 from "../assets/img/catalog/acoustic-vibe.jpg";
import catalogImage3 from "../assets/img/catalog/edm-track.jpg";

import People1 from "../assets/img/portfolio/1D.png";
import People2 from "../assets/img/portfolio/WDW.png";
import People3 from "../assets/img/portfolio/BM.png";
import People4 from "../assets/img/portfolio/LM.png";

import productDesc1 from "../assets/img/products/music-lyrics.jpg";
import productDesc2 from "../assets/img/products/10982.jpg";
import productDesc3 from "../assets/img/products/sound-engineer-studio.jpg";

import howItWorks1 from "../assets/img/products/undraw_text-field_17if.png";
import howItWorks2 from "../assets/img/products/undraw_preferences_2bda.png";
import howItWorks3 from "../assets/img/products/undraw_file-analysis_dg81.png";
import howItWorks4 from "../assets/img/products/undraw_media-player_kxtm.png";

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
    currency: "Rp",
    price: 150000,
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
    currency: "Rp",
    price: 200000,
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
    currency: "Rp",
    price: 100000,
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
    title: "Buat Musik dari Lirik",
    description1: "Dengan CMH.AI, kamu hanya perlu mengunggah lirik untuk mendapatkan musik yang sesuai dengan tema dan mood yang kamu inginkan.",
    description2: "Tidak perlu repot belajar produksi musik atau mencari musisi. Nikmati berbagai pilihan genre dan aransemen yang disesuaikan dengan lirikmu, apakah untuk video, podcast, atau proyek pribadi.",
    description3: "Mulai dari Rp. 150.000, CMH.AI menawarkan solusi cepat dan mudah untuk menghasilkan musik berkualitas tinggi. Pilih genre yang diinginkan, unggah lirik, dan biarkan AI kami bekerja. Dalam waktu singkat, kamu akan memiliki musik yang sempurna untuk melengkapi karya kreatifmu.",
    imageUrl: productDesc1,
  },
  {
    id: 2,
    page: "instrument",
    title: "Buat Musik dari Instrumen",
    description1: "Dengan CMH.AI, kamu hanya perlu memilih instrumen yang diinginkan dan biarkan AI kami menciptakan musik berkualitas tinggi untukmu.",
    description2: "Tidak perlu keterampilan komposisi atau pengalaman dalam musik untuk membuat karya yang menakjubkan. Nikmati berbagai pilihan genre dan gaya musik yang bisa disesuaikan dengan kebutuhan kamu, apakah untuk video, iklan, atau proyek kreatif lainnya.",
    description3: "Mulai dari Rp. 200.000, Musik.AI menawarkan solusi cepat dan mudah untuk menghasilkan musik original tanpa batasan. Pilih instrumen, tentukan suasana hati, dan biarkan AI kami bekerja. Dalam waktu singkat, kamu akan memiliki lagu lengkap dengan instrumen yang siap digunakan.",
    imageUrl: productDesc2,
  },
  {
    id: 3,
    page: "sound",
    title: "Buat Musik dari Efek Suara",
    description1: "Dengan CMH.AI, kamu hanya perlu mengunggah efek suara untuk mendapatkan musik yang sesuai dengan suasana dan nuansa yang diinginkan.",
    description2: "Tidak perlu repot mengatur instrumen atau mencari komposer. Nikmati berbagai pilihan genre dan aransemen musik yang disesuaikan dengan efek suara yang kamu pilih, apakah untuk film, video, atau proyek kreatif lainnya.",
    description3: "Mulai dari Rp. 100.000, CMH.AI menawarkan solusi cepat dan mudah untuk menghasilkan musik berkualitas tinggi. Pilih paket yang sesuai, unggah efek suara, dan biarkan AI kami bekerja. Dalam waktu singkat, kamu akan memiliki musik yang sempurna untuk melengkapi karyamu.",
    imageUrl: productDesc3,
  },
];

// How It Works Steps
export const howItWorksSteps = [
  {
    id: 1,
    page: "lyrics",
    steps: [
      {
        text: "Masukkan lirik Anda ke dalam kolom input.",
        imageUrl: howItWorks1,
      },
      {
        text: "Pilih genre musik dan tempo yang Anda inginkan.",
        imageUrl: howItWorks2,
      },
      {
        text: "Biarkan AI kami menganalisis lirik Anda dan menghasilkan melodi.",
        imageUrl: howItWorks3,
      },
      {
        text: "Unduh lagu Anda dan bagikan dengan semua orang!",
        imageUrl: howItWorks4,
      },
    ],
  },
  {
    id: 2,
    page: "instrument",
    steps: [
      {
        text: "Unggah rekaman permainan instrumen Anda.",
        imageUrl: howItWorks1,
      },
      {
        text: "Pilih suasana hati dan gaya untuk lagu Anda.",
        imageUrl: howItWorks2,
      },
      {
        text: "AI kami akan memproses rekaman dan membuat aransemen lengkap.",
        imageUrl: howItWorks3,
      },
      {
        text: "Unduh lagu akhir dan nikmati kreasi Anda!",
        imageUrl: howItWorks4,
      },
    ],
  },
  {
    id: 3,
    page: "sound",
    steps: [
      {
        text: "Unggah efek suara Anda atau pilih dari perpustakaan kami.",
        imageUrl: howItWorks1,
      },
      {
        text: "Pilih genre dan struktur untuk lagu Anda.",
        imageUrl: howItWorks2,
      },
      {
        text: "AI kami akan memadukan suara menjadi komposisi yang kohesif.",
        imageUrl: howItWorks3,
      },
      {
        text: "Unduh lagu akhir dan nikmati kreasi Anda!",
        imageUrl: howItWorks4,
      },
    ],
  },
];

// Price Lists
export const priceLists = [
  {
    id: 1,
    page: "lyrics",
    plans: [
      // {
      //   name: "Basic",
      //   features: ["1 lagu per bulan", "Kualitas standar", "Genre terbatas"],
      //   price: "Rp 100.000",
      // },
      // {
      //   name: "Pro",
      //   features: ["5 lagu per bulan", "Kualitas tinggi", "Semua genre"],
      //   price: "Rp 125.000",
      // },
      {
        name: "Premium",
        features: ["Unlimited revisi", "File Format WAV & MP3", "Durasi max. 5 menit"],
        price: "Rp 150.000",
      },
    ],
  },
  {
    id: 2,
    page: "instrument",
    plans: [
      // {
      //   name: "Basic",
      //   price: "Rp 100.000",
      //   features: ["1 trek per bulan", "Kualitas standar", "Instrumen terbatas"],
      // },
      // {
      //   name: "Pro",
      //   price: "Rp 150.000",
      //   features: ["5 trek per bulan", "Kualitas tinggi", "Semua instrumen"],
      // },
      {
        name: "Premium",
        price: "Rp 200.000",
        features: ["Unlimited Revisi", "File Format WAV & MP3", "Durasi max. 5 menit"],
      },
    ],
  },
  {
    id: 3,
    page: "sound",
    plans: [
      // {
      //   name: "Basic",
      //   price: "Rp 90.000",
      //   features: ["1 trek per bulan", "Kualitas standar", "Efek suara terbatas"],
      // },
      // {
      //   name: "Pro",
      //   price: "Rp 95.000",
      //   features: ["5 trek per bulan", "Kualitas tinggi", "Semua efek suara"],
      // },
      {
        name: "Premium",
        price: "Rp 100.000",
        features: ["Unlimited Revisi", "File Format WAV & MP3", "Durasi max. 30 detik"],
      },
    ],
  },
];