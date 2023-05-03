function getBotResponse(input) {
    //rock paper scissors
    if (input == "Hallo") {
        return "Ya, ada yang ingin kamu tanyakan seputar sejarah kemerdekaan indonesia";
    } else if (input == "apa yang terjadi pada tanggal 17 agustus 1945 diindonesia") {
        return "pada tanggal 17 agustus 1945, indonesia memproklamasikan kemerdekaannya dari penjajahan belanda";
    } else if (input == "apa yang memnjadi penyebab utama indonesia memperjuangkan kemerdekaannya") {
        return "penjajahan oleh belanda selama hampir 350 tahun menjadi penyebab utama indonesia memperjuangkan kemerdekaannya.";
    }
    if (input == "") {
        return "";
    } else if (input == "") {
        return "";
    } else if (input == "") {
        return "";
    }

    // Simple responses
    
    if (input == "siapa yang membacakan teks proklamasi kemerdekaan indonesia") {
        return "yang membacakan teks proklamasi kemerdekaan indonesia ialah IR. Soekarnoe";
    } else if (input == "Siapa tokoh penting dalam perjuangan kemerdekaan indonesia") {
        return "Banyak tokoh yang terlibat dalam perjuangan kemerdekaan indonesia, Namun tokoh yang paling terkenal ialah Soekarno dan Mohammad Hatta, Yang memproklamasikan kemerdekaan indonesia dan memimpin perjuangan melawan penjajahan belanda";
    } else if (input == "Siapa yang merancang bendera merah putih") {
        return "Bendera merah putih dirancang oleh Bapak ibu Fatmawati, istridari presiden Soekarno";
    } else {
        return "ya ndak tau tanya kok tanya saya";
    }
}