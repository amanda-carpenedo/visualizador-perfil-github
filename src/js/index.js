const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if(userName.length === 0){
        alert('Por favor, preencha o campo com o nome do usuário do GitHub.');
        return;
    }

    profileResults.innerHTML = `<div class="loading">Carregando...</div>`

    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`)

        if (!response.ok) {
            profileResults.innerHTML = "<h2>Usuário não encontrado 😥</h2>"
            return
        }

        const userData = await response.json();
        console.log(userData)

        profileResults.innerHTML = ` 
        <div class = "profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class = "profile-avatar">
            <div class = "profile-info">
                <h2>${userData.login}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😥.'}</p>
            </div>
        </div>
        `
    } catch (error) {
        console.log('Erro na requisição', error);
        profileResults.innerHTML = "<h2>Houve um erro na sua busca 😥</h2>"
    }
})


