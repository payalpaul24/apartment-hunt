import logo from './logo.svg';
import './App.scss';
import Home from './component/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseDetails from './component/Home/HouseDetails/HouseDetails';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import MyRent from './component/Dashboard/MyRent/MyRent';
import BookingList from './component/Dashboard/BookingList/BookingList';
import AddHouse from './component/Dashboard/AddHouse/AddHouse';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

	const [loggedInUser, setLoggedInUser] = useState({});

	const globalStates = {
		user: [loggedInUser, setLoggedInUser],

	};

	return (
		<UserContext.Provider value={globalStates}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<PrivateRoute path="/dashboard">
						<Dashboard></Dashboard>
					</PrivateRoute>
					<PrivateRoute path="/myRent">
						<MyRent></MyRent>
					</PrivateRoute>
					<PrivateRoute path="/bookingList">
						<BookingList></BookingList>
					</PrivateRoute>
					<PrivateRoute path="/addRentHouse">
						<AddHouse></AddHouse>
					</PrivateRoute>
					<PrivateRoute path="/houseDetails/:_id">
						<HouseDetails></HouseDetails>
					</PrivateRoute>
					<Route exact path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
