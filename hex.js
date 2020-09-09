const colorBtn=document.querySelector('.colorBtn');
const bodyBcg=document.querySelector('body');
const colors=['yellow','red','green', '#3b5998'];
colorBtn.addEventListener('click',changecolor);
//function to change the color which will work when called on clicking the button
function changecolor()
{
    let random=Math.floor(Math.random()*(colors.length))
    bodyBcg.style.backgroundColor=colors[random];
}
