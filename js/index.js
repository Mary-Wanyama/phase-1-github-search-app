



document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector("#github-form");
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let search = e.target.search.value
        //console.log(search)
        handleSearch(search)
    
function handleSearch() {
    
    fetch('https://api.github.com/search/users?q=' + search, {
        method: 'GET',
        header:{
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('#user-list').innerHTML = ''
        document.querySelector('#repos-list').innerHTML =''
  
        data.items.forEach(user => {
            let card = document.createElement('li')
            card.className = 'all-users'
            const div = document.createElement('div')
            div.className = 'content'
            const h3 = document.createComment('h3')
            h3.textContent = `user: ${user.login}`
            const p = document.createElement('p')
            p.textContent = `url : ${user.html_url}`
            const div1 = document.createElement('div')
            div1.className = 'repos'
            const btn = document.createElement('button')
            const img = document.createElement('img')
            img.src = user.avatar_url
            card.appendChild(div)
            div.appendChild(h3)
            div.appendChild(p)
            div1.appendChild(btn)
            card.appendChild(img)
            
           document.querySelector('#user-list').appendChild(userCard)   
           
           const repoBtn = document.querySelector('.repo-button')
           console.log(repoBtn)
           repoButton.addEventListener('click', () => {
               fetch(user.repos_url, {
               method: 'GET',
               header:{
                   'Content-Type': 'application/json',
                   Accept: 'application/vnd.github.v3+json'
               },
               body: JSON.stringify()
            })
               .then(res => res.json())
               .then(data => {
             
               data.forEach(repo => {
                  
                    let repoCard = document.createElement('li')
                    repoCard.innerHTML = `
                    <h4> ${repo.name} </h4>
                    <p> ${repo.html_url}</p>
                    `
                    document.querySelector('#repos-list').appendChild(repoCard)
                    
               })
            })
              
           })


    })

})
}
})
}) 