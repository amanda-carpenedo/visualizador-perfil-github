import { fetchGithubUser, fetchGithubUserRepos } from "./githubApi.js";
import { renderProfile } from "./profileView.js";

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    await handleSearch();
})

inputSearch.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        await handleSearch();
    }
});

async function handleSearch() {
    const userName = inputSearch.value;

    if (!userName || userName.trim().length === 0) {
        alert('Por favor, preencha o campo com o nome do usuário do GitHub.');
        return;
    }

    profileResults.innerHTML = `<p class="loading">Carregando...</p>`

    try {
        const userData = await fetchGithubUser(userName)
        const userRepos = await fetchGithubUserRepos(userName)
        renderProfile(userData, userRepos, profileResults);
    }catch (error) {
    console.log('Erro na requisição', error);
    profileResults.innerHTML = "<h2>Houve um erro na sua busca 😥</h2>"
}
}


