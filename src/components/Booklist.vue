<template>

	<div style="min-height: 100vh; width:100%;display: flex;flex-direction: column;">
		<div style="text-align: center;height: 100px;font-size: 50px;color: black;">所有书籍</div>
		<div style="height: 100% ;padding: 20px;display: flex;flex-direction: row;">
			<div v-for="(item, index) in allBooks" style="margin-right: 30px;display: flex;flex-direction: column;" @click="getBook(item.id)">
				<div style="width: 100px;height: 100px;">
					<img :src="item.cover" style="width: 100%;height: 100%;">
				</div>
				<div style="flex: 1;">
					<div style="font-size: 20px;">{{ item.name }}</div>
				</div>
			</div>
		</div>
	</div>


	<!-- <li @click="getBook()">
		<img :src="imgUrl">
		<div class="book-info">
			<p class="book-title">{{book.title}}</p>
			<p class="book-author">{{book.author}} | {{book.cat}}</p>
			<p class="short-intro">{{book.shortIntro}}</p>
			<p class="reader-info">{{latelyFollower}}万人气 | {{book.retentionRatio}}%读者留存</p>
		</div>
	</li> -->
</template>

<script>
// import util from '@/utils/util'
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
			this.$router.push('/reader/' + _id)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
img {
	width: 4rem;
	height: 5rem;
	float: left;
	margin-right: 0.4rem;
}

li {
	margin-left: 1rem;
	margin-right: 1rem;
	border-bottom: 1px solid #e6dbdb;
	padding-bottom: 0.2rem;
	padding-top: 0.2rem;
}

li:active,
li:focus {
	background: #f2f2f2;
}

.book-info {
	box-sizing: border-box;
	width: 100%;
	height: 5rem;
	padding-left: 5rem;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
}

.book-title {
	font-weight: bold;
}

.short-intro {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #655555;
}

.book-author {
	color: #655555;
}

.book-info p {
	margin-top: 0;
	margin-bottom: 0;
	font-size: 0.7rem;
	line-height: 1.2rem;
}
</style>
