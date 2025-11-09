import { fetchGithubUser } from "./githubApi.js";
import { renderProfile } from "./profileView.js";

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (!userName || userName.trim().length === 0) {
        alert('Por favor, preencha o campo com o nome do usuário do GitHub.');
        return;
    }

    profileResults.innerHTML = `<p class="loading">Carregando...</p>`

    try {
        const userData = await fetchGithubUser(userName)
        renderProfile(userData, profileResults);
    }catch (error) {
    console.log('Erro na requisição', error);
    profileResults.innerHTML = "<h2>Houve um erro na sua busca 😥</h2>"
}
})


