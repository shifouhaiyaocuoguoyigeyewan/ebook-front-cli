<template>

	<div>
		<div class="banner" :style="{ background: 'url(' + host + '/static/images/bookbg.jpg)'}">
			<h2 id="text">所有书籍</h2>
			<div class="clouds">
				<img src="/static/images/cloud1.png" style="--i:1;">
				<img src="/static/images/cloud2.png" style="--i:1;">
				<img src="/static/images/cloud3.png" style="--i:1;">
				<img src="/static/images/cloud4.png" style="--i:1;">
				<img src="/static/images/cloud5.png" style="--i:1;">
				<img src="/static/images/cloud1.png" style="--i:1;">
				<img src="/static/images/cloud2.png" style="--i:1;">
				<img src="/static/images/cloud3.png" style="--i:1;">
				<img src="/static/images/cloud4.png" style="--i:1;">
				<img src="/static/images/cloud5.png" style="--i:1;">
			</div>
		</div>

		<div class="book_list" style="height: 100%;padding: 0% 20%;">
			<!-- 搜索框 -->
			<div style="display: flex;justify-content: center;">
				<el-input style="margin-top: 2%;" v-model="input_search" placeholder="输入书名">
				</el-input>
			</div>

					<!-- 书本呈现 -->
					<div style="display: flex;flex-direction: row;flex-wrap: wrap;position: relative;overflow: hidden;">
						<div id="test" v-for="(item, index) in allBooks"
							style="z-index: 50;max-width: 150px;margin-left: 25px;margin-right: 18px;margin-top: 10px;  ">
							<div class="book" style="height: 260px; " v-if="item.name.indexOf(input_search) != -1">

								<div style="background: rgb(255, 255, 255);height: 90%;cursor: pointer;"
									@click="getBook(item.id)">
									<img style="height: 90%;width: 100%;" :src="host + item.cover" alt="">
									<div class="book_name">{{ item.name }}</div>
								</div>

							</div>
						</div>

						<!-- 书架 -->
						<div id="bookshelf"
							style="">
							<div v-for="(item1, index1) in shelfNum">
							<!--  -->
								<div v-if="index1 == 0" class="shelf-bg-first" :style="{ background: 'url(' + host + '/static/images/banner_shelf.jpg)','background-size': '100% 100%'}"></div>
								<div v-if="index1 != 0" class="shelf-bg" :style="{ background: 'url(' + host + '/static/images/banner_shelf.jpg)','background-size': '100% 100%'}"></div>
							</div>
						</div>
					</div>

		</div>
	</div>

</template>

<script>
import axios from 'axios';
import host from "../utils/host";
export default {
	name: 'Bookslist',
	components: {
	},
	data() {
		return {
			input_search: "",
			host,
			allBooks: [],
			shelfNum: 0,
		}
	},
	created() {
		this.Move();
		this.getAllBooks();
		
	},
	mounted() {
		let text = document.getElementById('text');
		window.addEventListener('scroll', function () {
			let value = window.scrollY;
			text.style.marginBotton = value * 2 + 'px';
		});
	},
	// props: ['book'],
	computed: {
	},
	methods: {
		// 路由跳转
		getBook(_id) {
			this.$router.push({
				path: '/reader/' + _id,
				params: {
					id: _id,
				}
			})
		},
		// 得到所有书籍信息
		getAllBooks() {
			var _this = this;
			axios({
				method: "get",
				url: '/book/list',
			}).then((res) => {
				// console.log("res", res);
				if (res.data.code == 200) {
					_this.allBooks = res.data.data;
					_this.shelfNum = Math.ceil(this.allBooks.length / 6);
				}
			})
		},
		// 开启页面滚动
		Move() {
			let m = function (e) { e.preventDefault(); };
			document.body.style.overflow = '';//出现滚动条
			document.removeEventListener("touchmove", m, { passive: true });
		},
	}
}
</script>

<style scoped>
body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	overflow: scroll !important;
}

@media only screen and (min-width:1880px) and (max-width:1930px) {
	#bookshelf{
		visibility: visible;
		position: absolute;
		display: flex; 
		flex-direction: column;
		width: 100%;
		overflow: hidden;
		padding-top: 4.5px;
	}
}

.book_list {
	background: linear-gradient(-45deg, #ffffff, #f1f7f4f1, #c7c3c0c0, #6e6b6ada);
	animation: gradientBG 10s ease infinite;
	background-size: 400% 400%;
}

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
}

.shelf-bg {
	width: 100%;
	height: 90px;
	background-size: 100% 100%;
	overflow: hidden;
	margin-top: 15.8%;
}

.shelf-bg-first {
	/* width: 100%; */
	height: 90px;
	/* background: url("http://159.75.201.225:8000/static/images/banner_shelf.jpg"); */
	background-size: 100% 100%;
	overflow: hidden;
	margin-top: 17.7%;
}

.banner {
	position: relative;
	width: 100%;
	height: 100vh;
	background-size: cover;
	background-position: bottom;
	display: flex;
	justify-content: center;
	align-items: center;
}

.banner #text {
	position: relative;
	font-size: 88px;
	color: #fff;
	margin-bottom: 10%;
}

.banner .clouds {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	pointer-events: none;
}

.banner .clouds img {
	position: absolute;
	bottom: 0;
	max-width: 100%;
	animation: animate calc(3s * var(--i)) linear infinite;
}

@keyframes animate {
	0% {
		opacity: 0;
		transform: scale(1);
	}

	25%,
	79% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		transform: scale(3);
	}
}

.book {
	width: 100%;
}

.book_name {
	height: 10%;
	width: 90%;
	margin: 0px 7px;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: bold;
	font-family: Georgia, "Times New Roman", Times, serif;
}
</style>