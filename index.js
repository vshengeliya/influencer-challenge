
const BASE_URL = "http://localhost:3000/users"

function addUser(){

    const form = document.getElementById('add-user')
     document.addEventListener("submit", function(e){
    
        let email = e.target.email.value
        let refCode = Math.random().toString(20).substring(2, 5) + Math.random().toString(20).substring(2, 5)
         
         e.preventDefault()
    
        form.remove()
        let container = document.getElementById('container')
        let h3 = document.createElement('h3')
        container.appendChild(h3)
    
        h3.innerText = `Subscribed ${email}, their refferral code is ${refCode}`
     })
}

addUser()

function showPanel(){

    let showPanel = document.getElementById('show-panel')
    showPanel.innerHTML=`
    
    <h3>
    <form id='count-email'>
    <label >Get refferal count for a particular User. Enter a user email:</label>
    <input type="text" id="count" name="count">
    <input type="submit" value="Submit">
    </form>
    </h3>
    <br/>
    <br/>
    <h3>
    <form id='who-reffered-email'>
    <label for="fname">Who has reffered this email. Enter an email:</label>
    <input type="text" id="reffered" name="reffered">
    <input type="submit" value="Submit">
    </form>
    </h3>
    <br/>
    <br/>
    <h3>
    <form id='all-reffered-email'>
    <label>Who has a particular user reffered. Enter a user email:</label>
    <input type="text" id="all" name="all">
    <input type="submit" value="Submit">
    </form>
    </h3>
    <br/>
    <br/>
    `
}

showPanel()

function emailCount(){

    let formCountEmail = document.querySelector('#count-email')
    formCountEmail.addEventListener("submit", function(e){
    
        e.preventDefault()
        let email = e.target.count.value
        
        fetch(BASE_URL)
        .then(resp => resp.json())
        .then(user => user.forEach(user=> {
    
            if (user.email === email){
                return  formCountEmail.innerHTML =`
                <form id='count-email'>
                <label >Get refferal count for a particular User. Enter a user email:</label>
                <input type="text" id="count" name="count">
                <input type="submit" value="Submit">
                Count: ${user.emailedReffered.length}
                </form>
                `
            }
            } 
        ))
    })
}

emailCount()

function allEmails(){

    let formAllEmails = document.querySelector('#all-reffered-email')
    formAllEmails.addEventListener("submit", function(e){
    
        e.preventDefault()
        let email = e.target.all.value
        
        fetch(BASE_URL)
        .then(resp => resp.json())
        .then(user => user.forEach(user=> {
    
            if (user.email === email){
                return  formAllEmails.innerHTML =`
                <form id='count-email'>
                <label >Check how many refferals this email has. Enter en email:</label>
                <input type="text" id="count" name="count">
                <input type="submit" value="Submit">
                Refferals: ${user.emailedReffered}
                </form>
                `
            }
            } 
        ))
    })
}

allEmails()

function whoReffered(){

    let formWhoReferred = document.querySelector('#who-reffered-email')
    console.log(formWhoReferred)
    formWhoReferred.addEventListener("submit", function(e){

    
        e.preventDefault()
        let email = e.target.reffered.value
        
        fetch(BASE_URL)
        .then(resp => resp.json())
        .then(
            users => {
                for (let user of users){
                    if (user.emailedReffered.includes(email)){
                        return formWhoReferred.innerHTML =`
                        <form id='who-reffered-email'>
                        <label for="fname">Who has reffered this email. Enter an email:</label>
                        <input type="text" id="reffered" name="reffered">
                        <input type="submit" value="Submit">
                        Reffered: ${user.email}
                        </form>
                        `
                    }
                }
            }
        )
    })
}           

whoReffered()




