angular.module("ratingApp")
    .service("ratingService", function () {
        this.restaurant = [{
                name: "Southdale Village Family Restaurant",
                description: "At Southdale Village Family Restaurant we take extra care in preparing your order. We use our own recipes and only the finest of ingredients and cooking methods.Order online from Southdale Village Family Restaurant, in Winnipeg, for pickup or delivery, through SkipTheDishes.com and get 10% off your first order!",
                rating: 3,
                image: "http://www.net-profiles.com/img_cameos/SFR_UL.jpg"
            },
            {
                name: "Shawarma Khan Restaurant",
                description: "Shawarma is as fresh as it gets, all the ingredients, all the meat, all the sauces. Nothing is pre-packaged, nothing is reheated or microwaved. Everything is made in-house everyday.",
                rating: 3,
                image: "https://pbs.twimg.com/profile_images/3028612361/78d669885e3b7f50cc07bf642817eab3_400x400.jpeg"
            },
            {
                name: "Kazoku Restaurant",
                description: "Japanese & Korean dishes, from sushi & ramen to bibimbop, in a sleek, minimalist dining room.",
                rating: 3,
                image: "https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.0-9/22491928_1586528458078944_5606477384498838384_n.jpg?_nc_cat=0&oh=a6f27b807da035ea38c6b99be8d9f656&oe=5B824684"
            },
            {
                name: "Tim Hortons",
                description: "Tim Hortons Inc. is a Canadian-based multinational fast food restaurant known for its coffee and donuts. It is also Canada's largest quick service restaurant chain; as of December 31, 2016, it had a total of 4,613 restaurants in nine countries.",
                rating: 3,
                image: "http://cdn.strategyonline.ca/wp/wp-content/uploads/2017/08/ca-images-Tim_Hortons_Exterior_2-623x350.jpg?1a005c"
            },
            {
                name: "Wild Wing Restaurants",
                description: "Wild Wing Restaurants is a Canadian franchised restaurant chain that specializes in chicken wings, quick serve foods, and other related products.",
                rating: 3,
                image: "https://media.blogto.com/listings/3814-2013130-wild-wing-yonge.jpg?cmd=resize_then_crop&quality=70&w=2048&height=1365"
            }
        ];
        this.incrementRating = function (restaurant) {
            restaurant.message = "";
            if (restaurant.rating < 5) {
                restaurant.rating += 1;
            }
            if (restaurant.rating > 4) {
                restaurant.message = "This restaurant is great to Eat!"
            }
        }
        this.decrementRating = function (restaurant) {
            restaurant.message = "";
            if (restaurant.rating > 0) {
                restaurant.rating -= 1;
            }
            if (restaurant.rating < 2) {
                restaurant.message = "Customers don't like this place alot!"

            }
        }


    })