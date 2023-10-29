import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Starship {
    name: string;
    model: string;
}

export interface StarshipsState {
    list: Starship[];
    next: string | null;
}

const initialState: StarshipsState = {
    list: [],
    next: 'https://swapi.dev/api/starships/'
};

const starshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        setStarships: (state, action: PayloadAction<Starship[]>) => {
            state.list = action.payload;
        },
        setNext: (state, action: PayloadAction<string | null>) => {
            state.next = action.payload;
        },
        setStarshipsDetails: (state, action: PayloadAction<Starship[]>) => {
            state.list = action.payload;
        }
        
    }
});

export const { setStarships, setNext } = starshipsSlice.actions;
export const { setStarshipsDetails } = starshipsSlice.actions

export default starshipsSlice.reducer;

export const fetchStarships = () => async (dispatch: Function, getState: Function) => {
    const { next } = getState().starships;

    if (next) {
        const response = await axios.get(next);
        const currentStarships = getState().starships.list;
        const newStarships = currentStarships.concat(response.data.results);

        dispatch(setStarships(newStarships));
        dispatch(setNext(response.data.next));
    }
};

export const fetchStarshipsDetails = () => (dispatch: Function) => {
    axios.get("https://swapi.dev/api/starships/")
        .then((response) => {
            const foundStarship = response.data.results.find((el: Starship) => el.name === name);
            if (foundStarship) {
                axios.get(foundStarship.url)
                    .then((response) => {
                        setStarshipsDetails(response.data);
                    });
            }
        });
};
