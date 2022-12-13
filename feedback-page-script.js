let starsNode = document.getElementsByClassName("stars"); // starsNode declared using 'stars' class in DOM

for (let i = 0; i < starsNode.length; i++) {
  // for loop to make stars clickable
  let star = starsNode[i]; // each star selected using for loop
  star.addEventListener("click", function () {
    let numberOfStars = i + 1; // Storing the number of stars that user gave by printing out.
    // star.classList.add("selectedStars"); // TODO: prevent commenting without voting with a star
    console.log(`User gave us ${numberOfStars} stars out of 10.`); // (Since 'i' is the index number it starts from 0. That's why I added 1 to i to get the actual number of stars.)
  });

  star.addEventListener("mouseover", function () {
    star.classList.add("stars-on-hover-and-click");
    for (let j = 0; j <= i; j++) {
      starsNode[j].classList.add("stars-on-hover");
    }

    for (let k = starsNode.length - 1; k > i; k--) {
      starsNode[k].classList.remove("stars-on-hover");
    }
  });
}

function sendComment(eventData) {
  // function for saving the message inserted by the user
  let commentInput = document.getElementById("comment-input");
  if (eventData.key === "Enter") {
    let comment = commentInput.value;

    if (comment !== "") {
      let commentText = comment; // storing the commend inserted by the user
      console.log(commentText); // printing out the comment
      commentInput.setAttribute("placeholder", "Write your comment here");
      commentInput.value = "";
    } else {
      commentInput.setAttribute("placeholder", "Please insert a comment!");
    }
  }
}
