console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('shade1')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'shade1'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'shade2'){
		document.getElementById('theme-style').href = 'shade2.css'
	}

	if(mode == 'shade3'){
		document.getElementById('theme-style').href = 'shade3.css'
	}

	if(mode == 'shade4'){
		document.getElementById('theme-style').href = 'shade4.css'
	}

	localStorage.setItem('theme', mode)
}