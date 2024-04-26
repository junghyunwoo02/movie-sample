//▼API 사이트 복붙
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTgwODFjYzFmOGEwYjg4ZmMwZTMzYzQ0ODY1YjU5MCIsInN1YiI6IjY2MmIzZTUwZTI5NWI0MDExZTEzZjI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WlRHOXBB3737zowmOYYXPDqttXSiK3G0VahRmYzZBx4",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));


  
alert(`영화id: ${영화id}`);

// 검색 구현
// 1. 영화카드리스트 선택하기
// 2. 영화카드리스트 클릭하면 영화상세페이지로 이동 || 입력값에 따라 포함여부 확인
// 3. 영화 상세페이지에서 영화정보 출력

//▼ 다크 모드 적용 토글
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(1);
});
