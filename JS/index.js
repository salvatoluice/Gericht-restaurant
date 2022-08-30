const wines = [
    {
      title: 'Chapel Hill Shiraz <br /> AU | Bottle',
      price: '$56',
      tags: 'AU | Bottle',
    },
    {
      title: 'Catena Malbee',
      price: '$59',
      tags: 'AU | Bottle',
    },
    {
      title: 'La Vieillw Rose',
      price: '$44',
      tags: 'FR | 750 ml',
    },
    {
      title: 'Rhino Pale Ale',
      price: '$31',
      tags: 'CA | 750 ml',
    },
    {
      title: 'Irish Guinness',
      price: '$26',
      tags: 'IE | 750 ml',
    },
  ];
  
  const cocktails = [
    {
      title: 'Aperol Sprtiz',
      price: '$20',
      tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
    },
    {
      title: "Dark 'N' Stormy",
      price: '$16',
      tags: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
      title: 'Daiquiri',
      price: '$10',
      tags: 'Rum | Citrus juice | Sugar',
    },
    {
      title: 'Old Fashioned',
      price: '$31',
      tags: 'Bourbon | Brown sugar | Angostura Bitters',
    },
    {
      title: 'Negroni',
      price: '$26',
      tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    },
  ];
  
//   const awards = [
//     {
//       imgUrl: images.award02,
//       title: 'Bib Gourmond',
//       subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//     },
//     {
//       imgUrl: images.award01,
//       title: 'Rising Star',
//       subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//     },
//     {
//       imgUrl: images.award05,
//       title: 'AA Hospitality',
//       subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//     },
//     {
//       imgUrl: images.award03,
//       title: 'Outstanding Chef',
//       subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
//     },
//   ];
console.log(document.getElementById('title1'))

document.getElementById('title1').innerText = wines.map(getFullWine)


function getFullWine(wines) {
       return [wines.title]
    }


    document.getElementById('price1').innerText = wines.map(getFullPrice)


    function getFullPrice(wines) {
        return [wines.price]
        }
        document.getElementById('tags1').innerText = wines.map(getFullTag)


        function getFullTag(wines) {
            return [wines.tags]
            }



  //  console.log(getFullWine);


// let main = document.getElementsByClassName("app__menuitem-name")//.innerHTML = wines.map(getFullWine);
// let menu = document.createElement('p')
// menu.innerText = "Menu" //cocktails.map(getFullWine());
// main.appendChild(menu);
// function getFullWine(item) {
//   return [item.title,item.price, item.tags].join(" ");
// }
