const WeekView = Vue.component("week-view", {
  template: `
<div>
  <div class="container">
    <ul class="grid day-grid">
      <li v-for="day in days" class="day-grid-item"> {{ day }} </li>
    </ul>
    <ul class="grid date-grid">
      <li class="date-grid-item" v-for="date in week" :class="date === today ? 'highlight': ''"> {{ date }}</li>
    </ul>
  </div>
</div>
  `,
  props: ["week", "days", "month", "today"]
});

new Vue({
  el: "#app",
  data: {
    month: "",
    week: [],
    days: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    today: 0
  },
  methods: {
    generateWeek() {
      let date = new Date();
      this.today = date.getDate();
      for (let i = 1; i <= 7; i++) {
        let first = date.getDate() - date.getDay() + i;
        this.week.push(first);
      }
    }
  },
  component: {
    WeekView
  },
  mounted() {
    this.month = new Date().getMonth() + 1;
    this.generateWeek();
  }
});
