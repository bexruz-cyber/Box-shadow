let shadowBox = document.querySelectorAll('.shadow-box')
let title = document.querySelectorAll('.shadow-box-title')
let jsbox = document.querySelector('.shadow-box-js')

// jsbox.addEventListener('click' , function(){
//     console = jsbox.classList
// })

shadowBox.forEach(function(box , index){
        box.addEventListener('click' , function(){
            let a  = title[index].textContent
            title[index].textContent = "Copied"
            setInterval(function(){
                title[index].textContent = a
            } , 1000)
            
            navigator.clipboard.writeText(`box-shadow:${window.getComputedStyle(box).boxShadow};`)
        })
})