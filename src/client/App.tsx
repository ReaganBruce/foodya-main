import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';


const App: React.FC<IAppProps> = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path = '/'>	
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
};





interface IAppProps { }


export default App;
