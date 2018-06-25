angular.module("ratingApp")
    .controller("ratingAppController", ["ratingService", function (rating) {
        this.restaurant = rating.restaurant;
        this.incrementRating = rating.incrementRating;
        this.decrementRating = rating.decrementRating;
        this.showMessage = rating.showMessage;
    }])