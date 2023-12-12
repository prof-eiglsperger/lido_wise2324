export default {
  data() {
    return {
      basket: [],
    };
  },
  created() {
    this.loadBasket();
  },
  methods: {
    remove: function (index) {
      let url = new URL(origin + "/api/basket");
      let data = new FormData();
      data.append("index", index);
      fetch(url, {
        method: "DELETE",
        body: data,
      }).then((result) => {
        this.loadBasket();
      });
    },
    loadBasket: function() {
      let url = new URL(origin + '/api/basket');
    fetch(url)
    .then(res => res.json())
    .then(data => this.basket = data.basket)
    }
  },
  template: `
  <div class="container">
  <h2 class="mt-4">Ihr Einkauswagen</h2>
    <table class="table mt-4">
        <tr v-for="(item,index) in basket">
            <td class="menu-title">
                {{ item.name}}
            </td>
            <td class="menu-price">
                {{ item.price}} &euro;
            </td>
            <td class="menu-price">
                <v-icon @click="remove(index)">mdi-cart-remove</v-icon>
            </td>
        </tr>
    </table>
    <v-row justify="center" class="mt-2">
      <v-btn  class="mx-2" rounded="xl" to="/">Weiter einkaufen</v-btn>
      <v-btn class="mx-2"  color="#85A60F" rounded="xl" to="/address"><span style="color:white">Bestellung abschliessen</span></v-btn>
    </v-row>    
    </div>
    `,
};
