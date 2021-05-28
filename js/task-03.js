const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const creatGallery = images.forEach((image) => {
   const galleryRef = document.querySelector('#gallery');
   
   const galleryListRef = document.createElement('li');
   galleryListRef.style.listStyleType = 'none';
   galleryListRef.classList.add('js-gallery__list')
   galleryRef.appendChild(galleryListRef);


   const imageRef = document.createElement('img');
   imageRef.classList.add('js-gallery__image')
   imageRef.setAttribute('src', image.url);
   imageRef.setAttribute('width', 400);
   imageRef.setAttribute('alt', image.alt);

   galleryListRef.appendChild(imageRef);
})
  

const galleryStyleRef = document.querySelector('#gallery');
galleryStyleRef.style.display = 'flex';
galleryStyleRef.style.justifyContent = 'space-evenly';
galleryStyleRef.style.margin = '30px';
galleryStyleRef.style.padding = '0px';
console.log(galleryStyleRef)

// const galleryListStyleRef = document.querySelector('ul > .js-gallery__list');
// console.log(galleryListStyleRef);
// galleryListStyleRef.style.margin = '40px';

// const imageStyleRef = document.querySelectorAll('.js-gallery__image');
// imageRef.style.objectFit = 'contain';
