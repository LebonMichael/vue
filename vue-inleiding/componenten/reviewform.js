app.component("review-form",{
    template:
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Laat een review achter</h3>
        <label class="form-label" for="name">Naam:</label>
        <input class="form-control" id="name" v-model="name" type="text">
        
        <label class="form-label" for="review">Review:</label>
        <textarea name="/" id="review" class="form-control" v-model="review" cols="30" rows="10"></textarea>
        
        <label class="form-check-label" for="rating">Rating:</label>
        <select id="rating" class="form-select" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <input class="btn btn-primary" type="submit" value="submit">
    </form>`,
    data(){
        return{
            name:"",
            review:"",
            rating: null,
        }
    },
    methods:{
        onSubmit(){
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            }
            this.$emit("toevoegenReview",productReview),
                this.name = "";
                this.review = "";
                this.rating = null;
        }
    }
})