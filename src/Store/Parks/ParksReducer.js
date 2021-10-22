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
	parks: [{ "serviceOrderId": "3039AJA645620211011133334", "plate": "AJA6456", "typePrice": "Carro", "entryDateTime": "2021-10-11 13:33:34", "exitDateTime": "2021-10-11 13:33:38", "situationId": 2, "situationName": "Fora do p\u00e1tio", "amount": "5.00", "amountServices": "0.00", "services": [], "period": { "y": 0, "m": 0, "d": 0, "h": 0, "i": 0, "s": 4, "minutes": 0 }, "amountTotal": 5 }],
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