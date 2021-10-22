import api from '../../Services/api';
import * as types from './ParksActionTypes';
import { format } from 'date-fns';

export const getParks = (search) => {
    const params = {
        situationId: `situationId=${search && (search.situationId || "")}`,
        startDate: `&startDate=${search && (format(search.startDate, 'yyyy-MM-dd') || "")}`,
        endDate: `&endDate=${search && (format(search.endDate, 'yyyy-MM-dd') || "")}`
    };
    return (dispatch) => {
        api.get(`/react/test/serviceorders?${Object.values(params).join("")}`)
            .then((response) => {
                const { data: parks } = response.data;
                dispatch(parksFetched(parks));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getFilters = () => {
    return (dispatch) => {
        api.get("/react/test/filters")
            .then((response) => {
                const { operationSituations } = response.data.data;
                console.log(operationSituations);
                dispatch(filtersFetched(operationSituations));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const parksFetched = (parks) => ({
    type: types.PARKS_FETCHED,
    parks
});

export const filtersFetched = (operationSituations) => ({
    type: types.FILTERS_FETCHED,
    operationSituations
});

export const handleSearchFieldsChange = (event) => ({
    type: types.SEARCH_FIELDS_CHANGE,
    event
});

export const setSelectedPark = (park) => ({
    type: types.SET_SELECTED_PARK,
    park
});