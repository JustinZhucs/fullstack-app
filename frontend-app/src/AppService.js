const API_SERVICE_HOST = 'http://localhost:8080';

const apiService = {

    // submit order to the backend service
    submitOrder: async (productName, quantity) => {

        return fetch(`${API_SERVICE_HOST}/products`, {
            method: 'POST',
            body: JSON.stringify({id: 0, name: productName, quantity: quantity}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .catch(err => {console.err("Error occurred in calling API", err); return err})
    },

    login: async (email, password) => {

        console.log("sending loging request", email, password)
        return fetch(`${API_SERVICE_HOST}/login`, {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .catch(err => {console.err("Error occurred in calling API", err); return err})
    }
        

}

export default apiService;