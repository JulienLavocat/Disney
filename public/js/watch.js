function onLoad() {

    const player = document.getElementById("videoPlayer");
    const source = document.createElement('source');

    const searchParams = new URLSearchParams(window.location.search);

    if (!searchParams.has("id") || notLikelyId(searchParams.get("id")))
        window.location.replace("/");


    source.setAttribute("src", await fetch(`/api/watch/${searchParams.get("id")}`));
    player.appendChild(source);

    //player.play();

}

async function getMovieFile() {

}

function notLikelyId(value) {
    return (!value || value.length < 7 || value.length > 14 && !alphanumeric(value))
}
function alphanumeric(input) {
    var regex = /^[0-9a-zA-Z]+$/;
    return input.value.match(regex);
}