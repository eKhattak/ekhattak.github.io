// Init Github
//const github = new Github()
// Init UI
const ui = new UI()
// Search Variable
const searchInput = document.getElementById('name')


// Input Event
searchInput.addEventListener('input', (e) => {
    const input = e.target.value


    if(input !== '') {
        github(input).then(data => {
            if(data.profile.message === "Not Found") {
                ui.showError()
                ui.clearHTML()
            } else {
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
                ui.hideError()
            }
            
        })
    } else {
        ui.hideError()
        ui.clearHTML()
    }
})