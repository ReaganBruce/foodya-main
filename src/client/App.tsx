import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Other Routes
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import BecomeVendor from './pages/BecomeVendor';

//User Routes
import UserProfile from './pages/UserProfile';
import UserFavorites from './pages/UserFavorites';
import FavoriteVendor from './pages/FavoriteVendor';

//Vendor Routes
import VendorLogin from './pages/VendorLogin';
import VendorProfile from './pages/VendorProfile';


const App: React.FC<IAppProps> = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					//localhost:3000/
					<Route exact path = '/'>	
						<Home />
					</Route>
					//localhost:3000/about
					<Route exact path = '/about'>	
						<About />
					</Route>
					//localhost:3000/contact
					<Route exact path = '/contact'>	
						<Contact />
					</Route>
					//localhost:3000/becomevendor
					<Route exact path = '/becomevendor'>	
						<BecomeVendor />
					</Route>
					//localhost:3000/login
					<Route exact path = '/login'>	
						<Login />
					</Route>
					//localhost:3000/login/profile
					<Route exact path = '/login/profile'>	
						<UserProfile />
					</Route>
					//localhost:3000/login/favorites
					<Route exact path = '/login/favorites'>	
						<UserFavorites />
					</Route>
					//localhost:3000/login/favorites/:vendorid
					<Route exact path = '/login/favorites/:vendorid'>	
						<FavoriteVendor />
					</Route>
					//localhost:3000/login/vendor
					<Route exact path = '/login/vendor'>	
						<VendorLogin />
					</Route>
					//localhost:3000/login/vendor/profile
					<Route exact path = '/login/vendor/profile'>	
						<VendorProfile />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
};





interface IAppProps { }


export default App;
