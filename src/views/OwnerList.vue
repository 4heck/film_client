<template>
	<div class="container">
		<form class="form-group mt-3">
			<table class="">
				<tr class="">
					<td><div class="">
						<input type="number" class="form-control" placeholder="ID" v-model="ownerForm.id" />
					</div></td>
					<td><div class="">
						<input type="text" class="form-control" placeholder="Покупатель" v-model="ownerForm.name" />
					</div></td>
					<td>
						<input type="submit" value="Добавить владельца" class="btn btn-success ml-3" v-on:click="addOwner(ownerForm)"/>
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
		  <tr v-for="item, i in owners">
		      <td v-if="editOwner !== item.id">{{ item.id }}</td>
		      <td v-if="editOwner !== item.id">{{ item.name }}</a></td>
					<td v-if="editOwner !== item.id" style="border-top: 0px;">
						<button class="btn btn-edit" v-on:click="editOwner = item.id">
  						<img src="../../static/img/edit.png" height="12px"/>
 					 </button>

						<button class="btn btn-edit" v-on:click="deleteOwner(item.id)">
							<img src="../../static/img/delete.png" height="12px"/>
						</button>
					</td>
	        <td v-if="editOwner === item.id"><input type="number" class="form-control" v-model="item.id" /></td>
	        <td v-if="editOwner === item.id"><input class="form-control" v-model="item.name" /></td>
	        <td v-if="editOwner === item.id" style="border-top: 0px;">
						<button class="btn btn-success" v-on:click="updateOwner(item)">
							Сохранить
						</button>
					</td>
					<td v-if="editOwner === item.id" style="border-top: 0px;">
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
				editOwner: null,
				ownerForm: {
					id: "",
					name: "",
				}
			}
		},
		mounted() {
			this.$nextTick(async () => {
				if (this.owners.length === 0) {
					this.$router.push({name: "loader"});
				}
			});
		},
		methods: {
			deleteOwner(id, i) {
				fetch("http://localhost:5000/api/owner/" + id, {
					method: "DELETE",
					mode: 'cors'
				})
				.then(() => {
					this.owners.splice(i, 1);
				})
			},
			updateOwner(owner) {
				fetch("http://localhost:5000/api/owner/" + owner.id, {
					body: JSON.stringify(owner),
					method: "PUT",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(() => {
					this.editOwner = null;
				})
			},
			addOwner(owner) {
				fetch("http://localhost:5000/api/owner", {
					body: JSON.stringify(owner),
					method: "POST",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				});
			},
			disableEdit(owner) {
				this.editOwner = null;
			}
		},
		computed: {
			...mapState({
				owners: state => state.owners
			})
		}
	}
</script>
