
// Error Div
const errorDiv = document.querySelector('.error-message')
// Hide Error Div
errorDiv.style.display = 'none'


const github = async(user) => {
    this.client_id = 'b24605882e5cb37d9e20'
    this.client_secret = '0f6f841d09f2a0c4c9c317409fd99a4e75ca92b7'
    this.repos_count= 5
    this.repos_sort = 'created: asc'
    // Get User Profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
        profile,
        repos
    }
}

class Github {
    constructor() {
        this.client_id = 'b24605882e5cb37d9e20'
        this.client_secret = '0f6f841d09f2a0c4c9c317409fd99a4e75ca92b7'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const profile = await profileResponse.json()
        const repos = await reposResponse.json()    
        return {
            profile,
            repos
        }
    }
    
}

// Class for UI 
class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    // Show User Profile
    showProfile(user) {
        this.profile.innerHTML = `                <div class="container">
        <div class="row">
            <div class="col s12 m3">
                <img src="${user.avatar_url}" alt="" class="responsive-img">
                <a href="${user.url}" class="btn teal btn-extended">View Profile</a>
            </div>
            <div class="col s12 m9">
                <span class="btn blue btn-detail">
                    Public Repos: ${user.public_repos}
                </span>
                <span class="btn grey btn-detail">
                    Public Gists: ${user.public_gists}
                </span>
                <span class="btn green btn-detail">
                    Followers: ${user.followers}
                </span>
                <span class="btn greenish btn-detail">
                    Following: ${user.following}
                </span>
                <ul class="collection">
                    <li class="collection-item">
                        Company : ${user.company}
                    </li>
                    <li class="collection-item">
                        Website/Blog : ${user.blog}
                    </li>
                    <li class="collection-item">
                        Location : ${user.location}
                    </li>
                    <li class="collection-item">
                        Member Since : ${user.created_at}
                    </li>
                </ul>
            </div>
        </div>
        <div id="repos">
            <h4>Repos</h4>
            
        </div>
    </div>`
    }

    // Show User Repos
    showRepos(repos) {
        let output = `<div class="row">
            <div class="collection">`

        repos.forEach(repo => {
            console.log(repo)
            output += `
                        <a href="${repo.html_url}" class="collection-item">${repo.name}
                        <span class="secondary-content repo-icons">
                        <span class="blue-text secondary-item">${repo.stargazers_count} <i class="fas fa-star"></i></span>
                        <span class="grey-text secondary-item">${repo.watchers_count} <i class="fas fa-eye"></i></span>
                        <span class="green-text secondary-item">${repo.forks_count} <ion-icon name="git-network"></ion-icon></span>
                        </span>
                        </a>
                 `
        });
        output += `</div>
        </div>`
        document.getElementById('repos').innerHTML = output
    }

    // Show en Error
    showError() {
        errorDiv.style.display = 'block'
        this.clearHTML()
        setTimeout(() => {
            this.hideError()
        }, 2000);
    }

    // Hide an Error
    hideError() {
        errorDiv.style.display = 'none'
    }

    // Remove Profile HTML Code
    clearHTML() {
        this.profile.innerHTML = ''
    }

}


/* <div class="row">
                <div class="card">
                    <div class="collection">
                        <div class="collection-item">
                            
                        </div>
                    </div>
                </div>
            </div> */