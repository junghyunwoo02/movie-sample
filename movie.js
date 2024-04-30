//▼API 사이트 복붙
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTgwODFjYzFmOGEwYjg4ZmMwZTMzYzQ0ODY1YjU5MCIsInN1YiI6IjY2MmIzZTUwZTI5NWI0MDExZTEzZjI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WlRHOXBB3737zowmOYYXPDqttXSiK3G0VahRmYzZBx4"
  }
};

let topMovies; // 상위 영화 목록을 저장할 변수
let movieMap = new Map(); // 영화 제목과 카드를 매핑할 맵 생성

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((response) => {
    let movies = response.results; // 가져온 json 자료들을 movies에 할당
    topMovies = response.results; // map으로 할당

    //▼불러온 results 배열들을 돌리면서 각각 카드 만들기
    movies.forEach((a) => {
      createMovieCard(a);
    });
  });

//▼HTML의 ID값 가져오기
let movieCardPost = document.getElementById("movieCards");

//▼ 카드 만들기
function createMovieCard(a) {
  //▼필요한 변수에 response의 key값 할당
  let movieId = a["id"];
  let movieTitle = a["title"];
  let movieOverview = a["overview"];
  let movieAverage = a["vote_average"];
  let moviePoster = a["poster_path"];

  //▼HTML에서 div요소 새로 만들고 Class 부여하기
  let movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");
  //▼movieCard가 만드는 div요소 내부에 HTML 넣기
  movieCard.innerHTML = `<div class="card">
  <img src="https://image.tmdb.org/t/p/w200/${moviePoster}" class="card-img-top" alt="..."/>
  <p id="cardtitle"> ${movieTitle} </p>
  <p class="stars">Scores <span class="starscolor">${movieAverage}</span></p>
  <p class="overview">${movieOverview}</p>
  </div>`;

  //▼위에서 만들어진 movieCard들을 movieCardPost에 Child로 만들기
  movieCardPost.appendChild(movieCard);
  //▼영화 제목과 카드를 Map 키값으로 만들기 []
  movieMap.set(movieTitle, movieCard);

  //▼만들어진 카드를 클릭하면 해당 영화의 ID값 가져오기
  movieCard.addEventListener("click", () => {
    const id = movieId;
    alert("영화ID는 " + id + " 입니다.");
  });
}

// appendChild

// document.createElement로 요소를 하나 생성하고 appendChild 메소드를 사용해서 document에 요소를 삽입

// ▼검색기능 구현을 위해 HTML의 Searchbar ID가져오기
const searchBtn = document.getElementById("searchyellow");
const searchTxt = document.getElementById("searchinput");

// 1. 사용자가 입력한 값을 가져오기
function search() {
  // 검색 입력란의 값을 가져옴
  let text = searchTxt.value;

  // 2. 각 영화와 사용자가 입력한 값(검색어)을 비교
  topMovies.forEach((a) => {
    let movieTitle = a["title"];
    // 영화 제목과 검색어를 비교하여 일치 여부 확인
    if (movieTitle.toLowerCase().includes(text.toLowerCase())) {
      // 일치하는 경우 해당 카드를 보이게 설정
      movieMap.get(movieTitle).style.display = "block";
    } else {
      // 일치하지 않는 경우 해당 카드를 숨기게 설정
      movieMap.get(movieTitle).style.display = "none";
    }
  });
}

// 검색 버튼 클릭 또는 Enter 키 입력 시 search() 함수 호출
searchBtn.addEventListener("click", () => {
  search();
});

// 검색 입력란에서 Enter 키 입력 시 search() 함수 호출
searchTxt.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

// 검색 입력란에 포커스 맞추기
searchTxt.focus();

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
