import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		films: [],
		customers: [],
		owners: [],
		deals: [],
		alertText: ""
	},
	getters: {
		films: state => state.films,
		customer: state => state.customers,
		owners: state => state.owners,
		deals: state => state.deals
	},
	mutations: {
		'SET_FILMS'(state, films) {
			state.films = films;
		},
		'SET_CUSTOMERS'(state, customers) {
			state.customers = customers;
		},
		'SET_OWNERS'(state, owners) {
			state.owners = owners;
		},
		'SET_DEALS'(state, deals) {
			state.deals = deals;
		},
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		}
	},
	actions: {
		async getData(context) {
			try {
				let response = await api.film.getAll();
				context.commit('SET_FILMS', response.data );

				response = await api.customer.getAll();
				context.commit('SET_CUSTOMERS', response.data );

				response = await api.owner.getAll();
				context.commit('SET_OWNERS', response.data );

				response = await api.deal.getAll();
				context.commit('SET_DEALS', response.data );

			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
				throw error;
			}
		}
	}
});
