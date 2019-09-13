let BaseUrl = '/auth/';

export function SignInService(type, userData)
{
    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type,
            {
                method: 'POST',
                headers: new Headers({ 
                    'Content-Type': 'application/json'
                  }), 
                body: JSON.stringify(userData)
            })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject();
            console.error(error);
        });

    });    
}

export function SignUpService(type, data)
{
    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type,
            {
                method: 'POST',
                headers: new Headers({ 
                    'Content-Type': 'application/json'
                  }), 
                body: JSON.stringify(data)
            })
        .then((response) => response.json())
        .then((responseJson) => {
            
            resolve(responseJson);
        })
        .catch((error) => {
            reject();
            console.log(error);
        })
    });
}

export function search(type, data)
{
    return new Promise((resolve, reject) => {
        fetch('/account/searchAccount',
            {
                method: 'POST',
                headers: new Headers({ 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DTElFTlQifV0sImxvbCI6InF3ZSIsImlhdCI6MTU2ODM1MzgwNSwiZXhwIjoxNTY4NzEzODA1fQ.i0dWhvQ34Y7-abQ-ZgMb3M9H_SC52Vm-xfRIx8wZZLQ'
                  }), 
                body: JSON.stringify({
                    "keyWord" : "test",
                    "page" : 0,
                    "size" : 5
                })
            })
        .then((response) => response.json())
        .then((responseJson) => {
            
            resolve(responseJson);
        })
        .catch((error) => {
            reject();
            console.log(error);
        })
    });
}