const initialState= {
    book: {
        name:"book name from state",
        author: "author name from state",
        description: "",
        onStock:"",
        image: ""
    }
}
const adminPanelReducer= (state= initialState, action) =>{
    console.log('unknown action receiverd' + action.type )
    switch (action.type){
        case'UPDATE_BOOK':
            const book= action.payload;
            return {...state, book}
        default:
            return state;
    }

}

export default adminPanelReducer;