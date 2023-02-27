let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const title = document.getElementById('main-title');
  console.log(title);
  title.textContent = `DOM Toretto's Homepage`;
  console.log(title.textContent);

  // Part 2
  const body = document.querySelector('body');
  console.log(body);
  body.style.backgroundColor = 'bisque';

  // Part 3
  const ul = document.querySelector('#favorite-things');
  console.log(ul);
  ul.lastElementChild.remove();
 

  // Part 4
  const specialTitle = document.querySelectorAll('.special-title');
  console.log(specialTitle);
  specialTitle.forEach(element => {
    element.style.fontSize = '2rem';
  });


  // Part 5
  const ulPastRaces = document.querySelector('#past-races');
  
  ulPastRaces.childNodes.forEach(e =>{
    if(e.textContent === 'Chicago')
    e.remove();
  }
  )
  console.log(ulPastRaces);
  // ulPastRaces.lastElementChild.previousElementSibling.previousElementSibling.remove();
  
  // Part 6

  const newLi = document.createElement('li');
  newLi.textContent = 'Pittsburgh';
  ulPastRaces.appendChild(newLi);

  // Part 7
  const divMain = document.querySelector('.main');
  const newDiv = document.createElement('div');
  newDiv.setAttribute('class','blog-post purple');
  const newH1 = document.createElement('h1');
  newH1.textContent = `${newLi.textContent}`;
  const newP = document.createElement('p');
  newP.textContent = 'I played Ice Hockey with Pittsburgh Penguins on frozen Lake';
  newDiv.append(newH1,newP);
  console.log(newDiv);
  divMain.appendChild(newDiv);
  console.log(divMain);


  // Part 8

  const quoteTitle = document.querySelector('#quote-title');
  console.log(quoteTitle);
  quoteTitle.addEventListener('click',function(){
    randomQuote();
  });


  // Part 9

  const blogPost = document.querySelectorAll('.blog-post');
  console.log(blogPost);

  blogPost.forEach(element => {
    element.addEventListener('mouseout',function(){
      element.classList.toggle('purple');
      element.classList.toggle('red');
    })
    element.addEventListener('mouseenter',function(){
      element.classList.toggle('purple');
      element.classList.toggle('red');
    })
  });
  
});
