const initialState={
    title:'',
    content:'',
    time:'',
    tags:[]
};
export const actionTypes = {
    UPDATING_TITLE:"UPDATING_TITLE",
    UPDATING_CONTENT:"UPDATING_CONTENT",
    UPDATING_TAGS:"UPDATING_TAGS",
};
export const actions = {
    update_title:function (title) {
        return{
            type:actionTypes.UPDATING_TITLE,
            title
        }
    },
    update_content:function (content) {
        return{
            type:actionTypes.UPDATING_CONTENT,
            content
        }
    },
    update_tags:function (tags) {
        return{
            type:actionTypes.UPDATING_TAGS,
            tags
        }
    }
};


export function reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.UPDATING_TITLE:
            return{
                ...state,title:action.title
            };
        case actionTypes.UPDATING_CONTENT:
            return{
                ...state,content:action.content
            };
        case actionTypes.UPDATING_TAGS:
            return{
                ...state,tags:action.tags
            };
        default:
            return state;
    }
}