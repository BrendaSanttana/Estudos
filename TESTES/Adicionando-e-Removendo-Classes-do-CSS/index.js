let buttonToggle = document.querySelector('.button-toggle');
let body = document.body;
let classStyle = 'dark-mode';


buttonToggle.addEventListener ('click', function() {
 body.classList.contains(classStyle)
 ? body.classList.remove (classStyle)
 : body.classList.add (classStyle);

})

// outra forma;
//body.classList.toggle(classStyle);