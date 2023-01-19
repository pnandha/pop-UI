const api = 'https://api.api-pop.co.uk/api'


const defaultHeaders = {
    'Content-Type' : 'application/json',
}

function getUnAuthURL(){
    return '/'
}


function handleResponse(response, successCallback, errorCallback, unAuthUrl, redirect){
    if(response.status === 401){
        if (redirect){
            window.location = unAuthUrl
        } else {
            errorCallback({
                status: 401,
                error: 'UnAuthorised',
                redirectUrl: unAuthUrl
            })
        }
    } else if(response.status >= 200 && response.status < 300){
        const jsonPromise = response.json()
        jsonPromise.then((data) => {
            successCallback(data)
        })
           .catch((err) =>{
            console.log(err)
            throw err;
           })
    } else if(response.status >= 500){
        const jsonPromise = response.json()
        jsonPromise.then((data) => {
        if(data){
              errorCallback(response)
               
            } else{
                errorCallback({}, 'no data')
            }
        })
           .catch((err) =>{
            errorCallback(err)
            throw err;
           })
        } else if(response.status >= 400 && response.status < 500){
            const jsonPromise = response.json()
            jsonPromise.then((data) => {
            if(data){
                    errorCallback(response)
                } else{
                    errorCallback({}, 'no data')
                }
            })
               .catch((err) =>{
                console.log(err, 'server error')
                throw err;
               })
            }
            else {
                const jsonPromise = response.json()
                jsonPromise.then((data) => {
                if(data){
                        errorCallback(response)
                    } else{
                        errorCallback({}, 'no data')
                    }
                })
                   .catch((err) =>{
                    console.log(err, 'server error')
                    throw err;
                   })
                }
}


function getHeaders(token) {
    if(token){
        defaultHeaders.Authorization = token
    } else {
        defaultHeaders.Authorization = ''
    }
    return defaultHeaders
}


async function postRequest(apiPath, oauth, data, successCallback, errorCallback, redirect){
    await fetch( `${api}/${apiPath}`, {
        method: 'POST',
        headers: getHeaders(oauth) ,
        body: JSON.stringify(data),
    }) .then(
        response => handleResponse(
            response,
            successCallback,
            errorCallback,
            getUnAuthURL(),
            redirect,
        )
    ) .catch(function(error) {
        errorCallback(error)
        console.log('There has been a problem with your fetch operation: ' + error.message);
        })

}

async function deleteRequest(apiPath, oauth, data, successCallback, errorCallback, redirect){
    await fetch( `${api}/${apiPath}`, {
        method: 'DELETE',
        headers: getHeaders(oauth) ,
        body: JSON.stringify(data),
    }) .then(
        response => handleResponse(
            response,
            successCallback,
            errorCallback,
            getUnAuthURL(),
            redirect,
        )
    ) .catch(function(error) {
        errorCallback(error)
        console.log('There has been a problem with your fetch operation: ' + error.message);
    
        })

}


async function getRequest(apiPath, oauth, successCallback, errorCallback, redirect){
    await fetch( `${api}/${apiPath}`, {
        method: 'GET',
        headers: getHeaders(oauth) ,
    }) .then(
        response => handleResponse(
            response,
            successCallback,
            errorCallback,
            getUnAuthURL(),
            redirect,
        )
    ) .catch(function(error) {
        errorCallback(error)
        console.log('There has been a problem with your fetch operation: ' + error.message);
        })

}

async function postformRequest(apiPath, formData, successCallback, errorCallback, redirect){
    await fetch( `${api}/${apiPath}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formData,
    }) .then(
        response => handleResponse(
            response,
            successCallback,
            errorCallback,
            getUnAuthURL(),
            redirect,
        )
    ) .catch(function(error) {
        errorCallback(error)
        console.log('There has been a problem with your fetch operation: ' + error.message);
        })

}

export { postRequest, getRequest, deleteRequest, postformRequest}