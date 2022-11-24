const requestURL = 'https://jonatantroche.github.io/wdd230/09_lesson_9/directory/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companies=jsonObject["companies"];
    companies.forEach(displayCompanies);
  });

  function displayCompanies(companie){
    // Create elements to add to the document  
  let card=document.createElement("section");
  let portrait=document.createElement("img");
  let heading=document.createElement("h2");
  let paragraph=document.createElement("p");
  let paragraph2=document.createElement("p");
  let website=document.createElement("p");
  let paragraph4=document.createElement("p");

   heading.textContent=`${companie.name}`;
   paragraph.textContent=`${companie.location}`;
   paragraph2.textContent=`${companie.telf}`;
   website.innerHTML=`<a href="${companie.website}" target="_blank">${companie.website}</a>`;
   paragraph4.textContent=`${companie.membership}`;

   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
   portrait.setAttribute('src', companie.logourl);
   portrait.setAttribute('alt', `Portait of ${companie.name}`);
   portrait.setAttribute('loading','lazy');

   // Add/append the section(card) with the h2 element
   card.appendChild(portrait);
   card.appendChild(heading);
   card.appendChild(paragraph);
   card.appendChild(paragraph2);
   card.appendChild(website);
   card.appendChild(paragraph4);
   
   

   // Add/append the existing HTML div with the cards class with the section(card)
   document.querySelector('div.cards').appendChild(card);
}