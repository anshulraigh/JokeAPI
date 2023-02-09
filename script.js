const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("button");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${(item.setup + item.delivery )|| item.joke}`;
        jokeContainer.classList.add("fade");
        console.log(item);
    });
}
btn.addEventListener("click",getJoke);
getJoke();