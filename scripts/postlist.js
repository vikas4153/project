function viewDeletePostModal(id) {
    document.getElementById('staticBackdrop').style.display = 'block';
    document.getElementById('staticBackdrop').setAttribute('idToDelete', id);
}

function closeDeletePostModal() {
    document.getElementById('staticBackdrop').style.display = 'none';
    event.preventDefault(); // prevents page from refreshing
}

function viewFullPost() {
    window.location.href = "./post.html";
}

function deletePost() {
    event.preventDefault(); // prevents page from refreshing
    document.getElementById('staticBackdrop').style.display = 'none';
    var idToDelete = document.getElementById('staticBackdrop').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();
}
