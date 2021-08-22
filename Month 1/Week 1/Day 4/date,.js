// let date = new Date("2021-08-20T10:21:00+07:00") // waktu yang tertera di tulisan
// let date = new Date() // sekarang
// let date = new Date(year, month, day, hours, minutes, seconds, milliseconds) // isi sesuai yang kita isi
// let date = new Date(1626751116000) // isi dengan timestamp unix

// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getFullYear())

// let stringTanggal = "Tanggal Hari ini adalah " + date.getDate() + ", dan sekarang jam " + date.getHours()
// console.log(stringTanggal)

let tanggal = new Date();

console.log(tanggal.getDay())
switch (tanggal.getDay()) {
  case 0:
    console.log("minggu");
    break;
  case 1:
    console.log("senin");
    break;
  case 2:
    console.log("selasa");
    break;
  case 3:
    console.log("rabu");
    break;
  case 4:
    console.log("kamis");
    break;
  case 5:
    console.log("jumat");
    break;
  case 6:
    console.log("sabtu");
    break;
}
