import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

let AuthorApi = require('../api/authorApi');    

//Action creator
const AuthorActions = {
    createAuthor: (author) => {
        let newAuthor = AuthorApi.saveAuthor(author);

        //Action
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: (author) => {
        let newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: newAuthor
        });
    },

    deleteAuthor: (id) => {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

export default AuthorActions;