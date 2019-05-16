import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";
import FilmList from "./views/FilmList";
import CustomerList from "./views/CustomerList";
import OwnerList from "./views/OwnerList";
import DealList from "./views/DealList";
import Error from "./views/Error";

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/films", component: App, children: [
			{ path: "", name: "filmList", component: FilmList },
		]},
		{ path: "/customers", component: App, children: [
			{ path: "", name: "customerList", component: CustomerList },
		]},
		{ path: "/owners", component: App, children: [
			{ path: "", name: "ownerList", component: OwnerList },
		]},
		{ path: "/deals", component: App, children: [
			{ path: "", name: "dealList", component: DealList },
		]},
		{ path: "/error", name: "error", component: Error }
	]
});
