// array de imagens simulando um json, para ser usada na função imageLoader
const images = [
    {"id": "1", "url":'./images/chrono.jpg'},
    {"id": "2", "url":'./images/inuyasha.jpg'},
    {"id": "3", "url":'./images/ippo.png'},
    {"id": "4", "url":'./images/tenchi.jpg'},
    {"id": "5", "url":'./images/tenjhotenge.jpg'},
    {"id": "6", "url":'./images/yuyuhakusho.jpg'}
];

const containerImages = document.getElementById("container-images");
console.log(containerImages);

//carregar as imagens dinamicamente
const imageLoader = (images, container) => {

    images.forEach( image => {
        container.innerHTML += `
            <div class = "image-item" number-img = "${image.id}">
            <img src="${image.url}" />
            </div>
        `
    })
};
imageLoader(images, containerImages);

// as imagens do array, guardadas numa nova variavel, para assim que o slide mudar, a posicção das imagens no array atualizar também.
let imageItem = document.querySelectorAll(".image-item");


const nextImage = () => {
    containerImages.appendChild(imageItem[0])
    //a imagem atual do slide, será adicionada ao final do array

    imageItem = document.querySelectorAll(".image-item")
    //o array de imagens será lido novamente pelo browser e atualizará o indice das imagens
};

document.querySelector("#next-arrow").addEventListener("click", nextImage);

const previousImage = () => {
    const isLastImage = imageItem[imageItem.length -1]
    // acessará o array e obterá o indice da última imagem do array

    containerImages.insertBefore(isLastImage, imageItem[0])
    // irá inserir a imagem anterior no lugar da imagem atual

    imageItem = document.querySelectorAll(".image-item")
     //o array de imagens será lido novamente pelo browser e atualizará o indice das imagens
};

document.querySelector("#previous-arrow").addEventListener("click", previousImage);