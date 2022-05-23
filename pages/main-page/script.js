const body = document.body;
let mainDiv = document.createElement("div");
body.append(mainDiv);
mainDiv.classList.add("papyrus-div");

// LOGO

let image = document.createElement("img");
image.classList.add("papyrus");
image.src="../../assets/images/papyrus.png"
image.alt = "Hello Bookworms!"
mainDiv.append(image)
let imageInnerDiv = document.createElement("div");
mainDiv.append(imageInnerDiv)
imageInnerDiv.classList.add("text");
imageInnerDiv.innerText = "Hello \n Bookworms!"

//BOOKSHELF
let bookShelf = document.createElement("div")
bookShelf.classList.add("book-shelf")
body.append(bookShelf)
//BOOK-1
let book = document.createElement("div")
book.classList.add("book")
book.setAttribute("draggable", true)
bookShelf.append(book)
let imageBox = document.createElement("div")
imageBox.classList.add("imgBox")
book.append(imageBox)
let jsGoodParts = document.createElement("div")
jsGoodParts.classList.add("js-good-parts")
imageBox.append(jsGoodParts)
let image1 = document.createElement("img")
imageBox.append(image1)
image1.src = "../../assets/images/the-good-parts.jpg"
let details = document.createElement("div")
details.classList.add("details")
book.append(details)
let title = document.createElement("p")
title.classList.add("title")
title.innerText="Javascript: The good parts";
details.append(title)
let author = document.createElement("p")
author.classList.add("author")
author.innerText="Douglas Crockford";
details.append(author)
let price = document.createElement("p")
price.classList.add("price")
price.innerText="30$";
details.append(price)
let showMore = document.createElement("button")
showMore.classList.add("show-more")
showMore.setAttribute("id", "myBtn")
showMore.innerText="SHOW MORE";
details.append(showMore)
let addToBag = document.createElement("button")
addToBag.classList.add("add")
addToBag.setAttribute("id", "myBtn")
addToBag.innerText="ADD TO BAG";
details.append(addToBag)


//BOOK-2
let book2 = document.createElement("div")
book2.classList.add("book-2")
book2.setAttribute("draggable", true)
bookShelf.append(book2)
let imageBox2 = document.createElement("div")
imageBox2.classList.add("imgBox")
book2.append(imageBox2)
let jsGoodParts2 = document.createElement("div")
jsGoodParts2.classList.add("js-good-parts")
imageBox2.append(jsGoodParts2)
let image2 = document.createElement("img")
imageBox2.append(image2)
image2.src = "../../assets/images/effective-js.jfif"
let details2 = document.createElement("div")
details2.classList.add("details")
book2.append(details2)
let title2 = document.createElement("p")
title2.classList.add("title-2")
title2.innerText="Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript";
details2.append(title2)
let author2 = document.createElement("p")
author2.classList.add("author-2")
author2.innerText="David Herman";
details2.append(author2)
let price2 = document.createElement("span")
price2.classList.add("price")
price2.innerText="22$";
details2.append(price2)
let showMore2 = document.createElement("button")
showMore2.classList.add("show-more")
showMore2.setAttribute("id", "myBtn")
showMore2.innerText="SHOW MORE";
details2.append(showMore2)
let addToBag2 = document.createElement("button");
addToBag2.classList.add("add");
addToBag2.setAttribute("id", "myBtn");
addToBag2.innerText="ADD TO BAG";
details2.append(addToBag2);


//BOOK-3
let book3 = document.createElement("div")
book3.classList.add("book-3")
book3.setAttribute("draggable", true)
bookShelf.append(book3)
let imageBox3 = document.createElement("div")
imageBox3.classList.add("imgBox")
book3.append(imageBox3)
let jsGoodParts3 = document.createElement("div")
jsGoodParts3.classList.add("js-good-parts")
imageBox3.append(jsGoodParts3)
let image3 = document.createElement("img")
imageBox3.append(image3)
image3.src = "../../assets/images/definitive-guide.jpg"
let details3 = document.createElement("div")
details3.classList.add("details")
book3.append(details3)
let title3 = document.createElement("p")
title3.classList.add("title-3")
title3.innerText="JavaScript: The Definitive Guide";
details3.append(title3)
let author3 = document.createElement("p")
author3.classList.add("author-3")
author3.innerText="David Flanagan";
details3.append(author3)
let price3 = document.createElement("span")
price3.classList.add("price")
price3.innerText="40$";
details3.append(price3)
let showmore3 = document.createElement("button")
showmore3.classList.add("show-more")
showmore3.setAttribute("id", "myBtn")
showmore3.innerText="SHOW MORE";
details3.append(showmore3)
let addToBag3 = document.createElement("button")
addToBag3.classList.add("add")
addToBag3.setAttribute("id", "myBtn")
addToBag3.innerText="ADD TO BAG";
details3.append(addToBag3)

//BOOK-4
let book4 = document.createElement("div")
book4.classList.add("book-4")
book4.setAttribute("draggable", true)
bookShelf.append(book4)
let imageBox4 = document.createElement("div")
imageBox4.classList.add("imgBox")
book4.append(imageBox4)
let jsGoodParts4 = document.createElement("div")
jsGoodParts4.classList.add("js-good-parts")
imageBox4.append(jsGoodParts4)
let image4 = document.createElement("img")
imageBox4.append(image4)
image4.src = "../../assets/images/js-apps.jpg"
let details4 = document.createElement("div")
details4.classList.add("details")
book4.append(details4)
let title4 = document.createElement("p")
title4.classList.add("title-4")
title4.innerText="Programming JavaScript Applications";
details4.append(title4)
let author4 = document.createElement("p")
author4.classList.add("author-4")
author4.innerText="Eric Elliott";
details4.append(author4)
let price4 = document.createElement("span")
price4.classList.add("price")
price4.innerText="19$";
details4.append(price4)
let showmore4 = document.createElement("button")
showmore4.classList.add("show-more")
showmore4.setAttribute("id", "myBtn")
showmore4.innerText="SHOW MORE";
details4.append(showmore4)
let addToBag4 = document.createElement("button")
addToBag4.classList.add("add")
addToBag4.setAttribute("id", "myBtn")
addToBag4.innerText="ADD TO BAG";
details4.append(addToBag4)


//BOOK-5
let book5 = document.createElement("div")
book5.classList.add("book-5")
book5.setAttribute("draggable", true)
bookShelf.append(book5)
let imageBox5 = document.createElement("div")
imageBox5.classList.add("imgBox")
book5.append(imageBox5)
let jsGoodParts5 = document.createElement("div")
jsGoodParts5.classList.add("js-good-parts")
imageBox5.append(jsGoodParts5)
let image5 = document.createElement("img")
imageBox5.append(image5)
image5.src = "../../assets/images/js-deisgn.jpg"
let details5 = document.createElement("div")
details5.classList.add("details")
book5.append(details5)
let title5 = document.createElement("p")
title5.classList.add("title-5")
title5.innerText="Learning JavaScript Design Patterns";
details5.append(title5)
let author5 = document.createElement("p")
author5.classList.add("author-5")
author5.innerText="Addy Osmani";
details5.append(author5)
let price5 = document.createElement("span")
price5.classList.add("price")
price5.innerText="32$";
details5.append(price5)
let showmore5 = document.createElement("button")
showmore5.classList.add("show-more")
showmore5.setAttribute("id", "myBtn")
showmore5.innerText="SHOW MORE";
details5.append(showmore5)
let addToBag5 = document.createElement("button")
addToBag5.classList.add("add")
addToBag5.setAttribute("id", "myBtn")
addToBag5.innerText="ADD TO BAG";
details5.append(addToBag5)


//BOOK-6
let book6 = document.createElement("div")
book6.classList.add("book-6")
book6.setAttribute("draggable", true)
bookShelf.append(book6)
let imageBox6 = document.createElement("div")
imageBox6.classList.add("imgBox")
book6.append(imageBox6)
let jsGoodParts6 = document.createElement("div")
jsGoodParts6.classList.add("js-good-parts")
imageBox6.append(jsGoodParts6)
let image6 = document.createElement("img")
imageBox6.append(image6)
image6.src = "../../assets/images/typescript.jpg"
let details6 = document.createElement("div")
details6.classList.add("details")
book6.append(details6)
let title6 = document.createElement("p")
title6.classList.add("title-6")
title6.innerText="Programming TypeScript";
details6.append(title6)
let author6 = document.createElement("p")
author6.classList.add("author-6")
author6.innerText="Boris Cherny";
details6.append(author6)
let price6 = document.createElement("span")
price6.classList.add("price")
price6.innerText="32$";
details6.append(price6)
let showmore6 = document.createElement("button")
showmore6.classList.add("show-more")
showmore6.setAttribute("id", "myBtn")
showmore6.innerText="SHOW MORE";
details6.append(showmore6)
let addToBag6 = document.createElement("button")
addToBag6.classList.add("add")
addToBag6.setAttribute("id", "myBtn")
addToBag6.innerText="ADD TO BAG";
details6.append(addToBag6)


//BOOK-7
let book7 = document.createElement("div")
book7.classList.add("book-7")
book7.setAttribute("draggable", true)
bookShelf.append(book7)
let imageBox7 = document.createElement("div")
imageBox7.classList.add("imgBox")
book7.append(imageBox7)
let jsGoodParts7 = document.createElement("div")
jsGoodParts7.classList.add("js-good-parts")
imageBox7.append(jsGoodParts7)
let image7 = document.createElement("img")
imageBox7.append(image7)
image7.src = "../../assets/images/react.jpg"
let details7 = document.createElement("div")
details7.classList.add("details")
book7.append(details7)
let title7 = document.createElement("p")
title7.classList.add("title-7")
title7.innerText="Learning React, 2nd Edition";
details7.append(title7)
let author7 = document.createElement("p")
author7.classList.add("author-7")
author7.innerText="Alex Banks, Eve Porcello";
details7.append(author7)
let price7 = document.createElement("span")
price7.classList.add("price")
price7.innerText="25$";
details7.append(price7)
let showmore7 = document.createElement("button")
showmore7.classList.add("show-more")
showmore7.setAttribute("id", "myBtn")
showmore7.innerText="SHOW MORE";
details7.append(showmore7)
let addToBag7 = document.createElement("button")
addToBag7.classList.add("add")
addToBag7.setAttribute("id", "myBtn")
addToBag7.innerText="ADD TO BAG";
details7.append(addToBag7)


//BOOK-8
let book8 = document.createElement("div")
book8.classList.add("book-8")
book8.setAttribute("draggable", true)
bookShelf.append(book8)
let imageBox8 = document.createElement("div")
imageBox8.classList.add("imgBox")
book8.append(imageBox8)
let jsGoodParts8 = document.createElement("div")
jsGoodParts8.classList.add("js-good-parts")
imageBox8.append(jsGoodParts8)
let image8 = document.createElement("img")
imageBox8.append(image8)
image8.src = "../../assets/images/Node-js.png"
let details8 = document.createElement("div")
details8.classList.add("details")
book8.append(details8)
let title8 = document.createElement("p")
title8.classList.add("title-8")
title8.innerText="Node.js in Action";
details8.append(title8)
let author8 = document.createElement("p")
author8.classList.add("author-8")
author8.innerText="Bradley Meck Alex Young \n and Mike Cantelon";
details8.append(author8)
let price8 = document.createElement("span")
price8.classList.add("price")
price8.innerText="38$";
details8.append(price8)
let showmore8 = document.createElement("button")
showmore8.classList.add("show-more")
showmore8.setAttribute("id", "myBtn")
showmore8.innerText="SHOW MORE";
details8.append(showmore8)
let addToBag8 = document.createElement("button")
addToBag8.classList.add("add")
addToBag8.setAttribute("id", "myBtn")
addToBag8.innerText="ADD TO BAG";
details8.append(addToBag8)

//BOOK-9
let book9 = document.createElement("div")
book9.classList.add("book-9")
book9.setAttribute("draggable", true)
bookShelf.append(book9)
let imageBox9 = document.createElement("div")
imageBox9.classList.add("imgBox")
book9.append(imageBox9)
let jsGoodParts9 = document.createElement("div")
jsGoodParts9.classList.add("js-good-parts")
imageBox9.append(jsGoodParts9)
let image9 = document.createElement("img")
imageBox9.append(image9)
image9.src = "../../assets/images/udon'tKnowJS.jpg"
let details9 = document.createElement("div")
details9.classList.add("details")
book9.append(details9)
let title9 = document.createElement("p")
title9.classList.add("title-9")
title9.innerText="You Don't Know JS Yet: Get Started";
details9.append(title9)
let author9 = document.createElement("p")
author9.classList.add("author-9")
author9.innerText="Kyle Simpson";
details9.append(author9)
let price9 = document.createElement("span")
price9.classList.add("price")
price9.innerText="26$";
details9.append(price9)
let showmore9 = document.createElement("button")
showmore9.classList.add("show-more")
showmore9.setAttribute("id", "myBtn")
showmore9.innerText="SHOW MORE";
details9.append(showmore9)
let addToBag9 = document.createElement("button")
addToBag9.classList.add("add")
addToBag9.setAttribute("id", "myBtn")
addToBag9.innerText="ADD TO BAG";
details9.append(addToBag9)

//BOOK-10
let book10 = document.createElement("div")
book10.classList.add("book-10")
bookShelf.append(book10)
book10.setAttribute("draggable", true)
let imageBox10 = document.createElement("div")
imageBox10.classList.add("imgBox")
book10.append(imageBox10)
let jsGoodParts10 = document.createElement("div")
jsGoodParts10.classList.add("js-good-parts")
imageBox10.append(jsGoodParts10)
let image10 = document.createElement("img")
imageBox10.append(image10)
image10.src = "../../assets/images/js-ninja.png"
let details10 = document.createElement("div")
details10.classList.add("details")
book10.append(details10)
let title10 = document.createElement("p")
title10.classList.add("title-10")
title10.innerText="Secrets of the JavaScript Ninja";
details10.append(title10)
let author10 = document.createElement("p")
author10.classList.add("author-10")
author10.innerText="John Resig and Bear Bibeault";
details10.append(author10)
let price10 = document.createElement("span")
price10.classList.add("price")
price10.innerText="33$";
details10.append(price10)
let showmore10 = document.createElement("button")
showmore10.classList.add("show-more")
showmore10.setAttribute("id", "myBtn")
showmore10.innerText="SHOW MORE";
details10.append(showmore10)
let addToBag10 = document.createElement("button")
addToBag10.classList.add("add")
addToBag10.setAttribute("id", "myBtn")
addToBag10.innerText="ADD TO BAG";
details10.append(addToBag10)






// BAG
let bag = document.createElement("div")
bag.classList.add("bag")
bag.setAttribute("id", "getData")
bag.setAttribute("ondrop", "drop")
bag.setAttribute("ondragover","allowDrop")
body.append(bag)
let instruction = document.createElement("span")
instruction.innerText = "DRAG AND DROP YOUR BOOK HERE ☝"
bag.append(instruction)



//MODAL BOX
let modalBox = document.createElement("div")
modalBox.classList.add("modal")
modalBox.setAttribute("id", "myModal")
body.append(modalBox)
let modalContent = document.createElement("div")
modalContent.classList.add("modal-content")
modalBox.append(modalContent)
let closeBtn = document.createElement("span")
closeBtn.innerText="x"
closeBtn.classList.add("close")
modalContent.append.closeBtn
let instructionText = document.createElement("p")
instructionText.innerText = "some text in modal"
modalContent.append.instructionText







// After user clicks on Show more button the popup with description and close button are shown 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

var btn = document.getElementsByClassName("show-more");

btn[0].onclick = function() {
  modal.style.display = "block";
};

btn[1].onclick = function() {
  modal.style.display = "block";
};

btn[2].onclick = function() {
        modal.style.display = "block";
};

btn[3].onclick = function() {
        modal.style.display = "block";
};
btn[4].onclick = function() {
        modal.style.display = "block";
};
btn[5].onclick = function() {
        modal.style.display = "block";
};
btn[6].onclick = function() {
        modal.style.display = "block";
};
btn[7].onclick = function() {
        modal.style.display = "block";
};
btn[8].onclick = function() {
        modal.style.display = "block";
};
btn[9].onclick = function() {
        modal.style.display = "block";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
showMore.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// closeBtn.onclick = function() {
//   modal.style.display = "none";
// }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// To read json data
// fetch('../books.json') //path to the file with json data
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         });


        
        




