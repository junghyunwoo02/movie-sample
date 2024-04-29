//▼API 사이트 복붙
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTgwODFjYzFmOGEwYjg4ZmMwZTMzYzQ0ODY1YjU5MCIsInN1YiI6IjY2MmIzZTUwZTI5NWI0MDExZTEzZjI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WlRHOXBB3737zowmOYYXPDqttXSiK3G0VahRmYzZBx4"
  }
};

let topMovies;
let movieMap = new Map();

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);

    let movieList = response.results;
    movieList.forEach((element) => {
      console.log(element);
      let div1 = document.createElement("div");
      div1.innerHTML = `<div id="movieCards">
      <img src="" alt="영화 이미지"/>
      <h3>영화제목</h3>
      <p>줄거리 요약</p>
      <p>평점 : </p>
    </div>`;
      document.getElementById("movieCards").appendChild(div1);
    });
  });

// appendChild

// document.createElement로 요소를 하나 생성하고 appendChild 메소드를 사용해서 document에 요소를 삽입

//▼ 다크 모드 적용 토글
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
});
