import * as types from './ParksActionTypes';

const initialPark = {
	serviceOrderId: "",
	plate: "",
	typePrice: "",
	entryDateTime: "",
	exitDateTime: "",
	situationId: 0,
	situationName: "",
	amount: "",
	amountServices: "",
	services: [],
	period: {
		y: 0,
		m: 0,
		d: 0,
		h: 0,
		i: 0,
		s: 0,
		minutes: 0
	},
	amountTotal: 0
};

const initialSearchField = {
	situationId: "",
	startDate: new Date(),
	endDate: new Date()
};

const initialState = {
	parks: [],
	selectedPark: initialPark,
	operationSituations: [],
	searchFields: initialSearchField
};

const ParksReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.PARKS_FETCHED:
			return {
				...state,
				parks: action.parks
			};
		case types.PARK_SELECTED:
			return {
				...state,
				selectedPark: action.park
			};
		case types.FILTERS_FETCHED:
			return {
				...state,
				operationSituations: action.operationSituations
			};
		case types.SEARCH_FIELDS_CHANGE:
			return {
				...state,
				searchFields: {
					...state.searchFields,
					[action.event.target.name]: action.event.target.value
				}
			};
		case types.SET_SELECTED_PARK:
			return {
				...state,
				selectedPark: action.park
			};

		default:
			return state;
	}
};


export default ParksReducer;