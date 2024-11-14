const inputQuantity=document.querySelector('.input-quantity')
const btnIncrement=document.querySelector('#increment')
const btnDecrement=document.querySelector('#decrement')


let valueByDefault=parseInt(inputQuantity.value)


btnIncrement.addEventListener('click',()=> {
    valueByDefault +=1
    inputQuantity.value=valueByDefault

})

btnDecrement.addEventListener('click',()=> {
    if(valueByDefault===1){
        return
    }
    valueByDefault -=1
    inputQuantity.value=valueByDefault

})


const toggleDescripcion=document.querySelector('.title-description')
const toggleAdditional=document.querySelector('.title-additional-information')
const toggleReviews=document.querySelector('.title-reviews')



const contentDescripcion=document.querySelector('.text-description')
const contentAdditional=document.querySelector('.text-additional-information')
const contentReviews=document.querySelector('.text-reviews')



toggleDescripcion.addEventListener('click',()=>{
    contentDescripcion.classList.toggle('hidden')
})

toggleAdditional.addEventListener('click',()=>{
    contentAdditional.classList.toggle('hidden')
})
contentReviews.addEventListener('click',()=>{
    contentReviews.classList.toggle('hidden')
})