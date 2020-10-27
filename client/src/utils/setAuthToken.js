import axios from 'axios';

// we using axios.defaults, because of axios we don't have manually make sure
// that we have token for eache request we need.
// If we are logged in we can call this function and it always attatch auth header.

const setAuthToken = token => {
    if (token) {
        // apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;