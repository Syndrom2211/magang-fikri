import catalogImage1 from "../assets/img/catalog/hiphop-beat.jpg";
import catalogImage2 from "../assets/img/catalog/acoustic-vibe.jpg";
import catalogImage3 from "../assets/img/catalog/edm-track.jpg";

// import People1 from "../assets/img/portfolio/1D.png";
// import People2 from "../assets/img/portfolio/WDW.png";
// import People3 from "../assets/img/portfolio/BM.png";
// import People4 from "../assets/img/portfolio/LM.png";

import productDesc1 from "../assets/img/products/music-lyrics.jpg";
import productDesc2 from "../assets/img/products/10982.jpg";
import productDesc3 from "../assets/img/products/sound-engineer-studio.jpg";

import howItWorks1 from "../assets/img/products/undraw_file-sync_ag5g.png";
import howItWorks2 from "../assets/img/products/undraw_preferences_2bda.png";
import howItWorks3 from "../assets/img/products/undraw_file-analysis_dg81.png";
import howItWorks4 from "../assets/img/products/undraw_media-player_kxtm.png";

import "lucide-react";

export const NavLinks = {
  EN: [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/product", name: "Product" },
    { id: 3, path: "/support", name: "Support" },
    { id: 4, path: "/portfolio", name: "Portfolio" },
  ],
  ID: [
    { id: 1, path: "/", name: "Beranda" },
    { id: 2, path: "/product", name: "Produk" },
    { id: 3, path: "/support", name: "Dukungan" },
    { id: 4, path: "/portfolio", name: "Portofolio" },
  ],
};

export const DropdownLinks = {
  EN: {
    1: [
      { path: "/musik-lyric", name: "Create Music from Lyrics" },
      { path: "/musik-instrument", name: "Create Instrumental Music" },
      { path: "/sound-effect", name: "Create Sound Effect" },
    ],
    2: [
      { path: "/support", name: "Contact Us" },
      { path: "https://www.instagram.com/yukmaridotcom", name: "Instagram" },
    ],
  },
  ID: {
    1: [
      { path: "/musik-lyric", name: "Buat Musik melalui Lirik" },
      { path: "/musik-instrument", name: "Buat Musik Instrumen" },
      { path: "/sound-effect", name: "Buat Efek Suara" },
    ],
    2: [
      { path: "/support", name: "Hubungi Kami" },
      { path: "https://www.instagram.com/yukmaridotcom", name: "Instagram" },
    ],
  },
};

export const TextContent = {
  EN: {
    title: "Create Your Music in Seconds",
    description:
      "Turn your inspiration into a masterpiece with advanced AI. No need for expensive studios—just upload your musical idea and let our AI transform it into artistic melodies and professional arrangements in minutes.",
    button: "TRY NOW",
    catalogTitle: "Our Products",
    catalogDescription: "Create your dream music easily in just minutes",
    portfolioTitle: "Portfolio",
    times: "times",
    step: "step",
    book: "Book Now",
    daftar: "Price List",
    howitworks: "How It Works",
  },
  ID: {
    title: "Ciptakan Musikmu Dalam Hitungan Detik",
    description:
      "Jadikan inspirasimu sebuah mahakarya dengan AI canggih. Tanpa perlu studio mahal, cukup unggah ide musikmu, dan biarkan AI kami menyulapnya menjadi melodi artistik serta aransemen profesional dalam hitungan menit.",
    button: "COBA SEKARANG",
    catalogTitle: "Produk Kami",
    catalogDescription:
      "Ciptakan Musik impianmu dengan mudah hanya dalam hitungan menit",
    portfolioTitle: "Portofolio",
    times: "kali",
    step: "langkah",
    book: "Pesan Sekarang",
    daftar: "Daftar Harga",
    howitworks: "Cara Kerja",
  },
};

export const ProductContent = {
  ID: {
    title: "Produk Kami",
    description:
      "Ciptakan Musik impianmu dengan mudah hanya dalam hitungan menit",
  },
  EN: {
    title: "Our Products",
    description: "Create your dream music easily in just a few minutes",
  },
};

export const products = {
  ID: [
    {
      id: 1,
      image: catalogImage1,
      name: "Buat Musik melalui Lyric",
      description: "Ubahlah lirikmu menjadi lagu otomatis.",
      cta: "Pesan Sekarang",
      rating: "Telah dipesan sebanyak: ",
      currency: "Rp",
      price: 55000,
      features: [
        "Revisi Tidak Terbatas",
        "jenis file WAV & MP3",
        "Durasi maksimal. 5 menit",
      ],
    },
    {
      id: 2,
      image: catalogImage2,
      name: "Buat Musik Instrumen",
      description: "Ciptakan melodi instrumental profesional.",
      cta: "Pesan Sekarang",
      rating: "Telah dipesan sebanyak: ",
      currency: "Rp",
      price: 55000,
      features: [
        "Revisi Tidak Terbatas",
        "jenis file WAV & MP3",
        "Durasi maksimal. 5 menit",
      ],
    },
    {
      id: 3,
      image: catalogImage3,
      name: "Buat Sound Effect",
      description: "Hasilkan efek suara berkualitas tinggi.",
      cta: "Pesan Sekarang",
      rating: "Telah dipesan sebanyak: ",
      currency: "Rp",
      price: 55000,
      features: [
        "Revisi Tidak Terbatas",
        "jenis file WAV & MP3",
        "Durasi maksimal. 30 detik",
      ],
    },
  ],
  EN: [
    {
      id: 1,
      image: catalogImage1,
      name: "Create Music from Lyrics",
      description: "Turn your lyrics into an automatic song.",
      cta: "Order Now",
      rating: "Ordered: ",
      currency: "$",
      price: 3.36,
      features: [
        "Unlimited Revisions",
        "WAV & MP3 File Format",
        "Max duration: 5 minutes",
      ],
    },
    {
      id: 2,
      image: catalogImage2,
      name: "Create Instrumental Music",
      description: "Craft professional instrumental melodies.",
      cta: "Order Now",
      rating: "Ordered: ",
      currency: "$",
      price: 3.36,
      features: [
        "Unlimited Revisions",
        "WAV & MP3 File Format",
        "Max duration: 5 minutes",
      ],
    },
    {
      id: 3,
      image: catalogImage3,
      name: "Create Sound Effects",
      description: "Generate high-quality sound effects.",
      cta: "Order Now",
      rating: "Ordered: ",
      currency: "$",
      price: 3.36,
      features: [
        "Unlimited Revisions",
        "WAV & MP3 File Format",
        "Max duration: 30 seconds",
      ],
    },
  ],
};

export const musicSectionData = {
  ID: {
    songTitle: "Lagu Ini Untukmu",
    playButton: "▶",
    pauseButton: "⏸",
    stopButton: "⏹",
    downloadButton: "Unduh Musik Anda",
  },
  EN: {
    songTitle: "This Song For You",
    playButton: "▶",
    pauseButton: "⏸",
    stopButton: "⏹",
    downloadButton: "Download Your Music",
  },
};

export const musicInspirationData = {
  ID: {
    title:
      "Temukan <span>Inspirasimu</span> di Sekitar, <br /> Mulailah dari Perasaanmu!",
    text: `"Dengar suara hujan, lihat matahari terbit, rasakan detak jantungmu.
            Setiap lagu besar dimulai dari satu kata sederhana. Tulis apa yang kamu rasakan.
            Musik ada di mana-mana."`,
    aiTitle: "DAN BUAT <span>MUSIKMU DENGAN AI</span>",
    lyricPlaceholder: "Lirik Anda",
    createButton: "Buat",
  },
  EN: {
    title:
      "Find <span>Your Inspiration</span> Around You, <br /> Start with Your Feelings!",
    text: `"Listen to the sound of the rain, see the sunrise, feel your heartbeat.
            Every great song starts with a single word. Write what you feel.
            Music is everywhere."`,
    aiTitle: "AND CREATE YOUR <span>MUSIC WITH AI</span>",
    lyricPlaceholder: "Your Lyric",
    createButton: "Create",
  },
};

export const instrumentSectionData = {
  ID: {
    headline: `"Temukan Kebebasan Berkarya Melalui <span class="highlight">Instrumen</span> Buatanmu"`,
    subtext: `"Jadikan ide musikmu lebih hidup dengan instrumen buatan tangan yang bisa disesuaikan. 
               Desain, kustomisasi, dan mainkan semuanya ada di sini."`,
    buttonText: "MULAI SEKARANG",
  },
  EN: {
    headline: `"Discover the Freedom to Create Through <span class="highlight">Your Own Instruments</span>"`,
    subtext: `"Bring your musical ideas to life with handcrafted, customizable instruments. 
               Design, customize, and play—everything is here."`,
    buttonText: "GET STARTED",
  },
};

export const soundEffectSectionData = {
  ID: {
    title: `Buat <span class="span">Sound Effect </span> yang Meningkatkan Karya Musikmu`,
    div: {
      create: "BUAT",
      process: "PROSES",
      result: "HASIL",
    },
    buttons: {
      mainButton: "BUAT SEKARANG",
    },
  },
  EN: {
    title: `Create <span class="span">Sound Effects </span> that Enhance Your Music`,
    div: {
      create: "CREATE",
      process: "PROCESS",
      result: "RESULT",
    },
    buttons: {
      mainButton: "CREATE YOURS",
    },
  },
};

export const contactData = {
  ID: {
    title: "Kontak Kami",
    address: {
      title: "Alamat",
      detail:
        "Komp. Bandung Indah Raya, Blok C13/No.17, Kel. Mekarjaya, Kec. Rancasari, Kota Bandung, Jawa Barat 40286",
    },
    phone: {
      title: "Telepon",
      detail: "+62 822-9560-3115",
    },
    email: {
      title: "Email",
      detail: "yukmari2211@gmail.com",
    },
    form: {
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Email Anda",
      messagePlaceholder: "Pesan Anda",
      submitButton: "Kirim Pesan",
    },
  },
  EN: {
    title: "Contact Us",
    address: {
      title: "Address",
      detail:
        "Komp. Bandung Indah Raya, Block C13/No.17, Mekarjaya, Rancasari District, Bandung City, West Java 40286",
    },
    phone: {
      title: "Phone",
      detail: "+62 822-9560-3115",
    },
    email: {
      title: "Email",
      detail: "yukmari2211@gmail.com",
    },
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
    },
  },
};

export const portfolioSectionData = {
  ID: {
    title: "Portofolio Kami",
    description:
      "Selamat datang di galeri musik kami! Nikmati koleksi video musik yang menarik.",
  },
  EN: {
    title: "Our Portfolio",
    description:
      "Welcome to our music gallery! Enjoy a collection of captivating music videos.",
  },
};

export const dataSwiper = {
    ID: [
      {
        id: 1,
        name: "Dapoer Catering SR",
        genre: "Accoustic",
        audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2046389160&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      },
      {
        id: 2,
        name: "Goyobod Laris",
        genre: "Dubstep",
        audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2046389153&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      },
      {
        id: 3,
        name: "Dimsum by Inmons Fix",
        genre: "Jazz",
        audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2046389164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      },
      {
        id: 4,
        name: "Bubuk Cabe Pa Abdul",
        genre: "Pop",
        audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2046390272&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      },
      {
        id: 5,
        name: "Aku Baru",
        genre: "Progressive",
        audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2046389156&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      },
      {
        id: 6,
        name: "Hudang Hese",
        genre: "Sundanese",
        audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2046389168&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      },
    ],  
  EN: [
    {
      id: 1,
      name: "Dapoer Catering SR",
      genre: "Accoustic",
      audio: "https://drive.google.com/uc?export=download&id=1wjlXCqg8fFdYQFFlnGpEsyrCe4pVg-8Y",
    },
    {
      id: 2,
      name: "Goyobod Laris",
      genre: "Dubstep",
      audio: "https://drive.google.com/uc?export=download&id=1iCKeV-omHdrnasaCK1e8-owQzBWbg4j2",
    },
    {
      id: 3,
      name: "Dimsum by Inmons Fix",
      genre: "Jazz",
      audio: "https://drive.google.com/uc?export=download&id=1-4opdmFQ0OTbIPBZzQSJYXq04qk_lkK-",
    },
    {
      id: 4,
      name: "Bubuk Cabe Pa Abdul",
      genre: "Pop",
      audio: "https://drive.google.com/uc?export=download&id=1MDBSbbYkwYJIjrn2356k-Vb-76195sHE",
    },
    {
      id: 5,
      name: "Aku Baru",
      genre: "Progressive",
      audio: "https://drive.google.com/uc?export=download&id=1iuEsfO3lpOmixBLMT0FMEMIaBFifWK8e",
    },
    {
      id: 6,
      name: "Hudang Hese",
      genre: "Sundanese",
      audio: "https://drive.google.com/uc?export=download&id=1IKN1fSkKKTD_9etHSiF4LtGDf6C_a4mD",
    },
  ], 
};

export const creativeMusicHubData = {
  ID: {
    name: "CreativeMusic",
    address:
      "Komplek Bandung Indah Raya, Blok C13/No.17, Kelurahan Mekarjaya, Kecamatan Rancasari, Kota Bandung, Jawa Barat 40286",
    contact: {
      phone: "+62 822-9560-3115",
      email: "yukmari2211@gmail.com",
    },
    socialMedia: {
      instagram: "https://www.instagram.com/yukmaridotcom",
      website: "https://www.yuk-mari.com/",
      email: "yukmari2211@gmail.com",
    },
    products: [
      { name: "Buat Musik melalui Lyric", link: "/musik-lyric" },
      { name: "Buat Musik Instrumen", link: "/musik-instrument" },
      { name: "Buat Sound Effect", link: "/sound-effect" },
      { name: "Portofolio", link: "/portfolio" },
    ],
    visitorsLabel: "Total Pengunjung",
  },
  EN: {
    name: "CreativeMusic",
    address:
      "Komplek Bandung Indah Raya, Block C13/No.17, Mekarjaya Village, Rancasari District, Bandung City, West Java 40286",
    contact: {
      phone: "+62 822-9560-3115",
      email: "yukmari2211@gmail.com",
    },
    socialMedia: {
      instagram: "https://www.instagram.com/yukmaridotcom",
      website: "https://www.yuk-mari.com/",
      email: "yukmari2211@gmail.com",
    },
    products: [
      { name: "Create Music through Lyrics", link: "/musik-lyric" },
      { name: "Create Instrumental Music", link: "/musik-instrument" },
      { name: "Create Sound Effects", link: "/sound-effect" },
      { name: "Portfolio", link: "/portfolio" },
    ],
    visitorsLabel: "Total Visitors",
  },
};

// export const judulfaq = {
//   ID: { name: "Pertanyaan yang Sering Diajukan" },
//   EN: { name: "Frequently Asked Questions" },
// };

// export const faq = {
//   ID: [
//     {
//       id: 1,
//       eventKey: 0,
//       title: "Apa itu CMH dan bagaimana cara kerjanya?",
//       desc: "CreativeMusicHub (CMH) adalah platform untuk menciptakan musik dengan bantuan AI. Pengguna dapat mengunggah lirik, memilih genre, dan mendapatkan lagu yang dibuat secara otomatis.",
//     },
//     {
//       id: 2,
//       eventKey: 1,
//       title: "Apakah saya perlu keahlian musik untuk menggunakan CMH?",
//       desc: "Tidak perlu! CMH dirancang untuk semua orang, baik pemula maupun profesional. Teknologi AI kami akan membantu dalam proses pembuatan musik.",
//     },
//     {
//       id: 3,
//       eventKey: 2,
//       title: "Jenis musik apa saja yang bisa dibuat dengan CMH?",
//       desc: "CMH mendukung berbagai genre musik seperti pop, rock, jazz, EDM, dan masih banyak lagi.",
//     },
//     {
//       id: 4,
//       eventKey: 3,
//       title: "Bagaimana cara mengubah lirik menjadi lagu?",
//       desc: "Anda hanya perlu mengunggah lirik, memilih genre, dan CMH akan secara otomatis menghasilkan musik yang sesuai dengan lirik tersebut.",
//     },
//     {
//       id: 5,
//       eventKey: 4,
//       title: "Apakah saya bisa memilih genre musik tertentu?",
//       desc: "Ya! CMH menyediakan berbagai pilihan genre musik yang dapat Anda pilih sesuai dengan preferensi Anda.",
//     },
//     {
//       id: 6,
//       eventKey: 5,
//       title: "Berapa lama waktu yang dibutuhkan untuk membuat musik?",
//       desc: "Proses pembuatan musik biasanya memakan waktu beberapa menit, tergantung pada kompleksitas lirik dan pemilihan instrumen.",
//     },
//     {
//       id: 7,
//       eventKey: 6,
//       title: "Apakah musik yang dihasilkan bisa digunakan secara komersial?",
//       desc: "Ya, musik yang dihasilkan melalui CMH bisa digunakan secara komersial. Namun, pastikan untuk membaca ketentuan penggunaan terlebih dahulu.",
//     },
//     {
//       id: 8,
//       eventKey: 7,
//       title: "Bagaimana jika saya mengalami masalah saat membuat musik?",
//       desc: "Anda dapat menghubungi tim dukungan kami melalui email atau WhatsApp yang tersedia di halaman kontak.",
//     },
//   ],
//   EN: [
//     {
//       id: 1,
//       eventKey: 0,
//       title: "What is CMH and how does it work?",
//       desc: "CreativeMusicHub (CMH) is a platform for creating music with AI assistance. Users can upload lyrics, choose a genre, and get an automatically generated song.",
//     },
//     {
//       id: 2,
//       eventKey: 1,
//       title: "Do I need musical skills to use CMH?",
//       desc: "No, you don't! CMH is designed for everyone, from beginners to professionals. Our AI technology will assist in the music creation process.",
//     },
//     {
//       id: 3,
//       eventKey: 2,
//       title: "What types of music can be created with CMH?",
//       desc: "CMH supports various music genres such as pop, rock, jazz, EDM, and many more.",
//     },
//     {
//       id: 4,
//       eventKey: 3,
//       title: "How do I turn lyrics into a song?",
//       desc: "Simply upload your lyrics, select a genre, and CMH will automatically generate music that matches the lyrics.",
//     },
//     {
//       id: 5,
//       eventKey: 4,
//       title: "Can I choose a specific music genre?",
//       desc: "Yes! CMH offers various genre options that you can choose based on your preference.",
//     },
//     {
//       id: 6,
//       eventKey: 5,
//       title: "How long does it take to create music?",
//       desc: "The music creation process usually takes a few minutes, depending on the complexity of the lyrics and instrument selection.",
//     },
//     {
//       id: 7,
//       eventKey: 6,
//       title: "Can the generated music be used commercially?",
//       desc: "Yes, music created through CMH can be used commercially. However, please review the terms of use first.",
//     },
//     {
//       id: 8,
//       eventKey: 7,
//       title: "What if I encounter issues while creating music?",
//       desc: "You can contact our support team via email or WhatsApp, available on the contact page.",
//     },
//   ],
// };

// Product Descriptions
export const productDescriptions = {
  ID: [
    {
      id: 1,
      page: "lyrics",
      title: "Buat Musik dari Lirik",
      description1:
        "Dengan CMH.AI, kamu hanya perlu mengunggah lirik untuk mendapatkan musik yang sesuai dengan tema dan mood yang kamu inginkan.",
      description2:
        "Tidak perlu repot belajar produksi musik atau mencari musisi. Nikmati berbagai pilihan genre dan aransemen yang disesuaikan dengan lirikmu, apakah untuk video, podcast, atau proyek pribadi.",
      description3:
        "Mulai dari Rp. 150.000, CMH.AI menawarkan solusi cepat dan mudah untuk menghasilkan musik berkualitas tinggi. Pilih genre yang diinginkan, unggah lirik, dan biarkan AI kami bekerja. Dalam waktu singkat, kamu akan memiliki musik yang sempurna untuk melengkapi karya kreatifmu.",
      imageUrl: productDesc1,
    },
    {
      id: 2,
      page: "instrument",
      title: "Buat Musik dari Instrumen",
      description1:
        "Dengan CMH.AI, kamu hanya perlu memilih instrumen yang diinginkan dan biarkan AI kami menciptakan musik berkualitas tinggi untukmu.",
      description2:
        "Tidak perlu keterampilan komposisi atau pengalaman dalam musik untuk membuat karya yang menakjubkan. Nikmati berbagai pilihan genre dan gaya musik yang bisa disesuaikan dengan kebutuhan kamu, apakah untuk video, iklan, atau proyek kreatif lainnya.",
      description3:
        "Mulai dari Rp. 200.000, Musik.AI menawarkan solusi cepat dan mudah untuk menghasilkan musik original tanpa batasan. Pilih instrumen, tentukan suasana hati, dan biarkan AI kami bekerja. Dalam waktu singkat, kamu akan memiliki lagu lengkap dengan instrumen yang siap digunakan.",
      imageUrl: productDesc2,
    },
    {
      id: 3,
      page: "sound",
      title: "Buat Musik dari Efek Suara",
      description1:
        "Dengan CMH.AI, kamu hanya perlu mengunggah efek suara untuk mendapatkan musik yang sesuai dengan suasana dan nuansa yang diinginkan.",
      description2:
        "Tidak perlu repot mengatur instrumen atau mencari komposer. Nikmati berbagai pilihan genre dan aransemen musik yang disesuaikan dengan efek suara yang kamu pilih, apakah untuk film, video, atau proyek kreatif lainnya.",
      description3:
        "Mulai dari Rp. 100.000, CMH.AI menawarkan solusi cepat dan mudah untuk menghasilkan musik berkualitas tinggi. Pilih paket yang sesuai, unggah efek suara, dan biarkan AI kami bekerja. Dalam waktu singkat, kamu akan memiliki musik yang sempurna untuk melengkapi karyamu.",
      imageUrl: productDesc3,
    },
  ],
  EN: [
    {
      id: 1,
      page: "lyrics",
      title: "Create Music from Lyrics",
      description1:
        "With CMH.AI, simply upload your lyrics to get music that matches the theme and mood you desire.",
      description2:
        "No need to learn music production or find musicians. Enjoy a variety of genres and arrangements tailored to your lyrics, whether for videos, podcasts, or personal projects.",
      description3:
        "Starting from Rp. 150,000, CMH.AI offers a fast and easy solution to produce high-quality music. Choose your genre, upload your lyrics, and let our AI do the work. In no time, you’ll have the perfect music to complement your creative project.",
      imageUrl: productDesc1,
    },
    {
      id: 2,
      page: "instrument",
      title: "Create Music from Instruments",
      description1:
        "With CMH.AI, simply choose your desired instrument and let our AI create high-quality music for you.",
      description2:
        "No composition skills or music experience needed to create an amazing piece. Enjoy various genre options and musical styles customized to your needs, whether for videos, ads, or creative projects.",
      description3:
        "Starting from Rp. 200,000, Musik.AI offers a fast and easy solution to create original music without limits. Choose an instrument, set the mood, and let our AI do the work. In no time, you'll have a full song with ready-to-use instruments.",
      imageUrl: productDesc2,
    },
    {
      id: 3,
      page: "sound",
      title: "Create Music from Sound Effects",
      description1:
        "With CMH.AI, simply upload sound effects to get music that matches the atmosphere and vibe you desire.",
      description2:
        "No need to arrange instruments or find composers. Enjoy various genres and musical arrangements tailored to your chosen sound effects, whether for films, videos, or other creative projects.",
      description3:
        "Starting from Rp. 100,000, CMH.AI offers a fast and easy solution to produce high-quality music. Choose the right package, upload sound effects, and let our AI do the work. In no time, you’ll have the perfect music to complete your project.",
      imageUrl: productDesc3,
    },
  ],
};

// How It Works Steps
export const howItWorksSteps = {
  ID: [
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
  ],
  EN: [
    {
      id: 1,
      page: "lyrics",
      steps: [
        {
          text: "Enter your lyrics into the input field.",
          imageUrl: howItWorks1,
        },
        {
          text: "Choose your desired music genre and tempo.",
          imageUrl: howItWorks2,
        },
        {
          text: "Let our AI analyze your lyrics and generate a melody.",
          imageUrl: howItWorks3,
        },
        {
          text: "Download your song and share it with everyone!",
          imageUrl: howItWorks4,
        },
      ],
    },
    {
      id: 2,
      page: "instrument",
      steps: [
        {
          text: "Upload your instrument recording.",
          imageUrl: howItWorks1,
        },
        {
          text: "Choose the mood and style for your song.",
          imageUrl: howItWorks2,
        },
        {
          text: "Our AI will process the recording and create a full arrangement.",
          imageUrl: howItWorks3,
        },
        {
          text: "Download the final song and enjoy your creation!",
          imageUrl: howItWorks4,
        },
      ],
    },
    {
      id: 3,
      page: "sound",
      steps: [
        {
          text: "Upload your sound effects or choose from our library.",
          imageUrl: howItWorks1,
        },
        {
          text: "Select the genre and structure for your song.",
          imageUrl: howItWorks2,
        },
        {
          text: "Our AI will blend the sounds into a cohesive composition.",
          imageUrl: howItWorks3,
        },
        {
          text: "Download the final song and enjoy your creation!",
          imageUrl: howItWorks4,
        },
      ],
    },
  ],
};

// Price Lists
export const priceLists = {
  ID: [
    {
      id: 1,
      page: "lyrics",
      plans: [
        {
          name: "Buat Musik Melalui Lirik",
          features: [
            "Revisi Tidak Terbatas",
            "Jenis file WAV & MP3",
            "Durasi maksimal. 5 menit",
          ],
          currency: "Rp",
          price: 55000,
        },
      ],
    },
    {
      id: 2,
      page: "instrument",
      plans: [
        {
          name: "Buat Musik Instrumen",
          currency: "Rp",
          price: 55000,
          features: [
            "Revisi Tidak Terbatas",
            "Jenis file WAV & MP3",
            "Durasi maksimal. 5 menit",
          ],
        },
      ],
    },
    {
      id: 3,
      page: "sound",
      plans: [
        {
          name: "Buat Efek Suara",
          currency: "Rp",
          price: 55000,
          features: [
            "Revisi Tidak Terbatas",
            "Jenis file WAV & MP3",
            "Durasi maksimal. 30 detik",
          ],
        },
      ],
    },
  ],
  EN: [
    {
      id: 1,
      page: "lyrics",
      plans: [
        {
          name: "Create Music From Lyrics",
          features: [
            "Unlimited revisions",
            "File format WAV & MP3",
            "Max duration 5 minutes",
          ],
          currency: "Rp",
          price: 55000,
        },
      ],
    },
    {
      id: 2,
      page: "instrument",
      plans: [
        {
          name: "Create Instrumental Music",
          currency: "Rp",
          price: 55000,
          features: [
            "Unlimited revisions",
            "File format WAV & MP3",
            "Max duration 5 minutes",
          ],
        },
      ],
    },
    {
      id: 3,
      page: "sound",
      plans: [
        {
          name: "Create Sound Effects",
          currency: "Rp",
          price: 55000,
          features: [
            "Unlimited revisions",
            "File format WAV & MP3",
            "Max duration 30 seconds",
          ],
        },
      ],
    },
  ],
};
