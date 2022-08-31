setInterval(() => {
    var namahari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
    namahari = namahari.split(" ");
    var tgl = new Date();
    var namabulan =
        "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
    namabulan = namabulan.split(" ");
    var hari = tgl.getDay();
    var tanggal = tgl.getDate();
    var bulan = tgl.getMonth();
    var tahun = tgl.getFullYear();

    var tgllengkap =
        namahari[hari] + ", " +
        tanggal + " " +
        namabulan[bulan] + " " +
        tahun;

    var jam = tgl.getHours() + ":" + tgl.getMinutes() + ":" + tgl.getSeconds();
    var tgldate = document.getElementById("tgldate");
    tgldate.innerHTML = tgllengkap + " | " + jam;

}, 1000);