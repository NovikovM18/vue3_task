<template>
  <h1>task2</h1>
  <div class="content">
    <div class="task">
      <h2>Queue at the supermarket</h2>
      <p>The function takes two arguments:<br>1- Customers, an array of positive numbers representing the number of people in line. Every number indicates the amount of time required to serve one customer.<br>2-The number of cash registers, a positive number.
        The function should return a number, how much time is required in total.
        There is only one queue.
        The queue order never changes.
        We assume that the first person approaches the cash register as soon as it is freed.
      </p>
    </div>
    <div class="demo">
      <input type="text" v-model="guestsNumber">
      <input type="text" v-model="checkout">
      <button @click="toCount">COUNTING</button>
      <h2>result:</h2>
      <h3>{{ totalTime }}</h3>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        guestsNumber: '10, 2, 3, 3',
        checkout: 1,
        totalTime: 0
      }
    },
    methods: {
      toCount() {
        let biggest = this.guestsNumber
          .split(',')
          .sort((a, b) => b - a)[0];
          console.log(biggest);
        let sum = this.guestsNumber
          .split(',')
          .map(el => +el.trim())
          .reduce((sum, elem) => sum + elem, 0);

        this.totalTime = (sum / this.checkout) >= biggest ? sum / this.checkout : biggest;
      }
    }
  }
</script>