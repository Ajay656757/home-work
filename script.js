const birds = [
    { src: 'bird1.jpg', description: 'The Eagle is a large bird of prey found in Eurasia, North America, and Africa. Known for its keen vision and powerful build.' },
    { src: 'bird2.jpg', description: 'The Penguin is a flightless bird that lives primarily in the Southern Hemisphere. Penguins are excellent swimmers.' },
    { src: 'bird3.jpg', description: 'The Parrot is known for its colorful feathers and ability to mimic human speech. Native to tropical regions.' },
    // Add more bird objects as needed
];

let currentPage = 1;
const itemsPerPage = 6;

function displayGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, birds.length);

    for (let i = startIndex; i < endIndex; i++) {
        const bird = birds[i];
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${bird.src}" alt="Bird">
            <div class="description">${bird.description}</div>
            <button onclick="viewDetails('${bird.src}', '${bird.description}')">View Details</button>
        `;
        gallery.appendChild(item);
    }

    displayPagination();
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const numPages = Math.ceil(birds.length / itemsPerPage);

    for (let i = 1; i <= numPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => {
            currentPage = i;
            displayGallery();
        };
        if (i === currentPage) {
            button.style.backgroundColor = '#004d40';
        }
        pagination.appendChild(button);
    }
}

function viewDetails(src, description) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');

    modalImg.src = src;
    modalDescription.textContent = description;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Initialize the gallery
displayGallery();
