import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-irgi2024-8b615be21b10.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}