<template>

	<div>
		<div class="banner">
			<!-- <div style="text-align: center;height: 100px;font-size: 50px;color: black;">所有书籍</div> -->
			<h2 id="text">所有书籍</h2>
			<div class="clouds">
				<img src="@/assets/images/cloud1.png" style="--i:1;">
				<img src="@/assets/images/cloud2.png" style="--i:1;">
				<img src="@/assets/images/cloud3.png" style="--i:1;">
				<img src="@/assets/images/cloud4.png" style="--i:1;">
				<img src="@/assets/images/cloud5.png" style="--i:1;">
				<img src="@/assets/images/cloud1.png" style="--i:1;">
				<img src="@/assets/images/cloud2.png" style="--i:1;">
				<img src="@/assets/images/cloud3.png" style="--i:1;">
				<img src="@/assets/images/cloud4.png" style="--i:1;">
				<img src="@/assets/images/cloud5.png" style="--i:1;">
			</div>
		</div>

		<div style="height: 100%;padding: 50px;display: flex;flex-direction: row;background-color:#F5F5F5;">
			<div v-for="(item, index) in allBooks" style="margin-right: 30px;display: flex;flex-direction: column;"
				@click="getBook(item.id)">
				<div style="width: 100px;height: 100px;">
					<img :src="item.cover" style="width: 100%;height: 100%;">
				</div>
				<div style="flex: 1;">
					<div style="font-size: 20px;">{{ item.name }}</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>


export default {
	name: 'Bookslist',

	data() {
		return {
			allBooks: [
				{
					name: '红楼梦',
					cover: '',
					id: '28',
				},
				{
					name: '西游记',
					cover: '',
					id: '2',
				}
			],
		}
	},
	created() {
		this.Move();
	},
	mounted() {
		let text = document.getElementById('text');
		window.addEventListener('scroll', function () {
			let value = window.scrollY;
			text.style.marginBotton = value * 2 + 'px';
		});
	},
	props: ['book'],
	computed: {
		// latelyFollower () {
		//   return (this.book.latelyFollower / 10000).toFixed(1)
		// },
		// imgUrl () {
		//   return util.staticPath + this.book.cover
		// }
	},
	methods: {
		getBook(_id) {
			this.$router.push({
				path: '/reader/' + _id,
				params: {
					id: _id,
				}

			})
		},
		// 开启页面滚动
		Move() {
			let m = function (e) { e.preventDefault(); };
			document.body.style.overflow = '';//出现滚动条
			document.removeEventListener("touchmove", m, { passive: true });
		}

	}

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	overflow: scroll !important;
}

.banner {
	position: relative;
	width: 100%;
	height: 100vh;
	background: url('@/assets/images/bookbg.jpg');
	background-size: cover;
	background-position: bottom;
	display: flex;
	justify-content: center;
	align-items: center;
}

.banner #text {
	position: relative;
	font-size: 100px;
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

section {
	position: relative;
	padding: 75px 100px;
}

section h2 {
	position: relative;
	font-size: 2.5em;
	margin-bottom: 20px;
}
</style>
