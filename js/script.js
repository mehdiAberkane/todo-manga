var listing = document.querySelector("#listing")
var number_manga = 0

function build_list() {
    Object.keys(localStorage).forEach(function(key) {
        if (key.includes('manga')) {
            const new_tag = document.createElement("li")
            new_tag.innerHTML = localStorage.getItem(key)
            new_tag.classList = "list-group-item active"
            
            listing.appendChild(new_tag)
            number_manga++
        }
    });
}

build_list()

function add_new_manga() {
    const manga = document.querySelector("#manga")
    const i = parseInt(localStorage.length) + 1

    localStorage.setItem('manga_' + i, manga.value)
    manga.value = ""
    build_list()
}

function reset() {
    localStorage.clear()
}

const add_manga = document.querySelector("#add_manga")
add_manga.addEventListener("click", add_new_manga, false)
