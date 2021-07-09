export const deletePost = (id) => {
    return {
        type:'DELETE_POST',
        //change the state(i think,id:id)
        id
    }
}