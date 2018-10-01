
    var app = new Vue({
        el: '#app',
        data: {
            foods:[
                {name:"Hamburger", calories: 300, carbs:20, protein: 10, fat: 5},
                {name:"Fruit Salad", calories: 150, carbs:40, protein: 17, fat: 15},
                {name:"Apple", calories: 100, carbs:60, protein: 6, fat: 13}


            ],
            newName:"",
            newCalories: 0,
            newCarbs: 0,
            newProtein: 0,
            newFat: 0
           



        },
        computed:{
            // LOOP through everything and add it together
            totalCalories: function(){
                var total = 0;
                for(i=0; i < this.foods.length; i+=1){
                    total+= parseInt(this.foods[i].calories);
                    console.log(total);
                }
                
                return total;

            },
            totalCarbs: function(){
                var total = 0;
                for(i=0; i < this.foods.length; i+=1){
                    total+= parseInt(this.foods[i].carbs);
                    
                }
                
                return total;

            },
            totalProtein: function(){
                var total = 0;
                for(i=0; i < this.foods.length; i+=1){
                    total+= parseInt(this.foods[i].protein);
                }
                
                return total;

            },
            totalFat: function(){
                var total = 0;
                for(i=0; i < this.foods.length; i+=1){
                    total+= parseInt(this.foods[i].fat);
                }
                
                return total;

            },
        },

        methods:{
            addFood(){
                var newName = this.newName;
                var newCalories = this.newCalories;
                var newCarbs = this.newCarbs;
                var newProtein = this.newProtein;
                var newFat = this.newFat;
                if(newName !="" && newCalories != 0){
                this.foods.push({name: newName, calories: newCalories, carbs: newCarbs, protein: newProtein, fat: newFat});

            }else{
                alert("A food name and calorie count are required!")
            }
            this.newName = "";
            this.newCalories = "";
            this.newCarbs = "";
            this.newProtein = "";
            this.newFat = "";
            },
            removeFood (food) {
                console.log(food)
                var index = this.foods.indexOf(food);
                        this.foods.splice(index, 1);
                
            }


        }
    

    })
