const movies = [
    { title: "Inception", img: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg" },
    { title: "Interstellar", img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg" },
    { title: "The Dark Knight", img: "https://m.media-amazon.com/images/I/51k0qa6q8xL._AC_.jpg" },
    { title: "Endgame", img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg" },
    { title: "Joker", img: "https://m.media-amazon.com/images/I/71Kk5wGjvCL._AC_SL1178_.jpg" },
    { title: "Harry Potter", img: "https://m.media-amazon.com/images/I/81YOuOGFCJL._SL1500_.jpg" }
];

function loadMovies(rowId) {
    const row = document.getElementById(rowId);
    movies.forEach(m => {
        const div = document.createElement("div");
        div.classList.add("movie-card");
        div.style.backgroundImage = `url(${m.img})`;
        div.innerHTML = `<div class="movie-title">${m.title}</div>`;
        row.appendChild(div);
    });
}

loadMovies("popularRow");
loadMovies("topRatedRow");
loadMovies("recentRow");

/* SEARCH FUNCTION */
document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".movie-card").forEach(card => {
        const title = card.innerText.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
    });
});
