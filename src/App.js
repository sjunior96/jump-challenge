import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import React from "react";
import SinglePageApplication from "./Container/SinglePageApplication";
import ptBRLocale from 'date-fns/locale/pt-BR';

const App = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBRLocale}>
			<SinglePageApplication />
		</LocalizationProvider>
	);
};

export default App;