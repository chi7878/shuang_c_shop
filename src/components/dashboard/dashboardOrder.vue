<template>
	<main>
		<aside
			class="alert_message_error"
			:class="{ alert_message_error_anim: error_anim == true }"
			v-if="error_anim == true"
		>
			<div class="text-dark">
				<p class="h1 text-center"><i class="far fa-dizzy"></i></p>
				<p>錯誤!請重新整理或重新登入</p>
			</div>
		</aside>

		<section class="container-fluid">
			<article class="row align-self-stretch">
				<dashboardmenu></dashboardmenu>
				<section class="col-12 col-sm-10 deashboard_content pt-5 px-3 pl-sm-4 mb-5 mb-sm-0">
					<article class="text-content d-flex  flex-column flex-sm-row align-items-center pb-3">
						<h1 class=" mr-3">後台管理</h1>
						<p class="h5 px-3 py-2 title_text">產品訂單</p>
					</article>
					<dashboardstatistic></dashboardstatistic>
					<article class="table-responsive mt-3 p-2 px-sm-3 py-4">
						<table class="table table-striped table-sm table_lsit">
							<thead>
								<tr>
									<th width="80" class="text-center">狀態</th>
									<th width="120" class="text-center">收件人</th>
									<th width="180" class="text-center">手機號碼</th>
									<th>收件地址</th>
									<th width="100" class="text-center">商品數量</th>
									<th width="130" class="text-center">總金額</th>
									<th width="130" class="text-center"></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in order_data_list" :key="item.id">
									<td class="text-center">
										<span class="text-primary" v-if="item.is_paid == true">待出貨</span>
										<span class="text-danger" v-else>待付款</span>
									</td>
									<td class="text-center">{{ item.user.name }}</td>
									<td class="text-center">{{ item.user.tel }}</td>
									<td>{{ item.user.address }}</td>
									<td class="text-center">{{ Object.keys(item.products).length }}個商品</td>
									<td class="text-center">{{ item.total | currency }}</td>
									<td class="text-center">
										<a
											href="#"
											class="btn btn-outline-primary btn-sm"
											@click.prevent="orderContent(item.id)"
											>詳細資訊</a
										>
									</td>
								</tr>
							</tbody>
							<tbody v-if="sm_loading == true">
								<td>
									<p class="h4 text-black-50"><i class="fas fa-circle-notch fa-spin"></i></p>
								</td>
							</tbody>
						</table>

						<nav aria-label="Page navigation example" v-if="pages.total_pages > 1">
							<ul class="pagination ">
								<li class="page-item" :class="{ disabled: !pages.has_pre }">
									<a
										class="page-link"
										href="#"
										aria-label="Previous"
										@click.prevent="product_data(pages.current_page - 1)"
									>
										<i class="fas fa-angle-left"></i>
									</a>
								</li>
								<li
									class="page-item"
									:class="{ active: pages.current_page == item }"
									v-for="(item, index) in pages.total_pages"
									:key="index"
								>
									<a class="page-link" href="#" @click.prevent="product_data(item)">{{ item }}</a>
								</li>
								<li class="page-item" :class="{ disabled: !pages.has_next }">
									<a
										class="page-link"
										href="#"
										aria-label="Next"
										@click.prevent="product_data(pages.current_page + 1)"
									>
										<i class="fas fa-chevron-right"></i>
									</a>
								</li>
							</ul>
						</nav>
					</article>
				</section>
			</article>
		</section>


    <!-- order content model -->
		<section
			class="modal fade"
			id="orderModal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<article class="modal-dialog modal-lg" role="document">
				<section class="modal-content border-0">
					<div class="modal-header bg-dark text-white">
						<h5 class="modal-title" id="exampleModalLabel">
							<span>新增產品</span>
						</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row justify-content-around">
							<div class="col-sm-6">
								<ul class="cart_click_lsit">
									<li class="py-2 d-flex" v-for="item in order_products" :key="item[0]">
										<img :src="item[1].product.imageUrl" width="50px" alt="" />
										<div class="flex-grow-1 ml-5 pt-3">
											<p class="d-flex justify-content-between mb-2">
												{{ item[1].product.title }}
												<span>{{ item[1].product.num }}{{ item[1].product.unit }}</span>
											</p>
											<p class="text-right m-0">{{ item[1].total | currency }}</p>
										</div>
									</li>
								</ul>
							</div>
							<div class="col-sm-6" v-if="is_model">
								<div class="d-flex justify-content-between mb-3">
									<p class="">收件人:</p>
									<p>{{ order_people_data.user.name }}</p>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<p class="">收件人電話:</p>
									<p>{{ order_people_data.user.tel }}</p>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<p class="">收件地址:</p>
									<p class="">{{ order_people_data.user.address }}</p>
								</div>
								<div class="d-flex justify-content-between mb-3">
									<p class="">收件人信箱:</p>
									<p>{{ order_people_data.user.email }}</p>
								</div>
								<hr class="mb-3" />
								<div class="d-flex justify-content-end mb-3">
									<p class="">購買金額:</p>
									<p>{{ order_people_data.total | currency }}</p>
								</div>
								<div class="d-flex justify-content-end mb-3">
									<p class="">目前狀態:</p>
									<p>
										<span class="text-primary" v-if="order_people_data.is_paid == true"
											>待出貨</span
										>
										<span class="text-danger" v-else>待付款</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
					</div>
				</section>
			</article>
		</section>
	</main>
</template>

<script>
import dashboardmenu from "./dashboard_template/dashboard_menu";
import dashboardstatistic from "./dashboard_template/dashboard_statistic";
import $ from "jquery";

export default {
	name: "HelloWorld",
	data() {
		return {
			order_data_list: [],
			order_products: [],
			order_people_data: {},
			pages: {},
			is_model: false,
			sm_loading: true,
			error_anim: false,
		};
	},
	methods: {
		orderData: function(page = 1) {

      //get order data
		const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/admin/orders?page=${page}`;
		const vm = this;

		this.$http.get(api).then(response => {
			if (response.data.success) {
				vm.sm_loading = false;
				vm.order_data_list = response.data.orders;
				vm.order_data_list.pop();
				vm.pages = response.data.pagination;
			} else {
				vm.error_anim = true;
			}
		});
		
		},
		orderContent: function(id) {

      //order content
			const api = `${process.env.VUE_APP_HTTPAPI}/api/${process.env.VUE_APP_PATHAPI}/order/${id}`;
			const vm = this;
			vm.sm_loading = false;
			this.$http.get(api).then(response => {
				vm.is_model = true;
				const data = response.data.order.products;
				if (response.data.success) {
					vm.sm_loading = true;
					vm.order_products = Object.entries(data);
					vm.order_people_data = response.data.order;
				}
			});
			$("#orderModal").modal("show");
		},
	},
	components: {
    dashboardmenu,
    dashboardstatistic
	},
	created() {
		this.orderData();
	},
};
</script>
