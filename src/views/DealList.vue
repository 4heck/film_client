<template>
	<div class="container">
		<form class="form-group mt-3">
			<table class="">
				<tr class="">
					<td><div class="">
						<input type="number" class="form-control" placeholder="ID" v-model="dealForm.id" />
					</div></td>
					<td><div class="">
						<input type="text" class="form-control" placeholder="Машина" v-model="dealForm.film" />
					</div></td>
          <td><div class="">
            <input type="text" class="form-control" placeholder="Владелец" v-model="dealForm.owner" />
          </div></td>
          <td><div class="">
            <input type="text" class="form-control" placeholder="Покупатель" v-model="dealForm.customer" />
          </div></td>
					<td>
						<input type="submit" value="Добавить сделку" class="btn btn-success ml-3" v-on:click="addDeal(dealForm)"/>
					</td>
				</tr>
			</table>
		</form>
		<table class="table mt-3">
		  <tr class="">
		    <th>ID</th>
		    <th>Машина</th>
        <th>Владелец</th>
        <th>Покупатель</th>
		    <th style="border-top: 0px;"></th>
		  </tr>
		  <tr v-for="item, i in deals">
		      <td v-if="editDeal !== item.id">{{ item.id }}</td>
		      <td v-if="editDeal !== item.id">{{ item.film }}</td>
          <td v-if="editDeal !== item.id">{{ item.owner }}</td>
          <td v-if="editDeal !== item.id">{{ item.customer }}</td>
					<td v-if="editDeal !== item.id" style="border-top: 0px;">
						<button class="btn btn-edit" v-on:click="editDeal = item.id">
  						<img src="../../static/img/edit.png" height="12px"/>
 					 </button>

						<button class="btn btn-edit" v-on:click="deleteDeal(item.id)">
							<img src="../../static/img/delete.png" height="12px"/>
						</button>
					</td>
	        <td v-if="editDeal === item.id"><input type="number" class="form-control" v-model="item.id" /></td>
	        <td v-if="editDeal === item.id"><input class="form-control" v-model="item.film" /></td>
          <td v-if="editDeal === item.id"><input class="form-control" v-model="item.owner" /></td>
          <td v-if="editDeal === item.id"><input class="form-control" v-model="item.customer" /></td>
	        <td v-if="editDeal === item.id" style="border-top: 0px;">
						<button class="btn btn-success" v-on:click="updateDeal(item)">
							Сохранить
						</button>
					</td>
					<td v-if="editDeal === item.id" style="border-top: 0px;">
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
				editDeal: null,
				dealForm: {
					id: "",
					film: "",
          owner: "",
          customer: ""
				}
			}
		},
		mounted() {
			this.$nextTick(async () => {
				if (this.deals.length === 0) {
					this.$router.push({name: "loader"});
				}
			});
		},
		methods: {
			deleteDeal(id, i) {
				fetch("http://localhost:5000/api/deal/" + id, {
					method: "DELETE",
					mode: 'cors'
				})
				.then(() => {
					this.deals.splice(i, 1);
				})
			},
			updateDeal(deal) {
				fetch("http://localhost:5000/api/deal/" + deal.id, {
					body: JSON.stringify(deal),
					method: "PUT",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(() => {
					this.editDeal = null;
				})
			},
			addDeal(deal) {
				fetch("http://localhost:5000/api/deal", {
					body: JSON.stringify(deal),
					method: "POST",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				});
			},
			disableEdit(deal) {
				this.editDeal = null;
			}
		},
		computed: {
			...mapState({
				deals: state => state.deals
			})
		}
	}
</script>
