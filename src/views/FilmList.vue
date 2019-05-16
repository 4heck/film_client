<template>
	<div class="container">
		<form class="form-group mt-3">
			<table class="">
				<tr class="">
					<td><div class="">
						<input type="number" class="form-control" placeholder="ID" v-model="filmForm.id" />
					</div></td>
					<td><div class="">
						<input type="text" class="form-control" placeholder="Название" v-model="filmForm.name" />
					</div></td>
					<td><div class="">
						<input type="number" class="form-control" placeholder="Год" v-model="filmForm.year" />
					</div></td>
					<td><div class="">
						<input type="number" step="0.01" class="form-control" placeholder="Продолжительность" v-model="filmForm.duration" />
					</div></td>
					<td>
						<input type="submit" value="Добавить фильм" class="btn btn-success ml-3" v-on:click="addFilm(filmForm)"/>
					</td>
				</tr>
			</table>
		</form>
		<table class="table mt-3">
		  <tr class="">
		    <th>ID</th>
		    <th>Название</th>
		    <th>Год</th>
		    <th>Продолжительность</th>
		    <th style="border-top: 0px;"></th>
		  </tr>
		  <tr v-for="item, i in films">
		      <td v-if="editFilm !== item.id">{{ item.id }}</td>
		      <td v-if="editFilm !== item.id">{{ item.name }}</a></td>
		      <td v-if="editFilm !== item.id">{{ item.year }}</td>
		      <td v-if="editFilm !== item.id">{{ item.duration }}</td>
					<td v-if="editFilm !== item.id" style="border-top: 0px;">
						<button class="btn btn-edit" v-on:click="editFilm = item.id">
  						<img src="../../static/img/edit.png" height="12px"/>
 					 </button>

						<button class="btn btn-edit" v-on:click="deleteFilm(item.id)">
							<img src="../../static/img/delete.png" height="12px"/>
						</button>
					</td>
	        <td v-if="editFilm === item.id"><input type="number" class="form-control" v-model="item.id" /></td>
	        <td v-if="editFilm === item.id"><input class="form-control" v-model="item.name" /></td>
	        <td v-if="editFilm === item.id"><input class="form-control" v-model="item.year" /></td>
	        <td v-if="editFilm === item.id"><input class="form-control" v-model="item.duration" /></td>
	        <td v-if="editFilm === item.id" style="border-top: 0px;">
						<button class="btn btn-success" v-on:click="updateFilm(item)">
							Сохранить
						</button>
					</td>
					<td v-if="editFilm === item.id" style="border-top: 0px;">
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
				editFilm: null,
				filmForm: {
					id: "",
					name: "",
					year: "",
					duration: "",
				}
			}
		},
		mounted() {
			this.$nextTick(async () => {
				if (this.films.length === 0) {
					this.$router.push({name: "loader"});
				}
			});
		},
		methods: {
			deleteFilm(id, i) {
				fetch("http://localhost:5000/api/film/" + id, {
					method: "DELETE",
					mode: 'cors'
				})
				.then(() => {
					this.films.splice(i, 1);
				})
			},
			updateFilm(film) {
				fetch("http://localhost:5000/api/film/" + film.id, {
					body: JSON.stringify(film),
					method: "PUT",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(() => {
					this.editFilm = null;
				})
			},
			addFilm(film) {
				fetch("http://localhost:5000/api/film", {
					body: JSON.stringify(film),
					method: "POST",
					mode: 'cors',
					headers: {
						"Content-Type": "application/json",
					},
				});
			},
			disableEdit(film) {
				this.editFilm = null;
			}
		},
		computed: {
			...mapState({
				films: state => state.films
			})
		}
	}
</script>
