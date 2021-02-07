const API_KEY = "77de572f80ffd4958b065e3df61ed2ef";

const request = {
    fetchPopular: `/movie/popular?api_key=${API_KEY}`,
    fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNow: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComing: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default request;