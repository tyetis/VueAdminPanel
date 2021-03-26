export const setUsers = (state, users) => {
    state.users = users;
};

export const addUser = (state, user) => {
    state.users.push(user);
};

export const setToken = (state, token) => {
    state.token = token;
};