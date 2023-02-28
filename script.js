
axios({
    method: 'get',
    url: '\movies.json',

}).then(obj => {
    const data = obj.data;


    const cardAdd = document.getElementById("cardAdd");


    let theseCheckBoxes =
        data.map(function (element) {
            let formName = element;
            return `<div class="card me-2 mt-2" style="width: 18rem;border-style: none;">
        <img class="card-img-top" style="margin: 0;padding: 0; margin-top: 0.75rem; border-radius: 1rem; border-style:solid;"
            src="https://image.tmdb.org/t/p/w500/${formName.poster_path}"
            alt="Card image cap">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title" style="text-align:center; font-size:1.2rem; height: 2.5 vw;">${formName.original_title}</h5>
            <p class="card-text" style="display: contents; text-align: center; font-size:1rem;">${formName.overview.slice(0, 150)}</p>
            <div class="row" style="margin-top:auto;">
            <a href="#" class="btn btn-dark" style="margin-top:auto;">${formName.release_date.slice(0, 4)}</a>
            </div>
        </div>
        </div>
`});

    cardAdd.innerHTML = theseCheckBoxes.join('\n');

    const searchInput = document.getElementById("inputSearch");
    searchInput.addEventListener("input", () => {
        searchToLowerCase = searchInput.value.toLocaleLowerCase();
        console.log(searchToLowerCase);
        const movieNames = document.querySelectorAll('.card-title');





        movieNames.forEach(movieName => {
            movieName.parentElement.parentElement.style.display = "block"
            if (!movieName.innerHTML.toLowerCase().includes(searchToLowerCase)) {
                movieName.parentElement.parentElement.style.display = "none"
            }
        });
    });


});



