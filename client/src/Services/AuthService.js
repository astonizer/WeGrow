export default{
    login : user => {
        return fetch('/signin',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    register : user => {
        return fetch('/signup',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    logout : () => {
        return fetch('/signout')
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated : () => {
        return fetch('/auth')
                .then(res => {
                    if(res.status !== 404)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated : false, user : {username : "", role : ""}};
                });
    }
}