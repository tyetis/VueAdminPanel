import axios from 'axios'

export const users = ({ commit }) => {
    axios.get("http://localhost:50833/users")
        .then(async response => {
            commit("setUsers", response.data);
        });
};

export const addUser = ({ commit }, user) => {
    axios.post('http://localhost:50833/users', user).then(function (response) {
        if (user.id == undefined)
            commit("addUser", response.data);
        else
            commit("updateUser", response.data);
    }).catch(function (error) {
        console.log(error);
    });
};

export const deleteUser = ({ commit }, user) => {
    axios.delete('http://localhost:50833/users/' + user.id).then(function (response) {
        commit("deleteUser", user);
    }).catch(function (error) {
        console.log(error);
    });
};

export const getAccountInfo = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:50833/auth/getAccountInfo').then(function (response) {
            commit("getAccountInfo", response.data.user);
            resolve(response.data.user);
        }).catch(function (error) {
            console.log(error);
            reject(error);
        });
    })
};

export const login = ({ commit }, loginData) => {
    return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('http://localhost:50833/auth', { email: loginData.email, password: loginData.password })
            .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = "Bearer " + token
                commit('auth_success', token, user)
                resolve(resp)
            })
            .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
            })
    })
}

export const logout = ({ commit }) => {
    return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
    })
}