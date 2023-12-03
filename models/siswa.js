const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis anda'],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Silahkan isikan email anda'],
    },
    nomorHp: {
        type: String,
        required: [true, 'Silahkan isikan nomor hp anda'],
        unique: true,
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
        unique: false,
    },
    jenisKelamin: {
        type: String,
        required: [true, 'Silahkan isikan jenis kelamin anda anda'],
        unique: false,
    },
    usia: {
        type: String,
        required: [true, 'Silahkan isikan usia anda'],
        unique: false,
    },
    asalKota: {
        type: String,
        required: [true, 'Silahkan isikan asal kota anda'],
        unique: false,
    }
});

module.exports = mongoose.model('siswa', SiswaSchema);