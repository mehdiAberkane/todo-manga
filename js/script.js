function add_new_manga() {
    const manga = document.querySelector("#manga");
    const i = parseInt(localStorage.length) + 1

    localStorage.setItem('manga_' + i, manga.value)
    manga.value = ""
}

function reset() {
    localStorage.clear()
}
localStorage.setItem('qsdsqdsqd' , "dddd.value")

const add_manga = document.querySelector("#add_manga");
add_manga.addEventListener("click", add_new_manga, false);

Object.keys(localStorage).forEach(function(key){
    if (key.includes('manga')) {
        console.log(localStorage.getItem(key))
    }
 });

