<template>
  <h1>task3</h1>
  <div class="content">
    <div class="task">
      <h2>Next bigger number</h2>
      <p>Function that accepts a positive number and returns it the next larger number formed from the same digits.</p>
    </div>
    <div class="demo">
      <input type="text" v-model="start">
      <button @click="nextPermutation">go</button>
      <h2>result:</h2>
      <h3>{{ next }}</h3>
    </div>
  </div>
</template>

<script>
export default {
      data() {
      return {
        start: '',
        next: ''
      }
    },
    methods: {
      nextPermutation() {
        let array = this.start.split('');
        let i = array.length - 1;
        while (i > 0 && array[i - 1] >= array[i]) {
          i--;
        }
        if (i <= 0) {
          return this.next = '-1';
        }
          
        let j = array.length - 1;
        while (array[j] <= array[i - 1]) {
          j--;
        }
        let k = array[i - 1];
        array[i - 1] = array[j];
        array[j] = k;
        
        j = array.length - 1;
        while (i < j) {
            k = array[i];
            array[i] = array[j];
            array[j] = k;
            i++;
            j--;
        }
        return this.next = array.join('');
      }
    }
}
</script>