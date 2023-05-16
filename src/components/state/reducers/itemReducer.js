const defaultState = {
    shirt: {
        item: 'Футболка USA',
        price: '$129',
        id: 1,
    },
    swimsuit: {
        item: 'Купальник Glow',
        price: '$149',
        id: 2,
    },
    sweatshot: {
        item: 'Свитшот Sweet Shot',
        price: '$199',
        id: 3,
    }
}

export const itemReducer = (state = defaultState,action) => {
    return state;
}
