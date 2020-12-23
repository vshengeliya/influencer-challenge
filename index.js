
const BASE_URL = "http://localhost:3000/users"
let refCode = Math.random().toString(20).substring(2, 5) + Math.random().toString(20).substring(2, 5)

function containerAddUser(){
    let containerAddUser = document.getElementById('container-add-user')
    containerAddUser.innerHTML=`
    <form id="add-user">
              <h3>Subscribe a new user
      
              <input
                type="text"
                name="email"
                placeholder="add user email"
                class="input-text"
              />
              
              <input
                type="submit"
                name="submit"
                value="Subscribe"
                class="submit"
              />
            </h3>
    </form>
    `
}

containerAddUser()

function addUser(){

    let formAddUser = document.getElementById('add-user')

     document.addEventListener("submit", function(e){
    
        e.preventDefault()
        let email = e.target.email.value
        let refCode = Math.random().toString(20).substring(2, 5) + Math.random().toString(20).substring(2, 5) 
    
        let h3 = document.createElement('h3')
        formAddUser.appendChild(h3)
    
        h3.innerText = `Subscribed ${email}, their refferral code is ${refCode}`
     })
}

addUser()


function containerReferredUser(){
    let containerAddUser = document.getElementById('container-referred-user')
    containerAddUser.innerHTML=`
    <br
    <br/>
    <form id="add-referred-user">
        <h3>Subscribe a referred user

        <input
          type="text"
          name="emailNew"
          placeholder="add user email"
          class="input-text"
        />
        <input
          type="text"
          name="code"
          placeholder="referred by"
          class="input-text"
        />
        
        <input
          type="submit"
          name="submit"
          value="Subscribe"
          class="submit"
        />
      </h3>
      </form>
      <br/>
      <br/>
    `
}

containerReferredUser()


function addRerreredUser(){

    let formRefferedUser = document.getElementById('add-referred-user')
     document.addEventListener("submit", function(e){
    
        e.preventDefault()
        let email = e.target.emailNew.value
        let refCode = Math.random().toString(20).substring(2, 5) + Math.random().toString(20).substring(2, 5)

        let code = e.target.code.value
        let h3 = document.createElement('h3')
        formRefferedUser.appendChild(h3)

        fetch(BASE_URL)
        .then(resp => resp.json())
        .then( user => { user.forEach(user => {
            
            if (user.code === code){
                return h3.innerText = `Subscribed ${email}, their refferral code is ${refCode}`
            } 
         })    
        })     
     })
}

addRerreredUser()

function showPanel(){

    let showPanel = document.getElementById('show-panel')
    showPanel.innerHTML=`
    
    <h3>
    <form id='count-email'>
    <label >Get refferal count for a particular User.</label>
    <input type="text" id="count" name="count" placeholder="enter a user email">
    
    <input type="submit" value="Submit">
    </form>
    </h3>
    <br/>
    <br/>
    <h3>
    <form id='who-reffered-email'>
    <label for="fname">Who has reffered this email.</label>
    <input type="text" id="reffered" name="reffered" placeholder="enter a user email">
    <input type="submit" value="Submit">
    </form>
    </h3>
    <br/>
    <br/>
    <h3>
    <form id='all-reffered-email'>
    <label>Who has a particular user reffered.</label>
    <input type="text" id="all" name="all" placeholder="enter a user email">
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
                <label >Get refferal count for a particular User.</label>
                <input type="text" id="count" name="count" placeholder="enter a user email">
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
                <label >Check how many refferals this email has.</label>
                <input type="text" id="count" name="count" placeholder="enter a user email">
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
                        <label for="fname">Who has reffered this email.</label>
                        <input type="text" id="reffered" name="reffered" placeholder="enter a user email">
                        <input type="submit" value="Submit">
                        Reffered by: ${user.email}
                        </form>
                        `
                    }
                }
            }
        )
    })
}           

whoReffered()




