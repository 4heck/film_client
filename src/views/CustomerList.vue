<template>
	<div class="container">
		<form class="form-group mt-3">
			<table class="">
				<tr class="">
					<td><div class="">
						<input type="number" class="form-control" placeholder="ID" v-model="customerForm.id" />
					</div></td>
					<td><div class="">
						<input type="text" class="form-control" placeholder="Покупатель" v-model="customerForm.name" />
					</div></td>
					<td>
						<input type="submit" value="Добавить покупателя" class="btn btn-success ml-3" v-on:click="addCustomer(customerForm)"/>
					</td>
				</tr>
			</table>
		</form>
		<table class="table mt-3">
		  <tr class="">
		    <th>ID</th>
		    <th>Покупатель</th>
		    <th style="border-top: 0px;"></th>
		  </tr>
		  <tr v-for="item, i in customers">
		      <td v-if="editCustomer !== item.id">{{ item.id }}</td>
		      <td v-if="editCustomer !== item.id">{{ item.name }}</a></td>
					<td v-if="editCustomer !== item.id" style="border-top: 0px;">
						<button class="btn btn-edit" v-on:click="editCustomer = item.id">
  						<img src="../../static/img/edit.png" height="12px"/>
 					 </button>

						<button class="btn btn-edit" v-on:click="deleteCustomer(item.id)">
							<img src="../../static/img/delete.png" height="12px"/>
						</button>
					</td>
	        <td v-if="editCustomer === item.id"><input type="number" class="form-control" v-model="item.id" /></td>
	        <td v-if="editCustomer === item.id"><input class="form-control" v-model="item.name" /></td>
	        <td v-if="editCustomer === item.id" style="border-top: 0px;">
						<button class="btn btn-success" v-on:click="updateCustomer(item)">
							Сохранить
						</button>
					</td>
					<td v-if="editCustomer === item.id" style="border-top: 0px;">
						<button class="btn btn-edit" v-on:click="disableEdit(item.id)">
							<img src="../../static/img/disableedit.png" height="20px"/>
						</button>
					</td>
		  </tr>
		</table>
	</div>
</template>

<script>
	import { apiUrl } from "../config";
	import { mapState } from 'vuex';

	export default {
		data(){
			return {
				apiUrl,
				editCustomer: null,
				customerForm: {
					id: "",
					name: "",
				}
			}
		},
		mounted() {
			this.$nextTick(async () => {
				if (this.customers.length === 0) {
					this.$router.push({name: "loader"});
				}
			});
		},
		methods: {
			deleteCustomer(id, i) {
				fetch("http://localhost:5000/api/customer/" + id, {
					method: "DELETE",
					mode: 'cors'
				})
				.then(() => {
					this.customers.splice(i, 1);
				})
			},
			updateCustomer(customer) {
				fetch("http://localhost:5000/api/customer/" + customer.id, {
					body: JSON.stringify(customer),
					method: "PUT",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(() => {
					this.editCustomer = null;
				})
			},
			addCustomer(customer) {
				fetch("http://localhost:5000/api/customer", {
					body: JSON.stringify(customer),
					method: "POST",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				});
			},
			disableEdit(customer) {
				this.editCustomer = null;
			}
		},
		computed: {
			...mapState({
				customers: state => state.customers
			})
		}
	}
</script>
