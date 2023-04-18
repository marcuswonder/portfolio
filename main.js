const pageContainerEl = document.getElementById('page-container')
const loadingContainerEl = document.getElementById('loading-container')

const professionalToggleSlctEl = document.getElementById('professional-toggle')
const toggleEl = document.getElementById('flexSwitchCheckDefault')
const personalToggleSlctEl = document.getElementById('personal-toggle')

const headerEl = document.getElementById('header')
const subNavEl = document.getElementById('sub-nav')

const professionalHeadshotEl = document.getElementById('professionalHeadshot')
const personalHeadshotEl = document.getElementById('personalHeadshot')

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


const cancanProProjectBtn = document.getElementById("cancanBtnEl")
const cancanProProject = document.getElementById("cancan")

const foodioProProjectBtn = document.getElementById("foodioBtnEl")
const foodioProProject = document.getElementById("foodio")

const thisPortfolioProProjectBtn = document.getElementById("thisPortfolioBtnEl")
const thisPortfolioProProject = document.getElementById("this-porfolio")

const blackjackProProjectBtn = document.getElementById("blackjackBtnEl")
const blackjackProProject = document.getElementById("blackjack")

const growSaloneProProjectBtn = document.getElementById("growSaloneBtnEl")
const growSaloneProProject = document.getElementById("growSalone")

const educAidProProjectBtn = document.getElementById("educAidBtnEl")
const educAidProProject = document.getElementById("educAid")

const roadmenExperienceBtn = document.getElementById("roadmenBtnEl")
const roadmenExperience = document.getElementById("roadmen")

const saloneExperienceBtn = document.getElementById("saloneBtnEl")
const saloneExperience = document.getElementById("salone")

const sasExperienceBtn = document.getElementById("sasBtnEl")
const sasExperience = document.getElementById("sas")

const samuelBeckettPersonalProjectBtn = document.getElementById("beckettBtnEl")
const samuelBeckettPersonalProject = document.getElementById("samuelBeckett")

const echoFestivalPersonalProjectBtn = document.getElementById("echoFestivalBtnEl")
const echoFestivalPersonalProject = document.getElementById("echoFestival")

const growSaloneFilmsPersonalProjectBtn = document.getElementById("growSaloneFilmsBtnEl")
const growSaloneFilmsPersonalProject = document.getElementById("growSaloneFilms")

const echoLazyImagesEls = document.getElementsByClassName("echo-lazy")
const roadmenLazyImagesEls = document.getElementsByClassName("roadmen-lazy")
const sasLazyImagesEls = document.getElementsByClassName("sas-lazy")
const saloneLazyImagesEls = document.getElementsByClassName("salone-lazy")
const educAidLazyImagesEls = document.getElementsByClassName("educAid-lazy")


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
        loadingContainerEl.style.display = 'none'
        pageContainerEl.style.display = ''
        resetToPersonalPage()
        deselectAllNavButtons()
        hideAllConditionalEls()
        personalNav.style.display = ''
        personalAboutEl.style.display = ''
        personalHeadshotEl.style.display = ''

    } else {
        loadingContainerEl.style.display = 'none'
        pageContainerEl.style.display = ''
        resetToProfessionalPage()
        deselectAllNavButtons()
        hideAllConditionalEls()
        professionalNav.style.display = ''
        professionalAboutBtnEl.setAttribute('selected', 'true')
        professionalAboutEl.style.display = ''
        professionalHeadshotEl.style.display = ''
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
    professionalHeadshotEl.style.display = ''
}

function resetToPersonalPage() {
    deselectAllNavButtons()
    hideAllConditionalEls()
    personalNav.style.display = ''
    personalHeadshotEl.style.display = ''
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
    resetToPersonalPage()
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


cancanProProjectBtn.onclick = function() {
    resetToProfessionalPage()
    cancanProProject.style.display = ''
    scrollToSubNav()
}

foodioProProjectBtn.onclick = function() {
    resetToProfessionalPage()
    foodioProProject.style.display = ''
    scrollToSubNav()
}

thisPortfolioProProjectBtn.onclick = function() {
    resetToProfessionalPage()
    thisPortfolioProProject.style.display = ''
    scrollToSubNav()
}

blackjackProProjectBtn.onclick = function() {
    resetToProfessionalPage()
    blackjackProProject.style.display = ''
    scrollToSubNav()
}

growSaloneProProjectBtn.onclick = function() {
    resetToProfessionalPage()
    growSaloneProProject.style.display = ''
    scrollToSubNav()
}

educAidProProjectBtn.onclick = function() {
    resetToProfessionalPage()
    educAidProProject.style.display = ''
    scrollToSubNav()
    loadEducAidImages()
}

roadmenExperienceBtn.onclick = function() {
    resetToPersonalPage()
    roadmenExperience.style.display = ''
    scrollToSubNav()
    loadRoadmenImages()
}

saloneExperienceBtn.onclick = function() {
    resetToPersonalPage()
    saloneExperience.style.display = ''
    scrollToSubNav()
    loadSaloneImages()
}

sasExperienceBtn.onclick = function() {
    resetToPersonalPage()
    sasExperience.style.display = ''
    scrollToSubNav()
    loadSasImages()
}

growSaloneFilmsPersonalProjectBtn.onclick = function() {
    resetToPersonalPage()
    growSaloneFilmsPersonalProject.style.display = ''
    scrollToSubNav()
}

echoFestivalPersonalProjectBtn.onclick = function() {
    resetToPersonalPage()
    echoFestivalPersonalProject.style.display = ''
    scrollToSubNav()
    loadEchoImages()
}

samuelBeckettPersonalProjectBtn.onclick = function() {
    resetToPersonalPage()
    samuelBeckettPersonalProject.style.display = ''
    scrollToSubNav()
}















function scrollToSubNav() {
    document.getElementById("sub-nav").scrollIntoView();
}

function scrollToGrowSaloneAccordion() {
    document.getElementById("startOfPSP").scrollIntoView();
}

const growSaloneAccordionEl1 = document.getElementById("growSaloneAccordion1")
const growSaloneAccordionEl2 = document.getElementById("growSaloneAccordion2")
const growSaloneAccordionEl3 = document.getElementById("growSaloneAccordion3")

growSaloneAccordionEl1.onclick = function() {
    console.log("growSaloneAccordionEl1 hit")
    scrollToGrowSaloneAccordion()
}

growSaloneAccordionEl2.onclick = function() {
    scrollToGrowSaloneAccordion()
}

growSaloneAccordionEl3.onclick = function() {
    scrollToGrowSaloneAccordion()
}


var myCarousel = document.querySelector('#roadmenCarouselOne')
var carousel = new bootstrap.Carousel(myCarousel)

function loadEchoImages() {
    echoLazyImagesEls.foreach(function(el) {
        el.setAttribute('loading', 'eager')
    })
}

function loadRoadmenImages() {
    roadmenLazyImagesEls.foreach(function(el) {
        el.setAttribute('loading', 'eager')
    })
}

function loadSasImages() {
    sasLazyImagesEls.foreach(function(el) {
        el.setAttribute('loading', 'eager')
    })
}

function loadSaloneImages() {
    saloneLazyImagesEls.foreach(function(el) {
        el.setAttribute('loading', 'eager')
    })
}

function loadEducAidImages() {
    educAidLazyImagesEls.foreach(function(el) {
        el.setAttribute('loading', 'eager')
    })
}