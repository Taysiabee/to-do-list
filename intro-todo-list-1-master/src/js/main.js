let newItem = document.querySelector('.new-item')
let addItem = document.querySelector('.add-item')
let todo = document.querySelector('.todo') 
let clear =   document.querySelector('.clear-finished')
let total = document.querySelector('.total')


let addTheThing = function() {
	let li = document.createElement('li')
	li.innerText = newItem.value
	todo.appendChild( li )

	let checkedOffButton = document.createElement("button")
	checkedOffButton.innerText ="Check Off"
	li.appendChild(checkedOffButton)

	checkedOffButton.addEventListener('click', function(){
		li.classList.add('finished')
			doTheCounting()
		
		

	})

	clear.addEventListener('click', function(){
		if (li.classList.contains('finished')) {
	    	li.remove()
			
			doTheCounting()
	  	}
	})
}



addItem.addEventListener('click', function(){
// do other stuff
	
	addTheThing()
	doTheCounting()
})




let doTheCounting = function() {
	// console.log(document.querySelectorAll('li.finished').length)
	// total.innerHTML = document.querySelectorAll('li').length
	total.innerHTML =  document.querySelectorAll('li').length
	// classList.remove('.finished').length
}


