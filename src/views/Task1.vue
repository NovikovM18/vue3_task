<template>
  <h1>task1</h1>
  <div class="content">
    <div class="task">
      <h2>String sort</h2>
      <p>Each word in the string will contain some digit.
        This number will mean the position that the word will take as a result. Numbers can be from 1 to 9. 1 will be the first word (not 0). If the tape is empty - return the empty tape. Words in the input stream will contain only valid values.<br>Tests:
        sortString(‘g5et ski3lls on6 use1 your2 to4 7top’)
        Output: ‘use1 your2 ski3lls to4 g5et on6 7top’
        sortString(‘’)
        Output: ‘’
      </p>
    </div>
    <div class="demo">
      <textarea name="" id="" cols="30" rows="3" v-model.trim="string"></textarea>
      <button @click="sortString">SORT</button>
      <h2>result:</h2>
      <h3>{{ sortingSrting }}</h3>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        string: 'g5et ski3lls on6 use1 your2 to4 7top',
        sortingSrting: ''
      }
    },
    methods: {
      sortString() {
        if (this.string === '') {
          this.sortingSrting = `''`;
        } else if (
          this.string.split(' ')
            .every(el => el.includes(1) || el.includes(2) || el.includes(3) || el.includes(4) || el.includes(5) || el.includes(6) || el.includes(7)  || el.includes(8)  || el.includes(9)  || el.includes(0))
        ) {
          this.sortingSrting = this.string.split(' ')
            .sort((a, b) => a.replace(/[^0-9, ]/g,"") - b.replace(/[^0-9, ]/g,""))
            .join(' ');
        } else {
          this.sortingSrting = 'set correct words with a NUMBER!!!';
        }
      }
    }
  }
</script>