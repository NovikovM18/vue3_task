<template>
  <h1>main</h1>
  <div class="content">
    <div class="task">
      <h2>List of supported commands:</h2>
      <h3>add 2017-04-25 12 USD Jogurt</h3>
      <p>adds expense entry to the list of user expenses. Expenses for various dates could be added in any order. Command accepts following parameters:
      2017-04-25 — is the date when expense occurred
      12 — is an amount of money spent
      USD — the currency in which expense occurred
      Jogurt — is the name of product purchased</p>
      <h3>list</h3>
      <p>shows the list of all expenses sorted by date</p>
      <h3>clear 2017-04-25</h3>
      <p>removes all expenses for specified date, where:
        2017-04-25 — is the date for which all expenses should be removed</p>
      <h3>total PLN</h3>
      <p>this command calculate the total amount of money spent and present it to user in specified currency, where:
        PLN — is the currency in which total amount of expenses should be presented</p>
    </div>
    <div class="demo">
      
      <h2>demo</h2>
      
      <input type="text" v-model="start">
      
      <button @click="setCommand">ENTER</button>

      <h2 v-if="show === 'total'" >
        {{ totalSum }} {{ totalCurrency.cc }}
      </h2>

      <table
        v-if="show === 'list'" 
      >
        <thead>
          <tr>
            <th>date</th>
            <th>price</th>
            <th>currency</th>
            <th>product</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in list"
          >
            <td>
              <p>{{item.date}}</p>
            </td>
            <td>
              <p>{{item.price}}</p>
            </td>
            <td>
              <p>{{item.currency}}</p>
            </td>
            <td>
              <p>{{item.product}}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        show: '',
        start: 'list',
        totalSum:'',
        totalCurrency: {},
        list: [
          {date: '2017-04-25', price: 2, currency: 'USD', product: 'Jogurt'},
          {date: '2017-04-25', price: 3, currency: 'EUR', product: 'French fries'},
          {date: '2017-04-27', price: 4.75, currency: 'USD', product: 'Beer'},
          {date: '2017-04-26', price: 2.5, currency: 'PLN', product: 'Sweets'},
        ],
        currencies: []
      }
    },
    methods: {
      setCommand() {
        switch(this.start.split(' ')[0].toLowerCase()) {
          case 'add':
            this.show = '';
            this.list.push({
              date: this.start.split(' ')[1],
              price: this.start.split(' ')[2],
              currency: this.start.split(' ')[3],
              product: this.start.split(' ')[4]
            });
            break;
          case 'clear':
            this.show = '';
            this.list = this.list.filter(el => el.date !== this.start.split(' ')[1]);
            break;
          case 'total':
            this.show = 'total';
            let arr = [...this.list];
            this.totalCurrency = this.currencies.find(el => el.cc === this.start
              .split(' ')[1].toUpperCase());
            arr.map(el => {
              let elRate = this.currencies.find(e => e.cc === el.currency).rate;
              el.price = (el.price * elRate) / this.totalCurrency.rate;
              el.currency = this.start.split(' ')[1];
            })
            this.totalSum = arr.reduce((sum, elem) => sum + elem.price, 0).toFixed(2);
            break;
          case 'list':
            this.show = 'list';
            this.list = this.list.sort((a, b) => a.date.localeCompare(b.date));
            break;
          default:
            this.show = '';
            break;
        }
      },
      async getCurrency() {
        try {
          // const response = await axios.get('https://data.fixer.io/api/latest', {
            //   headers: {
              //     'apikey': 'IbxmlesGVlhJPQItxSF6wkjgKXZ0ejZH'}});
          // console.log(response);
          const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
          this.currencies = response.data;
        } catch(err) {
          console.log(err);
        }
      }
    },
    mounted() {
      this.getCurrency();
    }
  }
</script>