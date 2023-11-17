const starEl = document.querySelectorAll(".star");
let currentRating = document.querySelector(".current-rating")
starEl.forEach((e,id) => {
    e.addEventListener("click",()=>{
        let current_star_level = id + 1 ;
        currentRating.innerText = `Rated ${current_star_level} Starts in Review`
        starEl.forEach((star, j)=>{
            if(current_star_level >= j+1){
                star.innerHTML = "&#9733";
            }else{
                star.innerHTML = "&#9734";
            }
        })
    })
});
const starEl1 = document.querySelectorAll(".star-1");
let currentRating1 = document.querySelector(".current-rating-1")
starEl1.forEach((e,id) => {
    e.addEventListener("click",()=>{
        let current_star_level = id + 1 ;
        currentRating1.innerText = `Rated ${current_star_level} Starts in Report Guru`
        starEl1.forEach((star, j)=>{
            if(current_star_level >= j+1){
                star.innerHTML = "&#9733";
            }else{
                star.innerHTML = "&#9734";
            }
        })
    })
});
const starEl2 = document.querySelectorAll(".star-2");
let currentRating2 = document.querySelector(".current-rating-2")
starEl2.forEach((e,id) => {
    e.addEventListener("click",()=>{
        let current_star_level = id + 1 ;
        currentRating2.innerText = `Rated ${current_star_level} Starts in BestTech`
        starEl2.forEach((star, j)=>{
            if(current_star_level >= j+1){
                star.innerHTML = "&#9733";
            }else{
                star.innerHTML = "&#9734";
            }
        })
    })
});