export let urlPOST = " https://ws-irgi2024-8b615be21b10.herokuapp.com/insert"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}