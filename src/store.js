import { reactive } from 'vue';

export const store = reactive({
    filmsArr: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=d7b14f57bda71f6ec13213d3dbe64bd7",
    searchContent: ""
});