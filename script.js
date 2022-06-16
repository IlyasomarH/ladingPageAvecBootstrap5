

// const element = document.querySelectorAll('nav ul li a')
// const li= document.querySelectorAll('li');

// for(let i=0; i<3; i++){
// 	element[i].addEventListener('click',function(){
// 		li[0].classList.remove('active ')
//        li[i].classList.add('active')
// 	})
// }



let elemntClique=false;
const li= document.querySelectorAll('li')

li[0].addEventListener('click',function(){
	
	if(li[1].classList.contains('active') || li[2].classList.contains('active')){
		li[1].classList.remove('active')
		li[2].classList.remove('active')
		li[0].classList.add('active')
		document.querySelector('span').classList.replace('bg-white', 'bg-primary')
		document.querySelector('span').classList.add('text-white')
	}else{
		li[0].classList.add('active')
	}

})

li[1].addEventListener('click',function(){
	
	if(li[0].classList.contains('active') || li[2].classList.contains('active')){
		li[0].classList.remove('active')
		li[2].classList.remove('active')
		li[1].classList.add('active')
		document.querySelector('span').classList.replace('bg-white', 'bg-primary')
		document.querySelector('span').classList.add('text-white')
	}else{
		li[1].classList.add('active')
	}
})

li[2].addEventListener('click',function(){
	
	if(li[1].classList.contains('active') || li[0].classList.contains('active')){
		li[0].classList.remove('active')
		li[1].classList.remove('active')
		li[2].classList.add('active')
		document.querySelector('span').classList.replace('bg-primary', 'bg-white')
	
		document.querySelector('span').classList.replace('text-white', 'text-dark')
	}else{
		li[2].classList.add('active')
		document.querySelector('span').classList.replace('bg-primary', 'bg-white')
		document.querySelector('span').classList.add('text-dark')
	}
})




// li[1].addEventListener('click',function(){
// 	li[1].classList.add('active')
// })

let elementCliquer=12;
let estContient=false

//i=0


//  for(let i=0; i<3; i++){
	// li[0].addEventListener('click',function(){
	// 	li[0].classList.add('active')
    //     elementCliquer=0
	// 	 estContient=li[0].classList.contains('active')
	// 	if(elementCliquer!=0 && estContient ){

	// 		li[0].classList.remove('active')


	// 	}
		
	// 	else if(elementCliquer!=1 ){
	// 		// estContient=li[1].classList.contains('active')

	// 			li[1].classList.remove('active')
			

			

	// 		}
	// 	else if(elementCliquer!=2){
	// 		// estContient=li[2].classList.contains('active')
	// 		// if(estContient){
	// 			li[1].classList.remove('active')
	// 		// }
			
	// 	}
	// })
	





     

// }