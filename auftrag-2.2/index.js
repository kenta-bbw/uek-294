
const addButton = document.getElementById('add-3-album');
const removeButton = document.getElementById('remove-3-album');
const imgGrid = document.getElementById('grid-img');

const add3 = () => {
    const albums = Array.from(imgGrid.children);
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * albums.length);
        const randomAlbum = albums[randomIndex].src;
        const newAlbumItem = document.createElement("img");
        newAlbumItem.src = randomAlbum;
        newAlbumItem.className = "grid-image";
        imgGrid.appendChild(newAlbumItem);
    }
};

const remove3 = () => {
    for (let i = 0; i < 3; i++) {
        const firstImg = imgGrid.querySelector("img");
        if (firstImg) {
            imgGrid.removeChild(firstImg);
        }
    }
};

removeButton.onclick = remove3;
addButton.onclick = add3;
