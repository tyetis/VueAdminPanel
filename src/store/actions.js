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