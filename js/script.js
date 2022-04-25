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
            let manga = JSON.parse(localStorage.getItem(key))

            const new_tag = document.createElement("div")
            const name_manga = document.createElement("h2")
            name_manga.innerHTML = manga.name
            new_tag.setAttribute('id', key)
            new_tag.appendChild(name_manga)
            new_tag.classList = "list-group-item active"

            manga.number.forEach(nbr => {
                let span_manga = document.createElement("span")
                let label_manga = document.createElement("label")
                let input_count = document.createElement("input")

                label_manga.innerHTML = "Tome " + nbr
                label_manga.setAttribute('for', manga.name + "_" + nbr)
                input_count.setAttribute('type', 'checkbox')
                input_count.setAttribute('value', nbr)
                input_count.setAttribute('id', manga.name + "_" + nbr)
                
                input_count.onclick = function () {
                    let manga_edit = JSON.parse(localStorage.getItem(this.parentElement.parentElement.getAttribute('id')))

                    manga_edit['number'].forEach((element, index) =>{
                        if (element == this.value) {
                            manga_edit['number'].splice(index, 1)
                        }
                    })
                    
                    localStorage.setItem(this.parentElement.parentElement.getAttribute('id'), JSON.stringify(manga_edit));
                    this.parentElement.remove(this)
                };
    
                span_manga.setAttribute('class', 'span-manga')
                span_manga.appendChild(label_manga)
                span_manga.appendChild(input_count)
                new_tag.appendChild(span_manga)
            });

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

    var new_manga = {'name':manga.value, 'number': Array.from({length: number_tomes.value}, (_, i) => i + 1)}
    localStorage.setItem('manga_' + i, JSON.stringify(new_manga))
    
    //reset form
    manga.value = ""
    number_tomes.value = ""
    build_list()
}

function removeTome(manga_name, tombe_nbr) {

}

const add_manga = document.querySelector("#add_manga")
add_manga.addEventListener("click", add_new_manga, false)
