const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const divContainer = document.getElementById("container");
const divPost = document.createElement("div");
const divPostHeader = document.createElement("div");
const divPostMeta = document.createElement("div");
const divPostMetaIcon = document.createElement("div");
const divPostMetaData = document.createElement("div");
const divPostMetaDataAuthor = document.createElement("div");
const divPostMetaDataTime = document.createElement("div");
const divPostText = document.createElement("div");
const divPostImage = document.createElement("div");
const divPostFooter = document.createElement("div");
const divPostLikes = document.createElement("div");
const divPostLikesCTA = document.createElement("div");

divPost.classList.add("post");
divContainer.appendChild(divPost);
 /* /////// Post Header /////// */
divPostHeader.classList.add("post__header");
divPost.appendChild(divPostHeader);

divPostMeta.classList.add("post-meta");
divPostHeader.appendChild(divPostMeta);

divPostMetaIcon.classList.add("post-meta__icon");
divPostMeta.appendChild(divPostMetaIcon);

divPostMetaData.classList.add("post-meta__data");
divPostMeta.appendChild(divPostMetaData);

divPostMetaDataAuthor.classList.add("post-meta__author");
divPostMetaData.appendChild(divPostMetaDataAuthor);

divPostMetaDataTime.classList.add("post-meta__time");
divPostMetaData.appendChild(divPostMetaDataTime);
/* /////// Post /////// */
divPostText.classList.add("post__text");
divPost.appendChild(divPostText);

divPostImage.classList.add("post__image");
divPost.appendChild(divPostImage);
/* /////// Post Footer /////// */
divPostFooter.classList.add("post__footer");
divPost.appendChild(divPostFooter);

divPostLikes.classList.add("likes");
divPostFooter.appendChild(divPostLikes);

divPostLikesCTA.classList.add("likes__cta");
divPostLikes.appendChild(divPostLikesCTA);

