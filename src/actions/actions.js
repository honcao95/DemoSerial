import * as types from '../contants/actionTypes';

//GET DATA
export function getData(){
    let urls = "https://reactnative.dev/movies.json";
    return dispatch => {
        dispatch(updateData('loading'));
        fetch(urls, {
                credentials: 'same-origin'
            })
            .then(response => {
                console.log('response', response)
                if ( response.status == 200 ) return response.json();
                return { Error: response.statusText};
            })
            .then(json => dispatch(getDataSuccess(json)))
            .catch(err => dispatch(updateData('failed')));
    }
}


function getDataSuccess(data) {
    if (data.length == 0) {
        return {
            type: types.UPDATE_DATA,
            status: 'empty'
        };
    }
    return {
        type: types.GET_DATA,
        res: data.movies
    }
}

function updateData(status) {
    return {
        type: types.UPDATE_DATA,
        status: status
    };
}

//POST DATA
export function postData(data){
    let urls = "http://192.168.0.168:8888/piglet";
    return dispatch => {
        dispatch(updatePostData('loading'));
        return fetch(urls, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            })
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(postDataSuccess(responseJson))
                // return responseJson.success;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}


function postDataSuccess(data) {
    if (data.length == 0) {
        return {
            type: types.UPDATE_POST_DATA,
            status: 'empty'
        };
    }
    return {
        type: types.POST_DATA,
        res: data
    }
}

function updatePostData(status) {
    return {
        type: types.UPDATE_POST_DATA,
        status: status
    };
}
