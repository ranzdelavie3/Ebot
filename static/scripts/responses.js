function getBotResponse(input) {

    input = input.toLowerCase();

    if (input == "ya ada yang ingin saya tanyakan") {
        return "Baik, Saya informasikan terlebih dahulu bahwa program TerraBot ini masih dalam tahap pengembangan, Jadi mohon maaf bila ada pertanyaan anda yang kami tidak mengerti dan tidak terjawab dikarenakan data yang kami peroleh masih terbatas.";
    } 
    else if (input == "apa yang terjadi pada tanggal 17 agustus 1945 di indonesia") {
        return "pada tanggal 17 agustus 1945, indonesia memproklamasikan kemerdekaannya dari penjajahan Belanda";
    } 
    else if (input == "apa yang menjadi penyebab utama indonesia memperjuangkan kemerdekaannya") {
        return "penjajahan oleh belanda selama hampir 350 tahun menjadi penyebab utama indonesia memperjuangkan kemerdekaannya.";
    } 
    else if (input == "apa saja peristiwa penting dalam perjuangan kemerdekaan indonesia") {
        return "Ada banyak sekali persitiwa penting dalam perjuangan kemerdekaan indonesia, Yaitu, Sumpah pemuda, proklamasi kemerdekaan, perang diponegoro, konferensi meja bundar, operasi trikora, G30S/PKI, pertempuran surabaya. Lebih detailnya bisa tanyakan pada google atau sumber lainnya.";
    } 
    else if (input == "siapa presiden pertama indonesia") {
        return "Presiden pertama Indonesia adalah Ir. Soekarno, dan wakil presidennya adalah Mohammad Hatta";
    } 
    else if (input == "apa tujuan belanda menjajah indonesia") {
        return "Tujuan awal Belanda datang ke Indonesia adalah untuk memperluas perdagangan dan memperoleh keuntungan dari rempah-rempah. Namun, seiring waktu, tujuan mereka bergeser menjadi menguasai wilayah Indonesia dan mengambil alih kekayaan alam dan sumber daya manusia yang ada di sana. Dengan menjajah Indonesia, Belanda dapat mengendalikan produksi dan perdagangan di wilayah tersebut serta memperoleh keuntungan ekonomi yang besar.";
    } 
    else if (input == "") {
        return "";
    } 
    else if (input == "") {
        return "";
    } 
    else if (input == "") {
        return "";
    } 
    else if (input == "siapa yang membacakan teks proklamasi kemerdekaan indonesia") {
        return "yang membacakan teks proklamasi kemerdekaan Indonesia ialah Ir. Soekarno";
    } 
    else if (input == "Siapa tokoh penting dalam perjuangan kemerdekaan indonesia") {
        return "Banyak tokoh yang terlibat dalam perjuangan kemerdekaan indonesia, Namun tokoh yang paling terkenal ialah Soekarno dan Mohammad Hatta, Yang memproklamasikan kemerdekaan indonesia dan memimpin perjuangan melawan penjajahan belanda";
    } 
    else if (input == "Siapa yang merancang bendera merah putih") {
        return "Bendera merah putih dirancang oleh Bapak ibu Fatmawati, istridari presiden Soekarno";
    } 
    else {
        return "yo ndak tau tanya kok tanya saya";
    }
}