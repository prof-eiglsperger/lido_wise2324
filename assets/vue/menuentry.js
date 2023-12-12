export default {
    props: ['meal'],
    data() {
      return {
        dialog: false,
      };
    },
    methods: {
        toggleDialog() {
            this.dialog = !this.dialog;
        }
    },
    template: `
              <div class="mt-2">
                  <div class="h4">{{ meal.name }}</div>
                  <div class="d-flex justify-content-between">
                      <div class="h6">{{ meal.description }} 
                        <span class="ml-1" v-if="meal.image" @click="toggleDialog()">(Bild anzeigen)</span>
                      </div>
                      <div>
                          <span class="h6"> {{ meal.price }} &euro;</span>
                          <span :id="meal.id" class="ml-2 btn btn-outline-primary" @click="$emit('order', meal.id)">Bestellen</span>
                      </div>
                      <p></p>
                      <div class="dialog" v-if="dialog">
                        <div class="dialog-content">    
                        <button @click="toggleDialog()" class="close-icon" >x</button>
                        <img :src="'https://wetebucket.s3.us-west-2.amazonaws.com/'+meal.image">
                        </div>
                      </div>
                  </div>
            </div>`
  };
  