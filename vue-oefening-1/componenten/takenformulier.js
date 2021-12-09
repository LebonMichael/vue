app.component("taken-formulier", {
    template:
        `<taak-toevoegen @toevoegenEenTaak="eenTaakToevoegen"></taak-toevoegen>
        <div class="text-center">
           <button class="btn btn-danger" type="button" @click="removeAlles(index)">Alles wissen <i class="bi bi-trash"></i></button>
         </div>
         <hr class="my-3">
         <div class="col-lg-6 offset-lg-3">
         <div class="row row-cols-2">
         <p>Totaal aantal taken: {{taken.length}}</p>
         </div>
         
         <div v-for="(taak, index) in taken" :key="index" class="input-group mb-3">
         <div  class="input-group-text">
         <input class="form-check-input mt-0" type="checkbox"  value="" aria-label="Checkbox for following text input">
         </div>
         <input v-model="taak.taak1" value="{{taak.taak}}" type="text" class="form-control" aria-label="Text input with checkbox">
         <button class="btn btn-danger" @click="removeEen(index)" ><i class="bi bi-trash"></i></i></button>
         </div>
         </div>
        `,

    data(){
        return{
            taken: [],
        }
    },
    methods:{
        eenTaakToevoegen(taak){
            this.taken.push(taak)

        },
        removeEen (index) {
            this.taken.splice(index, 1)
            //this.$delete(this.taken, index)
        },
        removeAlles (index) {
            this.taken.splice(index)
            //this.$delete(this.taken, index)
        }
    }
})