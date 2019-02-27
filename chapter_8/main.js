Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>
	`,

	data() {
		return {
			tasks: [
				{ task: 'Go to the store.', complete: true },
				{ task: 'Play chess for 10 minutes.', complete: false },
				{ task: 'Revised Manuel blog.', complete: false },
				{ task: 'Pray for 30 minutes.' complete: true }
			]
		};
	}
});

Vue.component('task', {
	template: `
		<li>
			<slot>
			</slot>
		</li>
	`
});

new Vue({
	el: '#root'
});