const message = document.getElementById('message');
const burgerMenu = document.getElementById('burgerMenu');
const sideMenu = document.getElementById('sideMenu');
const deleteIcon = document.getElementById('deleteIcon');
const showMoreBtn = document.getElementById('showMoreBtn');
const moreCard = document.getElementById('moreCard');













//showcase message change
message.addEventListener('click', function(){
    message.innerHTML = `<h2>Have a Good Time!</h2>`;
})

//show side menu
burgerMenu.addEventListener('click', function(event){
    sideMenu.style.right = '0px';
})

//hide side menu
deleteIcon.addEventListener('click', function(){
    sideMenu.style.right = '-180px';
})

//show more card
showMoreBtn.addEventListener('click', function(){
    moreCard.style.display = 'flex';
})

