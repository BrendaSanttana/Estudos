let element = document.getElementsByClassName('article')[0]

element.addEventListener('click', function(event){
    console.log('--> target', event.target);
    console.log ('--> currentTarget', event.currentTarget);
})

let elementLink = document.getElementsByClassName('link_to')[0]

elementLink.addEventListener('click', function(event){
    event.preventDefault()
    event.stopPropagation()
})