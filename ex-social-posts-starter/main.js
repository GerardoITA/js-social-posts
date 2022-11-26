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
const divPostLikesCounter = document.createElement("div");


for (let i = 0; i < posts.length; i++){
    divPost.classList.add("post");
    divContainer.append(divPost);
    /* /////// Post Header /////// */
    divPostHeader.classList.add("post__header");
    divPost.append(divPostHeader);

    divPostMeta.classList.add("post-meta");
    divPostHeader.append(divPostMeta);

        divPostMetaIcon.classList.add("post-meta__icon");
        divPostMeta.append(divPostMetaIcon);

            let DivPostMetaIconImg = document.createElement("img");
            divPostMetaIcon.append(DivPostMetaIconImg);
            DivPostMetaIconImg.src = posts[i].image

        divPostMetaData.classList.add("post-meta__data");
        divPostMeta.append(divPostMetaData);

            divPostMetaDataAuthor.classList.add("post-meta__author");
            divPostMetaData.append(divPostMetaDataAuthor);
            divPostMetaDataAuthor.innerHTML = posts[i].name


            divPostMetaDataTime.classList.add("post-meta__time");
            divPostMetaData.append(divPostMetaDataTime);
            divPostMetaDataTime.innerHTML = posts[i].created

    /* /////// Post /////// */
    divPostText.classList.add("post__text");
    divPost.append(divPostText);
    divPostText.innerHTML = posts[i].content

    divPostImage.classList.add("post__image");
    divPost.append(divPostImage);
    divPostImage.src = posts[i].media

    /* /////// Post Footer /////// */
    divPostFooter.classList.add("post__footer");
    divPost.append(divPostFooter);

    divPostLikes.classList.add("likes");
    divPostFooter.append(divPostLikes);

        divPostLikesCTA.classList.add("likes__cta");
        divPostLikes.append(divPostLikesCTA);

        divPostLikesCounter.classList.add("likes__counter");
        divPostLikes.append(divPostLikesCounter);
        
    let JSLikesCounterNum = 80;
    divPostLikesCounter.innerHTML = `
        Piace a ${JSLikesCounterNum} persone
    `

    let JSLikeButton = document.createElement("a");
    JSLikeButton.classList.add("like-button", "js-like-button");
    JSLikeButton.innerHTML = `
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    `;


    JSLikeButton.addEventListener("click",
        
        function onClick(){
            JSLikesCounterNum++;
            this.classList.toggle("like-button--liked");
            console.log(JSLikesCounterNum)
        }
        
        )

}
