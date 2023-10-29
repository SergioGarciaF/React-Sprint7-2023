import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Starship {
    name: string;
    model: string;
}

export interface StarshipsState {
    list: Starship[];
}

const initialState: StarshipsState = {
    list: []
};

const starshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        setStarships: (state, action: PayloadAction<Starship[]>) => {
            state.list = action.payload;
        },
        setStarshipsDetails: (state, action: PayloadAction<Starship[]>) => {
            state.list = action.payload;
        }
    }
});

export const { setStarships } = starshipsSlice.actions;
export const { setStarshipsDetails } = starshipsSlice.actions

export default starshipsSlice.reducer;

export const fetchStarships = (url = 'https://swapi.dev/api/starships/') => async (dispatch: Function, getState: Function) => {
    const response = await axios.get(url);
    const currentStarships = getState().starships.list;
    const newStarships = currentStarships.concat(response.data.results);

    dispatch(setStarships(newStarships));

    if (response.data.next) {
        dispatch(fetchStarships(response.data.next));
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
