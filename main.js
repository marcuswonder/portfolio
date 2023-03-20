const professionalToggleSlctEl = document.getElementById('professional-toggle')
const toggleEl = document.getElementById('flexSwitchCheckDefault')
const personalToggleSlctEl = document.getElementById('personal-toggle')

const headerEl = document.getElementById('header')
const subNavEl = document.getElementById('sub-nav')

const personalEl = Array.from(document.getElementsByClassName("personalEl"))
const professionalEl = Array.from(document.getElementsByClassName("professionalEl"))

const personalNav = document.getElementsByClassName("personal-nav")[0]
const professionalNav = document.getElementsByClassName("professional-nav")[0]

const navButtons = Array.from(document.getElementsByClassName("nav-button"))

const professionalAboutBtnEl = document.getElementById("professional-about-button")
const professionalSkillsBtnEl = document.getElementById("professional-skills-button")
const professionalProjectsBtnEl = document.getElementById("professional-projects-button")
const professionalTestimonialsBtnEl = document.getElementById("professional-testimonials-button")

const personalAboutBtnEl = document.getElementById("personal-about-button")
const personalExperiencesBtnEl = document.getElementById("personal-experiences-button")
const personalProjectsBtnEl = document.getElementById("personal-projects-button")

const professionalAboutEl = document.getElementById("professional-about")
const professionalSkillsEl = document.getElementById("professional-skills")
const professionalProjectsEl = document.getElementById("professional-projects")
const professionalTestimonialsEl = document.getElementById("professional-testimonials")

const personalAboutEl = document.getElementById("personal-about")
const personalExperiencesEl = document.getElementById("personal-experiences")
const personalProjectsEl = document.getElementById("personal-projects")

const thisPortfolioProProjectBtn = document.getElementById("thisPortfolioBtnEl")
const thisPortfolioProProject = document.getElementById("this-porfolio")

function deselectAllNavButtons() {
    navButtons.forEach(function(btns) {
        btns.setAttribute('selected', 'false')
    })
}

function hideAllConditionalEls() {
    personalEl.forEach(function(els) {
        els.style.display = 'none'
    })

    professionalEl.forEach(function(els) {
        els.style.display = 'none'
    })
}

window.onload = function hideElements() {
    if(toggleEl.checked === true) {
        console.log("toggle is checked to personal")
        deselectAllNavButtons()
        hideAllConditionalEls()
        personalNav.style.display = ''
        personalAboutEl.style.display = ''

    } else {
        console.log("toggle is checked to professional")
        deselectAllNavButtons()
        hideAllConditionalEls()
        professionalNav.style.display = ''
        professionalAboutBtnEl.setAttribute('selected', 'true')
        professionalAboutEl.style.display = ''
    }
}

professionalToggleSlctEl.addEventListener('click', function() {
    if(toggleEl.checked === false ) {
        toggleEl.checked = true    
    } else if(toggleEl.checked === true ) {
        toggleEl.checked = false    
    }
    handleToggleState()
})

toggleEl.addEventListener('click', function() {
    handleToggleState()
})

personalToggleSlctEl.addEventListener('click', function() {
    if(toggleEl.checked === false ) {
        toggleEl.checked = true    
    } else if(toggleEl.checked === true ) {
        toggleEl.checked = false    
    }
    handleToggleState()
})

function handleToggleState() {
    if(toggleEl.checked === true) {
        resetToPersonalPage()
        personalAboutBtnEl.setAttribute('selected', 'true')
        personalAboutEl.style.display = ''
    } else {
        resetToProfessionalPage()
        professionalAboutBtnEl.setAttribute('selected', 'true')
        professionalAboutEl.style.display = ''
    }
}

function resetToTopNavBarsOnly() {
    deselectAllNavButtons()
    hideAllConditionalEls()
    headerEl.style.display = 'none'
}

function resetToProfessionalPage() {
    deselectAllNavButtons()
    hideAllConditionalEls()
    professionalNav.style.display = ''
}

function resetToPersonalPage() {
    deselectAllNavButtons()
    hideAllConditionalEls()
    personalNav.style.display = ''
}



function deselectAllNavButtonEls() {
    let NavButtonEls = Array.from(document.querySelectorAll(".nav-button"))
    NavButtonEls.forEach(function(el) {
        el.setAttribute('selected', 'false')
    })
}

professionalAboutBtnEl.onclick = function() {
    resetToProfessionalPage()
    professionalAboutBtnEl.setAttribute('selected', 'true')
    professionalAboutEl.style.display = ''
}

professionalSkillsBtnEl.onclick = function() {
    resetToProfessionalPage()
    professionalSkillsBtnEl.setAttribute('selected', 'true')
    professionalSkillsEl.style.display = ''
}

professionalProjectsBtnEl.onclick = function() {
    resetToProfessionalPage()
    professionalProjectsBtnEl.setAttribute('selected', 'true')
    professionalProjectsEl.style.display = ''
}

professionalTestimonialsBtnEl.onclick = function() {
    resetToProfessionalPage()
    professionalTestimonialsBtnEl.setAttribute('selected', 'true')
    professionalTestimonialsEl.style.display = ''
}

personalAboutBtnEl.onclick = function() {
    resetToProfessionalPage()
    personalAboutBtnEl.setAttribute('selected', 'true')
    personalAboutEl.style.display = ''
}

personalExperiencesBtnEl.onclick = function() {
    resetToPersonalPage()
    personalExperiencesBtnEl.setAttribute('selected', 'true')
    personalExperiencesEl.style.display = ''
}

personalProjectsBtnEl.onclick = function() {
    resetToPersonalPage()
    personalProjectsBtnEl.setAttribute('selected', 'true')
    personalProjectsEl.style.display = ''
}


// 
// 
// 
// Hide Header Element when showing  below

thisPortfolioProProjectBtn.onclick = function() {
    resetToProfessionalPage()
    thisPortfolioProProject.style.display = ''
}