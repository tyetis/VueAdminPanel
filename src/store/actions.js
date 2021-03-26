import axios from 'axios'

export const users = ({ commit }) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(async response => {
            response = await response.json();
            commit("setUsers", response);
        });
};

export const addUser = ({ commit }, user) => {
    commit("addUser", user);
};

export const login = ({ commit }, user) => {
    return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: process.env.BASE_URL, data: user, method: 'GET' })
            .then(resp => {
                const token = 1234 | resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
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