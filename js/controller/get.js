import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
        .replace("#NOHP#", value.biodata.phone_number)
        .replace("#JABATAN#", value.biodata.jabatan)
        .replace("#LOKASI#", value.location)
        .replace("#STATUS#", value.checkin)
        .replace("#HARIKERJA#", value.biodata.hari_kerja)
        .replace("#JAMKERJA#", value.biodata.jam_kerja? value.biodata.jam_kerja[0].durasi + " jam" : "Tidak ada") 
        .replace("#JAMMASUK#", value.biodata.jam_kerja? value.biodata.jam_kerja[0].jam_masuk + " WIB" : "Tidak ada") 
        .replace("#JAMKELUAR#", value.biodata.jam_kerja? value.biodata.jam_kerja[0].jam_keluar + " WIB" : "Tidak ada") 
        .replace("#WARNA#", getRandomColor())
        .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}