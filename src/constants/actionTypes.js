import keyMirror from 'react/lib/keyMirror';

const ActionTypes = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null,
    UPDATE_AUTHOR: null,
    DELETE_AUTHOR: null,
    CREATE_COURSE: null,
    UPDATE_COURSE: null,
    DELETE_COURSE: null
});

export default ActionTypes;