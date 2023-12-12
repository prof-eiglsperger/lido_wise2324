export default {
  data() {
    return {
      name: "",
      address: "",
      rules: [
        val => {
          const specialChars =
          '[`!@#$%^&*()_+-=[]{};\':"\\|<>/?~]/';
          if (specialChars
            .split('')
            .some((specialChar) => val.includes(specialChar))) {
              return "Der Name enthält Sonderzeichen! ";
            } else {
            return true;
          }
        },
      ],
    };
  },
  methods: {
    submitAddress() {
      let url = new URL(origin + "/api/address");
      let data = new FormData();
      data.append("name", this.name);
      data.append("address", this.address);
      fetch(url, {
        method: "POST",
        body: data,
      }).then((result) => {
        this.$router.push("/checkout");
      });
    },
  },
  template: `
    <div class="container">
      <h1>Lieferdaten</h1>
      <v-sheet class="mx-auto">
        <v-form>
          <v-text-field v-model="name" :rules="rules" label="Name"></v-text-field>
          <v-text-field v-model="address" :rules="rules" label="Adresse"></v-text-field>
        </v-form>
      </v-sheet>


      <v-row justify="center" class="mt-2">
        <v-btn  class="mx-2" rounded="xl" to="/">Weiter einkaufen</v-btn>
        <v-btn class="mx-2"  color="#85A60F" rounded="xl" @click="submitAddress"><span style="color:white">Bestellung abschliessen</span></v-btn>
        </v-row>    
      </div>
      `,
};
