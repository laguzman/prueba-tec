

export function fetchUsers() {
    const fetchUsersBegin = () => ({
        type: "FETCH_USERS_BEGIN"
    });
    const fetchUsersSuccess = users => ({
        type: "FETCH_USERS_SUCCESS",
        payload: { users }
    });
    const fetchUsersFailure = error => ({
        type: "FETCH_USERS_FAILURE",
        payload: { error }
    });

    return dispatch => {
        dispatch(fetchUsersBegin());
        return fetch("https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchUsersSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchUsersFailure(error)));
    };
}

// Helper function for error handling
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}