const mahasiswa = {
    namaDepan: "Riski",
    namaBelakang: "Darliana",
    nilaiMatematika: 80,
    nilaiProgramming: 80,
    nilaiBahasaInggris: 80,
    totalNilai: function () {
        return this.nilaiMatematika+this.nilaiProgramming+this.nilaiBahasaInggris
    },

    nilaiRataRata: function () {
        return (this.nilaiMatematika+this.nilaiProgramming+this.nilaiBahasaInggris) / 3
    },

    namaLengkap: function () {
        return this.namaDepan + " " + this.namaBelakang
    },
};

console.log("Total Nilai:", mahasiswa.totalNilai());
console.log("Total Nilai:", mahasiswa.nilaiRataRata());
console.log("Nama Lengkap:", mahasiswa.namaLengkap());