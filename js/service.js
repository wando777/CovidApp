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
            if(stateName){
                formatDataSearch(responseData.data,stateName)
            }else{
                // console.log(responseData.data)
                formatData(responseData.data)
            }
        }
    }

    function showData(state){
        $("#user_table").append("<tr>")

        let object_keys = Object.keys(state);
        for(let key=0; key< object_keys.length; key++){

            let currentKey = object_keys[key]
            // console.log(currentKey)
            $("#user_table").append("<td>" + state[currentKey] + "</td>")
        }
        $("#user_table").append("</tr>")
    }

    function showState(state){
        $("#search_table").append("<tr>")

        let object_keys = Object.keys(state);
        for(let key=0; key< object_keys.length; key++){
            let currentKey = object_keys[key]
            $("#search_table").append("<td>" + state[currentKey] + "</td>")
        }
        $("#search_table").append("</tr>")
    }

    function formatData(states){
        // console.log(states.length)
        for(let i = 0; i < states.length; i++){
            // console.log(states[i]);
            let state = {
                state: states[i].state,
                cases: states[i].cases,
                deaths: states[i].deaths
            }
            showData(state)
        }
    }

    function formatDataSearch(jsonArray, stateName){
        let notFind = true
        for(let i=0; i < jsonArray.length; i++){
            if(jsonArray[i].state == stateName){
                let search = {
                    state: jsonArray[i].state,
                    cases: jsonArray[i].cases,
                    deaths: jsonArray[i].deaths
                }
                // console.log(search)
                showState(search)
                notFind = false
            }
        }
        if(notFind){
            $("#userContent").append("State not found!")
        }
        $("#userContent").append("<a href='#' target='_blank'>Voltar</a>")
    }

    $("#btnPesquisar").click(function(){
        $("#homeContent").hide();
        $("#userContent").show();

        let stateName = $("input").val()
        getStates(stateName)
    })
})