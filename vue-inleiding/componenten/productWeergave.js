app.component("product-weergave",{
    props:{
        member:{
            type: Boolean,
            required:true
        }
    },
    template:
    `<div>
        <!--<img :src="image" class="img-fluid" alt="{{product}}">-->
        <img v-bind:src="image" class="img-fluid" alt="{{product}}">
    </div>
    <div>
        <h1>{{title}}</h1>
        <h2>{{merk}}</h2>
        <h2>&euro; {{prijs}}</h2>
        <p>{{beschrijving}}</p>
        <p>Voorraad: {{inVoorraad}}</p>
        <p>Verzendkosten: {{verzendkosten}}</p>
        <p v-if="inVoorraad > 9" class="text-success" >In voorraad</p>
        <p v-else-if="inVoorraad > 0 && inVoorraad <= 9" class="text-primary" >Laatste Stuks</p>
        <p v-else class="text-danger" >Niet in voorraad</p>
        <ul>
            <li v-for="productDetail in productDetails" >{{productDetail}}</li>
           <!-- <li v-for="item in productDetails" >{{item}}</li>-->
        </ul>
        <div class="kleurvak d-inline-block mx-1 rounded" v-for="(soort,index) in soorten" :key="soort.soortId"
             @mouseover="updateImageVoorraad(index)" :style="{background:soort.kleur}"></div>
             <br>
        <!--<div class="fw-bold">Aantal: {{winkelwagen}}</div>-->
        <button v-on:click="addToCart" class="btn btn-outline-danger" :disabled="!inVoorraad || inVoorraad < winkelwagen+1">Koop</button>
        <review-lijst :reviews="reviews" ></review-lijst>
        <review-form @toevoegenReview ="toevoegenReview"></review-form>
        
    </div>`,
    data(){
        return{
            product: "Gsm oplader",
            merk: "White label",
            prijs: 50,
            /* image: "./images/phone-charger2.jpg",*/
            beschrijving: "Tis bere goed diene iploader",
            //inVoorraad: 9,
            selectProduct: 0,
            productDetails:["universeel","smartphone","1 aansluiting","inclusief kabel","draadloos"],
            soorten:[
                {
                    soortId: 1,
                    kleur: "black",
                    image: "./images/phone-charger2.jpg",
                    aantal: 20
                },
                {
                    soortId:2,
                    kleur: "green",
                    image: "./images/phone-charger2-groen.jpg",
                    aantal: 10
                },
            ],
            reviews:[],
           /* winkelwagen:0,*/
        }
    },
    methods:{
        addToCart(){
            //this.winkelwagen +=1;
            this.$emit("toevoegen-winkelwagen", this.soorten[this.selectProduct].soortId);
        },
        updateImageVoorraad(index){
            this.selectProduct = index;
        },
        toevoegenReview(review){
            this.reviews.push(review);
        }
    },
    computed:{
        title(){
            /*return this.product + " " + this.merk;*/ //es 5
            return `${this.product} ${this.merk}`; // es6
        },
        image(){
            return this.soorten[this.selectProduct].image;
        },
        inVoorraad(){
            return this.soorten[this.selectProduct].aantal;
        },
        verzendkosten(){
            if(this.member){
                return "Gratis verzenden"
            }
            return 9.99
        }
    }
})