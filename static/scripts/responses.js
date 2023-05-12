function getBotResponse(input) {

    input = input.toLowerCase();

    // Kata sambutan

    if (input == "hai terrabot") {
        return "Halo , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "halo terrabot") {
        return "Hai , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "hallo terrabot") {
        return "Hai , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "hai") {
        return "Halo , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "halo") {
        return "Halo , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "hallo") {
        return "Hai , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    if (input == "hei terrabot") {
        return "Halo , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "helo terrabot") {
        return "Hai , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "hello terrabot") {
        return "Hai , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "hei") {
        return "Halo , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "helo") {
        return "Hai , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "hello") {
        return "Hai , Ada yang ingin kamu tanyakan seputar sejarah indonesia?"
    }
    else if (input == "terimakasih") {
        return "Sama-sama beb"
    }
    else if (input == "makasih") {
        return "Sama-sama"
    }


    // isi topik

    if (input == "ya ada yang ingin saya tanyakan") {
        return "Baik, Saya informasikan terlebih dahulu bahwa program TerraBot ini masih dalam tahap pengembangan, Jadi mohon maaf bila ada pertanyaan anda yang kami tidak mengerti dan tidak terjawab dikarenakan data yang kami peroleh masih terbatas."
    } 
    else if (input == "ya"){
        return "Baik, Saya informasikan terlebih dahulu bahwa program TerraBot ini masih dalam tahap pengembangan, Jadi mohon maaf bila ada pertanyaan anda yang kami tidak mengerti dan tidak terjawab dikarenakan data yang kami peroleh masih terbatas."
    }
    else if (input == "iya"){
        return "Baik, Saya informasikan terlebih dahulu bahwa program TerraBot ini masih dalam tahap pengembangan, Jadi mohon maaf bila ada pertanyaan anda yang kami tidak mengerti dan tidak terjawab dikarenakan data yang kami peroleh masih terbatas."
    }
    else if (input == "apa yang terjadi pada tanggal 17 agustus 1945 di indonesia") {
        return "pada tanggal 17 agustus 1945, indonesia memproklamasikan kemerdekaannya dari penjajahan Belanda"
    } 
    else if (input == "apa yang menjadi penyebab utama indonesia memperjuangkan kemerdekaannya") {
        return "penjajahan oleh belanda selama hampir 350 tahun menjadi penyebab utama indonesia memperjuangkan kemerdekaannya."
    } 
    else if (input == "apa saja peristiwa penting dalam perjuangan kemerdekaan indonesia") {
        return "Ada banyak sekali persitiwa penting dalam perjuangan kemerdekaan indonesia, Yaitu, Sumpah pemuda, proklamasi kemerdekaan, perang diponegoro, konferensi meja bundar, operasi trikora, G30S/PKI, pertempuran surabaya. Lebih detailnya bisa tanyakan pada google atau sumber lainnya."
    } 
    else if (input == "siapa presiden pertama indonesia") {
        return "Presiden pertama Indonesia adalah Ir. Soekarno, dan wakil presidennya adalah Mohammad Hatta"
    } 
    else if (input == "apa tujuan belanda menjajah indonesia") {
        return "Tujuan awal Belanda datang ke Indonesia adalah untuk memperluas perdagangan dan memperoleh keuntungan dari rempah-rempah. Namun, seiring waktu, tujuan mereka bergeser menjadi menguasai wilayah Indonesia dan mengambil alih kekayaan alam dan sumber daya manusia yang ada di sana. Dengan menjajah Indonesia, Belanda dapat mengendalikan produksi dan perdagangan di wilayah tersebut serta memperoleh keuntungan ekonomi yang besar."
    } 
    else if (input == "mengapa jepang menyerah tanpa syarat kepada sekutu") {
        return "Jepang menyerah tanpa syarat kepada Sekutu karena sudah kalah di berbagai front."
    } 
    else if (input == "mengapa para pemuda mengizinkan soekarno dan hatta dibawa kembali ke jakarta dari rengasdengklok") {
        return "Para pemuda mengizinkan Sukarno dan Hatta dibawa kembali ke Jakarta karena peran Ahmad Subarjo."
    } 
    else if (input == "mengapa berita proklamasi tidak diterima secara bersamaan di seluruh wilayah indonesia") {
        return "Berita proklamasi tidak diterima secara bersamaan di seluruh wilayah Indonesia karena masih sederhananya teknologi komunikasi pada saat itu."
    } 
    else if (input == "siapa yang membacakan teks proklamasi kemerdekaan indonesia") {
        return "yang membacakan teks proklamasi kemerdekaan Indonesia ialah Ir. Soekarno"
    } 
    else if (input == "siapa tokoh penting dalam perjuangan kemerdekaan indonesia") {
        return "Banyak tokoh yang terlibat dalam perjuangan kemerdekaan indonesia, Namun tokoh yang paling terkenal ialah Soekarno dan Mohammad Hatta, Yang memproklamasikan kemerdekaan indonesia dan memimpin perjuangan melawan penjajahan belanda"
    } 
    else if (input == "siapa yang merancang bendera merah putih") {
        return "Bendera merah putih dirancang oleh Bapak ibu Fatmawati, istri dari presiden Soekarno"
    } 
    else if (input == "siapa yang mencipatakan lagu indonesia raya") {
        return "W. R. Soepratman"
    }
    else if (input == "tanggal 10 november diperingati hari apa") {
        return "Hari Pahlawan"
    }
    else if (input == "apa makna bhineka tunggal ika") {
        return "Walaupun berbeda-beda tetap satu jua"
    }
    else if (input == "siapa yang menandatangani teks proklamasi indonesia") {
        return "Soekarno dan Moh. Hatta"
    }
    else if (input == "siapa yang mengetik teks proklamasi") {
        return "Sayuti Melik"
    }
    else if (input == "siapa yang pertama kali mengemukakan istilah pancasila") {
        return "Ir. Soekarno"
    }
    else if (input == "perumusan teks pancasila dilakukan di rumah siapa") {
        return "Laksamana Maeda"
    }
    else if (input == "pukul berapa proklamasi kemerdekaan indonesia dibacakan") {
        return "Pukul 10:00 WIB"
    }
    else if (input == "di manakah moh hatta dilahirkan") {
        return "Bukittinggi, Sumatera Barat"
    }
    else if (input == "kerja paksa pada jaman jepang disebut apa") {
        return "Romusha"
    }
    else if (input == "berapa jumlah bulu sayap burung garuda") {
        return "Ada 17"
    }
    else if (input == "berapa jumlah bulu leher burung garuda") {
        return "Ada 45"
    }
    else if (input == "apa tujuan awal belanda datang ke indonesia") {
        return "Untuk mencari rempah rempah"
    }
    
    
        return "Mohon maaf, Saya tidak tahu apa yang anda tanya, Sebab data kami masih terbatas";

}