const apiMiddleware = store => next => action => {
    if (!action.meta || action.meta.type !== "api") {
        return next(action);
    }
    const { url } = action.meta;
    const fetchOptions = Object.assign({}, action.meta);
    fetch(url, fetchOptions)
    .then(resp => resp.json())
    .then(data => {
        // respond back to the user
        // by dispatching the original action without
        // the meta object
        let newAction = Object.assign({}, action, {
            payload: data
        });
        delete newAction.meta;
        store.dispatch(newAction);
    });
}
export default apiMiddleware