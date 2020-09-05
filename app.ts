let rating = 1;
let allRatings: number[] = [];

let stars = document.getElementsByClassName("selectStars");

for (let star of stars) {
  star.addEventListener("click", (event) => {
    for (let s of stars) {
      s.classList.remove("lit");
    }

    let clickedStar = event.target as HTMLElement;

    switch (clickedStar.id) {
      case "star5":
        stars[4].classList.add("lit");
      case "star4":
        stars[3].classList.add("lit");
      case "star3":
        stars[2].classList.add("lit");
      case "star2":
        stars[1].classList.add("lit");
      case "star1":
        stars[0].classList.add("lit");
    }

    switch (clickedStar.id) {
      case "star5":
        rating = 5;
        break;
      case "star4":
        rating = 4;
        break;
      case "star3":
        rating = 3;
        break;
      case "star2":
        rating = 2;
        break;
      case "star1":
        rating = 1;
    }

    console.log(rating);
  });
}

const updateProductRating = () => {
  let sum = 0;
  for (let num of allRatings) {
    sum += num;
  }
  let avg = sum / allRatings.length;
  let avgDiv = document.querySelector("#avgRating") as HTMLElement;
  avgDiv.innerHTML = `<p>Average Rating: ${avg.toFixed(2)}/5 stars</p>`;

  let roundedAvg = Math.round(avg);

  for (let i = 1; i <= roundedAvg; i++) {
    avgDiv.innerHTML += '<i class="fa fa-star lit"></i>';
  }
};

const submitReview = () => {
  const name = <HTMLInputElement>document.querySelector("#name");

  const comment = <HTMLInputElement>document.querySelector("#comment");

  addReview(name.value, comment.value);

  name.value = "";
  comment.value = "";

  allRatings.push(rating);
  updateProductRating();
};

const printStarsInReview = () => {
  let result = "";

  for (let i = 0; i < rating; i++) {
    result += '<i class="fa fa-star lit"></i>';
  }

  return result;
};

const addReview = (name: string, comment: string) => {

    var today = new Date();
    var date = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;

  let review = `
        <div class="card review">
            <div class="row">
                <div class="col-2 align-self-center">
                    <img
                    width="100px"
                    class="rounded-circle"
                    src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                    />
                    <p class="username">${name}</p>
                </div>

                <div class="card-body col-8">
                    <div style="font-size: 25px">
                    ${printStarsInReview()}
                    <span>${date}</span>
                    </div>
                    ${comment}
                </div>
            </div>
        </div>
    `;

  const reviewsDiv = document.querySelector("#reviews");
  reviewsDiv!.innerHTML += review;
};
