function getData(cb) {
    fetch("/api/movies").then(response => {
            return response.json();
        }).then(json => cb(json))
        .catch(err => console.error(err));
}

async function listData() {

    const list = document.getElementById("movieList");

    getData((movies => {
        Object.entries(movies).forEach(entry => {
            list.appendChild(createListElement(entry[1].title, `/${entry[1].file}`));
        });
    }));

}

function updateSearch() {
    let input, filter, ul, li, a, i, txtValue;

    input = document.getElementById('searchFilm');
    filter = input.value.toUpperCase();
    ul = document.getElementById("movieList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function createListElement(name, link) {
    const li = document.createElement("li");
    li.appendChild(createA(name, link));
    return li;
}

function createA(name, link) {
    const a = document.createElement("a");
    const text = document.createTextNode(name);
    a.appendChild(text);
    a.href = link;
    return a;
}