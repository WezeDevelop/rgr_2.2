const images = document.querySelectorAll('.afishi__img__item')
const controlls = document.querySelectorAll('.controlls')
let imageIndex = 0
const titles = document.querySelectorAll('.afishi__text__title')
let titleindex = 0

const dateInfo = document.getElementById("date-info")
const timeInfo = document.getElementById("time-info")
const stringRepresentation = document.getElementById("string-representation")


function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active')
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex -1;

            if  (index < 0) {
                index = images.length - 1;
            }

            show(index)
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0
            }
            show(index)
        }
    })
})

show(imageIndex)



function showtitle(index) {
    titles[titleindex].classList.remove('active');
    titles[index].classList.add('active')
    titleindex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = titleindex -1;

            if  (index < 0) {
                index = titles.length - 1;
            }

            showtitle(index)
        } else if (event.target.classList.contains('next')) {
            let index = titleindex + 1;
            if (index >= titles.length) {
                index = 0
            }
            showtitle(index)
        }
    })
})

showtitle(titleindex)

function setDate() {
    const date = new Date();
    dateInfo.textContent = date.toLocaleDateString();
    timeInfo.textContent = date.toLocaleTimeString();
}

setInterval(() => {
    setDate();
}, 1000);