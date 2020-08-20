import * as types from '../contants/actionTypes';

const initialState = {
    "data": [],
    "data_status": "loaded",

    "data_post": "",
    "data_post_status": "loaded",    
}

export default function serialapp(state = initialState, action) {
    switch (action.type) {
        case types.GET_DATA:
            let new_data = Object.assign({}, state);
            if (action.res.hasOwnProperty("Error")) {
                new_data.data = [];
                new_data.data_status = 'failed';
                return new_data;
            }
            new_data.data = action.res;
            new_data.data_status = 'loaded';
            return new_data;

        case types.UPDATE_DATA:
            let wait_data = Object.assign({}, state);
            wait_data.data_status = action.status;
            return wait_data;

        case types.POST_DATA:
            let new_post_data = Object.assign({}, state);
            if (action.res.hasOwnProperty("Error")) {
                new_post_data.data_post = "";
                new_post_data.data_post_status = 'failed';
                return new_post_data;
            }
            new_post_data.data_post = action.res;
            new_post_data.data_post_status = 'loaded';
            return new_post_data

        case types.UPDATE_POST_DATA:
            let wait_data_post = Object.assign({}, state);
            wait_data_post.data_post_status = action.status;
            return wait_data_post;

        default:
            return state;
    }
}

