import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import React from "react";
import SinglePageApplication from "./Container/SinglePageApplication";
import ptBRLocale from 'date-fns/locale/pt-BR';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBRLocale}>
			<SinglePageApplication />
			<ToastContainer />
		</LocalizationProvider>
	);
};

export default App;