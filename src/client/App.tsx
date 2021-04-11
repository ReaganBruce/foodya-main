import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Utils Routes
import Nav from './components/Nav';


//Other Routes
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register"
import About from './pages/About';
import Contact from './pages/Contact';
import BecomeVendor from './pages/BecomeVendor';
import Trucks from './pages/Trucks';
import TruckDetails from './pages/TruckDetails';
import Recommendations from "./pages/Recommendation"

//User Routes
import UserProfile from './pages/UserProfile';
import UserFavorites from './pages/UserFavorites';
import VendorDetails from './pages/VendorDetails';

//Vendor Routes
import VendorLogin from './pages/VendorLogin';
import VendorProfile from './pages/VendorProfile';
import NavBar from "./components/NavBar"
import PrivateRouter from "./components/PrivateRouter"


const App: React.FC<IAppProps> = () => {
	return (
		<>
			<BrowserRouter>
			<NavBar />
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
					<Route exact path = '/become-a-vendor'>	
						<BecomeVendor />
					</Route>
					//localhost:3000/trucks
					<Route exact path = '/trucks'>	
						<Trucks />
					</Route>
					//localhost:3000/trucks/:truckdetailsid
					<Route exact path = '/trucks/:truckdetailsid'>	
						<TruckDetails />
					</Route >
					//localhost:3000/trucks/recommendations
					<PrivateRouter exact path = '/recommendations'>
						<Recommendations />
					</PrivateRouter>
					<Route exact path = '/login'>	
						<Login />
					</Route>
					<Route exact path = '/register'>	
						<Register />
					</Route>
					//localhost:3000/login/profile
					<PrivateRouter exact path = '/login/profile'>	
						<UserProfile />
					</PrivateRouter>
					//localhost:3000/login/favorites
					<PrivateRouter exact path = '/login/favorites'>	
						<UserFavorites />
					</PrivateRouter>
					//localhost:3000/login/favorites/:vendorid
					<PrivateRouter exact path = '/login/favorites/:vendorid'>	
						<VendorDetails />
					</PrivateRouter>
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
