var formRegister = document.getElementById("formRegister")

formRegister.addEventListener("submit",async (e) =>{
    e.preventDefault()
    const formData = new FormData(formRegister)
    const response = await fetch(formRegister.action,{
        method:'post',
        body : formData
    })
    if(response.status === 200){
        const account = await response.json()
        addFriends(account._id)
    }
    else{
        const err = await response.json()
        alert(err.message)
    }    
})

const addFriends = async (accountID) =>{
    const members = [accountID,"605aa6761cda143040638fb0"]
    const dataCB ={"accountID":accountID,"chatBoxID":"605aa6dc1cda143040638fb4"}
    const config_create_CB ={
        method :'POST',
        mode :'cors',
        cache : 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        redirect:"follow",
        referrerPolicy: 'no-referrer',
        body:JSON.stringify({members})
    }
    const config_add_chat_group= {
        method :'PATCH',
        mode :'cors',
        cache : 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        redirect:"follow",
        referrerPolicy: 'no-referrer',
        body:JSON.stringify(dataCB)
    }
    Promise.all(fetch('https://chatapp-tuan.herokuapp.com/api/chatBoxs',config_create_CB),
                fetch('/https://chatapp-tuan.herokuapp.com/api/chatBoxs/addMember',config_add_chat_group))
            .then(data => alert("register successed"))
            .catch(err => alert(err))
}

