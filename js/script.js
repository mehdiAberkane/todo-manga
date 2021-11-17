var listing = document.querySelector("#listing")
var number_manga = 0

function reset() {
    localStorage.clear()
    
    build_list()
}

function build_list() {
    listing.innerHTML = ""
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
    const number_tomes = document.querySelector("#number_tomes")
    const i = parseInt(localStorage.length) + 1

    console.log('nbr manga ' + number_tomes.value)

    localStorage.setItem('manga_' + i, manga.value)
    manga.value = ""
    number_tomes.value = ""
    build_list()
}

const add_manga = document.querySelector("#add_manga")
add_manga.addEventListener("click", add_new_manga, false)
