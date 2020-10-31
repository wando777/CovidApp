$(document).ready(function(){

    $("#userContent").hide();
    const urlApiCovid = "https://covid19-brazil-api.now.sh/api/report/v1"
    getStates()

    function getStates(stateName){
        let request = new XMLHttpRequest()
        request.open('GET', urlApiCovid)
        request.responseType = 'json'
        request.send()

        request.onload = function(){
            let responseData = request.response
            // console.log(responseData)
            formatData(responseData)
        }
    }

    // function showData(state){
    //     console.log(state)
    // }

    function formatData(users){
        // console.log(states.length)
        for(let i = 0; i < users.length; i++){
            console.log(users[i]);
        }
    }

    // function getUsers(userName){
    //     let request = new XMLHttpRequest()

    //     let url = userName ? `${urlApiGitHub}/${userName}` : urlApiGitHub

    //     //Verbos HTTP
    //     //GET, PUT, POST, DELETE
    //     request.open('GET', url) 
    //     request.responseType = 'json'
    //     request.send()

    //     request.onload = function(){
    //         let responseData = request.response

    //         if(userName)
    //         {
    //             formatUser(responseData)
    //         }
    //         else
    //         {
    //             formatUsers(responseData)
    //         }
    //     }
    // }

    // function formatUser(user){
    //    if(user.name == null){
    //        $("#userContent").append("Usuário não encontrado!")
    //    }
    //    else{
    //     $("#userContent").append(`Usuário: ${user.state} <br>`)
    //     // $("#userContent").append(`<img src='${user.}' alt='Avatar' width=60 /> <br>`)
    //     showUser(user)
    //    }


    //    $("#userContent").append("<a href='#' target='_blank'>Voltar</a>")

    // }

    // function formatUsers(users){
    //     for(let i=0; i < users.length; i++){
            
    //         let user = {
    //             state: users[i].state,
    //             cases: users[i].cases,
    //             deaths: users[i].deaths
    //         }

    //         showUser(user)
    //     }
    // }

    // function showUser(user){
    //     $("#user_table").append("<tr>")

    //     let object_keys = Object.keys(user);

    //     for(let key=0; key< object_keys.length; key++){

    //         let currentKey = object_keys[key]
    //         // if(currentKey === "avatar"){
    //         //     let img = "<img src=" + user[currentKey] + " alt='Avatar' width=60 />"
    //         //     $("#user_table").append("<td>" + img + "</td>")
    //         // }
    //         // else if(currentKey === "url"){
    //         //     let a = "<a href=" + user[currentKey] + " target='_blank'>" + user[currentKey] + "</a>"
    //         //     $("#user_table").append("<td>" + a + "</td>")  
    //         // }
    //         // else{
    //             $("#user_table").append("<td>" + user[currentKey] + "</td>")  
    //         // }
    //     }

    //     $("#user_table").append("</tr>")
    // }
    
    // $("#btnPesquisar").click(function(){
    //     $("#homeContent").hide();
    //     $("#userContent").show();

    //     let userName = $("input").val()
    //     getUsers(userName)
    // })
})