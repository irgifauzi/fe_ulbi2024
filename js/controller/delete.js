function confirmDelete(IDHAPUS) {
    if (confirm("Apakah ingin menghapus data ID " + IDHAPUS + "?")) {
        deleteData(IDHAPUS);
    }
}

function deleteData(IDHAPUS) {
    var presensiId = IDHAPUS;
    var target_url = " https://ws-irgi2024-8b615be21b10.herokuapp.com/delete/" + presensiId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}