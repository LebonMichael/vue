app.component("taak-toevoegen",{
    template:
    `   <div class="shadow-lg text-center fs-3 text-primary py-3 my-5 bg-body rounded">Takenlijst</div>
   <div class="col-lg-6 offset-lg-3">
        <form @submit.prevent="onSubmit">
         <div class="input-group mb-3">
        <input v-model="taak" id="taak" type="text" class="form-control" placeholder="Taak..." aria-label="Taak" aria-describedby="button-addon2">
        <button @click="toevoegenEenTaak" class="btn btn-outline-secondary" type="submit" id="button-addon"><i class="bi bi-plus-square"></i></button>
        </div>
        </form>
         </div>
       
    `,
    data(){
      return{
          taak: "",
      }
    },

    methods:{
        onSubmit() {
            let eenTaakToevoegen = {
                taak1: this.taak
            }
            this.$emit("toevoegenEenTaak", eenTaakToevoegen);
            this.taak = ""
        }
    }
})