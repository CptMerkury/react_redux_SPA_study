import {APP_ACTIONS} from "../actions/action";

let initialState = {
    profile: [],
    status: null,
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 50},
        {id: 2, message: 'It`s my first post', likeCount: 20},
        {id: 3, message: 'Hi, how are you', likeCount: 10},
        {id: 4, message: 'How are you', likeCount: 5},
        {id: 5, message: 'Hi', likeCount: 50},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            };
        case APP_ACTIONS.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.payload
            };
        case APP_ACTIONS.SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.payload
            };
        case APP_ACTIONS.GET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state
    }
}

export const addPostCreator = () => ({
    type: APP_ACTIONS.ADD_POST
})

export const updatePostBodyCreator = (value) => ({
    type: APP_ACTIONS.UPDATE_NEW_POST_TEXT,
    payload: value
})
export const setProfileData = (data) => ({
    type: APP_ACTIONS.SET_PROFILE_DATA,
    payload: data
})
export const getStatus = (value) => ({
    type: APP_ACTIONS.GET_STATUS,
    payload: value
})

export default profileReducer