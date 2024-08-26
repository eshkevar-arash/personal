var mobileMenuBtn=$('.mobile-menu-btn')
var mobileMenu=$('.mobile-menu')
var dark=$('.dark')
var desktopMenuItem=$('.desktop-menu__item')
var mobileMenuItem=$('.mobile-menu__item')
var desktopMenu=$('.desktop-menu')
var t=[]
mobileMenuBtn.click(function (){
    var tag=$(this)
    tag.toggleClass('mobile-menu-btn--active')
    desktopMenu.toggleClass('desktop-menu--open')
    if (tag.hasClass('mobile-menu-btn--active')){
        dark.fadeIn(150)
        // mobileMenu.animate({'left':0},500)
    }else {
        dark.fadeOut(150)
       /* mobileMenu.animate({'left':'-30rem'},500)*/
    }
})
dark.click(function (){
    var tag=$(this)
    tag.fadeOut(150)
    mobileMenuBtn.removeClass('mobile-menu-btn--active')
    mobileMenu.animate({'left':'-30rem'},500)
    desktopMenu.removeClass('desktop-menu--open')
})

desktopMenuItem.hover(function (){
    var tag = $(this)
    var tAttr = tag.attr('data-time');
    clearTimeout(t[tAttr]);
    t[tAttr] = setTimeout(function () {
        tag.addClass('desktop-menu-items--hover');
    }, 600);
},function (){
    var tag = $(this)
    var tAttr = tag.attr('data-time');
    clearTimeout(t[tAttr]);
    t[tAttr] = setTimeout(function () {
        tag.removeClass('desktop-menu-items--hover');
    }, 600)
})
/*=======================
    intersection observer api خیلیییییییییییییییییییی مهههههههههههمممممممممممم
=======================*/

let desktopMenuListHandler=document.querySelector('.desktop-menu__list')
console.log(desktopMenuListHandler)
let deskTopMenuItems=document.getElementsByClassName('desktop-menu__item')
deskTopMenuItems=Object.values(deskTopMenuItems)
deskTopMenuItems.forEach(function (desktopMenuItem){
    desktopMenuItem.addEventListener('click',function (event){
        event.preventDefault()
        document.querySelector('.desktop-menu__item--active').classList.remove('desktop-menu__item--active')
        this.classList.add('desktop-menu__item--active')
        let dataSection=this.getAttribute('data-section')
        let sectionTop=document.querySelector(`.${dataSection}`).offsetTop
        window.scrollTo({
            top:sectionTop-130,
            behavior:"smooth"
        })

    })
})
let sections=document.querySelectorAll("main > section")
sections=Object.values(sections)
const observer=new IntersectionObserver(observerHandler)
function observerHandler(allSection){
    if (allSection[0].isIntersecting==true){
        let choosingMenuActive=allSection[0].target.className
        document.querySelector('.desktop-menu__item--active').classList.remove('desktop-menu__item--active')
        document.querySelector('.'+choosingMenuActive+'Menu').classList.add('desktop-menu__item--active')
    }
}
sections.forEach(function (section){
    observer.observe(section)
})
/*
mobileMenuItem.hover(function (){
    var tag = $(this)
    var tAttr = tag.attr('data-time');
    clearTimeout(t[tAttr]);
    t[tAttr] = setTimeout(function () {
        tag.addClass('mobile-menu-items--hover');
    }, 600);
},function (){
    var tag = $(this)
    var tAttr = tag.attr('data-time');
    clearTimeout(t[tAttr]);
    t[tAttr] = setTimeout(function () {
        tag.removeClass('mobile-menu-items--hover');
    }, 600)
})*/
/*=========================
    Section Resume Start
=========================*/
let resumeItemsLeft=document.querySelectorAll('.resume__item-left')
resumeItemsLeft=Object.values(resumeItemsLeft)
resumeItemsLeft.forEach(function (resumeItemLeft){
    resumeItemLeft.addEventListener('click',function (){
        document.querySelector('.resume__item-left--bg-firooze').classList.remove('resume__item-left--bg-firooze')
        this.classList.add('resume__item-left--bg-firooze')
        let dataId=this.getAttribute('data-item')
        document.querySelector('.resume__list-right--show').classList.remove('resume__list-right--show')
        document.getElementById(dataId).classList.add('resume__list-right--show')
    })
})
/*=========================
    Section Portfolio Start
=========================*/
let portfolioNavItem=document.getElementsByClassName('portfolio__nav-item')
portfolioNavItems=Object.values(portfolioNavItem)
let portfolioSliders=document.getElementsByClassName('portfolio__slider')
portfolioSliders=Object.values(portfolioSliders)

portfolioNavItems.forEach(function (portfolioNavItem){
    portfolioNavItem.addEventListener('click',function (){
        document.querySelector('.portfolio__nav-item--active').classList.remove('portfolio__nav-item--active')
        this.classList.add('portfolio__nav-item--active')
        let dataShow=this.getAttribute('data-show')
        document.querySelector('.portfolio__slider--show').classList.remove('portfolio__slider--show')
        document.getElementById(dataShow).classList.add('portfolio__slider--show')
        console.log(dataShow)
    })
})
