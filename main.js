window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

  // activateMenuAtCurrentSection(services)
}


function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2  

// verificar se a sessão passou da linha,
//quais os dados que vou precisar
const sectionTop = section.offsetTop
const sectionHeight = section.offsetHeight
const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

// informações dos dados e da lógica
// console.log('o topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline)
// quais os dados que vou precisar?


// a seção termina aonde?
const sectionEndsAt = sectionTop + sectionHeight

// o final da seção passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine

// console.log('o fundo da seção passou da linha?', sectionEndPassedTargetline)

// limites da seção

const sectionBoundaries = sectionTopReachOrPassedTargetline &&!sectionEndPassedTargetline


const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`) 

// console.log('estou na seção home')

menuElement.classList.remove('active')
 if (sectionBoundaries) { 
 menuElement.classList.add('active')
}
} 


// verificar se a base está abaixo da linha alvo.

function showNavOnScroll() {
  if (scrollY > 0) { 
    navigation.classList.add('scroll')
  } else { 
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  
  if (scrollY > 550) { 
  backToTopButton.classList.add('show')
  } else { 
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)

