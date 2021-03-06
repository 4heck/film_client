import { apiUrl } from "./config";

export default {
	film: {
		resourceUrl: "film",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
	customer: {
		resourceUrl: "customer",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
	owner: {
		resourceUrl: "owner",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
	deal: {
		resourceUrl: "deal",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
};
