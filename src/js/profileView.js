export function renderProfile(userData, profileResults) {
    profileResults.innerHTML = 
    ` 
        <div class = "profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class = "profile-avatar">
            <div class = "profile-info">
                <h2>${userData.login}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😥.'}</p>
            </div>
        </div>


        <div class = "profile-counter">
                <div class = "followers">
                  <h4>👥Seguidores</h4>
                  <span>${userData.followers}</span>
                </div>

                <div class = "following">
                  <h4>👥Seguindo</h4>
                  <span>${userData.following}</span>
                </div>
        </div>
        `
}