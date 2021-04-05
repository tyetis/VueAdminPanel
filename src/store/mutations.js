export const setUsers = (state, users) => {
    state.users = users;
};

export const addUser = (state, user) => {
    state.users.push(user);
};

export const updateUser = (state, user) => {
    state.users[state.users.findIndex(el => el.id === user.id)] = user;
};

export const deleteUser = (state, user) => {
    state.users = state.users.filter(n => n.id != user.id);
};

export const getAccountInfo = (state, user) => {
    state.user = user;
};

export const auth_request = (state) => {
    state.status = 'loading'
};

export const auth_success = (state, token, user) => {
    state.status = 'success'
    state.token = token
    state.user = user;
};

export const auth_error = (state) => {
    state.status = 'error'
};

export const logout = (state) => {
    state.status = ''
    state.token = ''
}