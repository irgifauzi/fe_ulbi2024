//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = " https://ws-irgi2024-8b615be21b10.herokuapp.com/presensi/" + presensiId;