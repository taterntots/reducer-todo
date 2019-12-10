export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Pet all the puppos',
        completed: false,
        id: 4857295031
    },
    {
        item: 'Go see a movie',
        completed: false,
        id: 5692058332
    }
]


export const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        default:
            return state;
    }
}