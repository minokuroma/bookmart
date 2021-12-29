$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		centerMode: true,
  		centerPadding: '60px',
        waitForAnimate: 'true',
		slidesToShow:5,
		speed:500,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
"use strict"


const mainLogo = document.querySelector(".main-logo");
const navLi = document.querySelectorAll("header li");
const burger = document.querySelectorAll(".burger-button");
const lines = document.querySelectorAll(".line");
const burgerMenu = document.querySelectorAll(".burger-menu");
const profile = document.querySelector(".profile");
const exit = document.querySelector(".exit");
const popUpList = document.querySelectorAll(".burger-menu li")

const mainPage = document.querySelector(".main");

const booksPage = document.querySelector(".books-p1");
const booksPage2 = document.querySelector(".books-p2");
const audioPage = document.querySelector(".audio");
const slides = document.querySelectorAll(".slider__item")
const recomendationPage = document.querySelector(".recomendation");
const login = document.querySelector(".login");
const authorsPage = document.querySelector(".authors");
const buyPage = document.querySelector(".buy-page");

const blockContact = document.querySelector(".contact");
const imgContact = document.querySelector(".img-contact");

const pages = [mainPage, booksPage, booksPage2, audioPage, blockContact, recomendationPage, login, authorsPage];

const bookFace = document.querySelectorAll(".face");
const bookArrowRight = document.querySelector(".books-arrow-right .arrow img") ;
const bookArrowLeft = document.querySelector(".arrow-left img");
const bookPageCovers = ['book-cover1', 'book-cover2', 'book-cover3', 'book-cover4', 'book-cover5', 'book-cover6', 'book-cover7', 'book-cover8'];
const kidsPageCovers = ['kidsCover1', 'kidsCover2', 'kidsCover3', 'kidsCover4', 'kidsCover5', 'kidsCover6', 'kidsCover7', 'kidsCover8']

const objBook = {
	Conquistadores : {
		img : "img/bookCoversFull/fullbook1.jpg",
		name : "Conquistadores",
		author : "FERNANDO CERVANTES",
		category : "European World History",
		about : "A sweeping, authoritative history of 16th-century Spain and its legendary conquistadors, whose ambitious and morally contradictory campaigns propelled a small European kingdom to become one of the formidable empires in the world",
	},
	Million : {
		img : "img/bookCoversFull/fullbook2.jpg",
		name : "The Last Million",
		author : "DAVID NASAW",
		category : "World War II Military History",
		about : "From bestselling author David Nasaw, a sweeping new history of the one million refugees left behind in Germany after WWII",
	},
	Spectacular : {
		img : "img/bookCoversFull/fullbook3.jpg",
		name : "The Spectacular",
		author : "ZOE WHITTALL",
		category : "Women's Fiction | Literary Fiction",
		about : "Three generations of women strive for real freedom in this startling, provocative novel exploring sexuality, gender, and maternal ambivalence, from the acclaimed author of The Best Kind of People.",
	},
	oneDay : {
		img : "img/bookCoversFull/fullbook4.jpg",
		name : "One Day, The End",
		author : "REBECCA KAI DOTLICH",
		category : "Children's Books",
		about : "Very short, creative stories pair with bold illustrations in this picture book that will inspire young readers to stretch their imaginations and write stories of their own.",
	},
	Downfall : {
		img : "img/bookCoversFull/fullbook5.jpg",
		name : "Hitler: Downfall",
		author : "VOLKER ULLRICH",
		category : "Historical Figure Biographies & Memoirs | European World History",
		about : "From the author of Hitler: Ascent, 1889-1939—a riveting account of the dictator’s final years, when he got the war he wanted but led his nation, the world, and himself to catastrophe.",
	},
	Hunter : {
		img : "img/bookCoversFull/fullbook6.jpg",
		name : "A Hunter-Gatherer's Guide to the 21st Century",
		author : "HEATHER HEYING and BRET WEINSTEIN",
		category : "Psychology | Science",
		about : "A provocative exploration of the tension between our evolutionary history and our modern woes—and what we can do about it.",
	},
	Water : {
		img : "img/bookCoversFull/fullbook7.jpg",
		name : "Water",
		author : "GIULIO BOCCALETTI",
		category : "Domestic Politics | Science | History",
		about : "Spanning millennia and continents, here is a stunningly revealing history of how the distribution of water has shaped human civilization. Boccaletti, of The Nature Conservancy, “tackles the most important story of our time: our relationship with water in a world of looming scarcity” (Kelly McEvers, NPR Host).",
	},
	Machine : {
		img : "img/bookCoversFull/fullbook8.jpg",
		name : "The Hype Machine",
		author : "SINAN ARAL",
		category : "Business | Politics",
		about : "A landmark insider’s tour of how social media affects our decision-making and shapes our world in ways both useful and dangerous, with critical insights into the social media trends of the 2020 election and beyond ",
	}
};
const objAudio = {
	Souls : {
		img : "img/audioFull/fullaudio1.jpg",
		name : "Four Hundred Souls",
		author : "by Ibram X. Kendi and Keisha N. Blain",
		category : "European World History",
		about : "A sweeping, authoritative history of 16th-century Spain and its legendary conquistadors, whose ambitious and morally contradictory campaigns propelled a small European kingdom to become one of the formidable empires in the world",
	},
	Dopamine : {
		img : "img/bookCoversFull/fullbook2.jpg",
		name : "Dopamine Nation",
		author : "Dr. Anna Lembke",
		category : "Psychology | Science",
		about : "From bestselling author David Nasaw, a sweeping new history of the one million refugees left behind in Germany after WWII",
	},
	Fire : {
		img : "img/bookCoversFull/fullbook3.jpg",
		name : "A Slow Fire Burning",
		author : "By Paula Hawkins",
		category : "Women's Fiction | Literary Fiction",
		about : "Three generations of women strive for real freedom in this startling, provocative novel exploring sexuality, gender, and maternal ambivalence, from the acclaimed author of The Best Kind of People.",
	},
	Hunter : {
		img : "img/bookCoversFull/fullbook6.jpg",
		name : "A Hunter-Gatherer's Guide to the 21st Century",
		author : "HEATHER HEYING and BRET WEINSTEIN",
		category : "Psychology | Science",
		about : "A provocative exploration of the tension between our evolutionary history and our modern woes—and what we can do about it.",
	},
	Downfall : {
		img : "img/bookCoversFull/fullbook5.jpg",
		name : "Hitler: Downfall",
		author : "VOLKER ULLRICH",
		category : "Historical Figure Biographies & Memoirs | European World History",
		about : "From the author of Hitler: Ascent, 1889-1939—a riveting account of the dictator’s final years, when he got the war he wanted but led his nation, the world, and himself to catastrophe.",
	},
	Hunter : {
		img : "img/bookCoversFull/fullbook6.jpg",
		name : "A Hunter-Gatherer's Guide to the 21st Century",
		author : "HEATHER HEYING and BRET WEINSTEIN",
		category : "Psychology | Science",
		about : "A provocative exploration of the tension between our evolutionary history and our modern woes—and what we can do about it.",
	},
	Water : {
		img : "img/bookCoversFull/fullbook7.jpg",
		name : "Water",
		author : "GIULIO BOCCALETTI",
		category : "Domestic Politics | Science | History",
		about : "Spanning millennia and continents, here is a stunningly revealing history of how the distribution of water has shaped human civilization. Boccaletti, of The Nature Conservancy, “tackles the most important story of our time: our relationship with water in a world of looming scarcity” (Kelly McEvers, NPR Host).",
	},
	Machine : {
		img : "img/bookCoversFull/fullbook8.jpg",
		name : "The Hype Machine",
		author : "SINAN ARAL",
		category : "Business | Politics",
		about : "A landmark insider’s tour of how social media affects our decision-making and shapes our world in ways both useful and dangerous, with critical insights into the social media trends of the 2020 election and beyond ",
	}
};
const objKids = {
	Joseph : {
		img : "img/kidsCoversFull/fullkid1.jpg",
		name : "Joseph Had a Little Overcoat",
		author : "By Simms Taback",
		category : "Children's Picture Books",
		about : "A sweeping, authoritative history of 16th-century Spain and its legendary conquistadors, whose ambitious and morally contradictory campaigns propelled a small European kingdom to become one of the formidable empires in the world",
	},
	Friends : {
		img : "img/kidsCoversFull/fullkid2.jpg",
		name : "Friends",
		author : "by Eric Carle",
		category : "Children's Picture Books",
		about : "From the creator of the all-time classic VERY HUNGRY CATERPILLAR comes a sweetly resonant story about the power of friendship--now available for little hands",
	},
	Cake : {
		img : "img/kidsCoversFull/fullkid3.jpg",
		name : "Every Cake Has a Story",
		author : "By Christina Tosi",
		category : "Children's Picture Books",
		about : "From Christina Tosi, the playful creator of the popular bakery Milk Bar, this is the story of a girl whose delicious dream comes to life, filling the world with color, creativity, and joy. Original recipe included!",
	},
	Sings : {
		img : "img/kidsCoversFull/fullkid4.jpg",
		name : "Change Sings",
		author : "REBECCA KAI DOTLICH",
		category : "Children's Picture Books",
		about : "Very short, creative stories pair with bold illustrations in this picture book that will inspire young readers to stretch their imaginations and write stories of their own.",
	},
	Cyclops : {
		img : "img/kidsCoversFull/fullkid5.jpg",
		name : "Cyclops of Central Park",
		author : "By Madelyn Rosenberg",
		category : "Children's Picture Books",
		about : "Featuring a most unusual protagonist, Cyclops of Central Park dares readers to be brave and explore the world because, really, you never know what you might find…",
	},
	Cuphead : {
		img : "img/kidsCoversFull/fullkid6.jpg",
		name : "Cuphead",
		author : "By Zack Keller",
		category : "Children's Picture Books",
		about : "Our plucky heroes return in this brand-new collection of adventures starring Cuphead, Mugman, and now Ms. Chalice!",
	},
	Flower : {
		img : "img/kidsCoversFull/fullkid7.jpg",
		name : "Time is a Flower",
		author : "By Julie Morstad",
		category : "Children's Picture Books",
		about : "A playful and poignant exploration of the nature of time through the eyes of a child from acclaimed author/illustrator Julie Morstad.",
	},
	Circles : {
		img : "img/kidsCoversFull/fullkid8.jpg",
		name : "The Circles All Around Us",
		author : "By Brad Montague",
		category : "Children's Picture Books",
		about : "The debut picture book from the creator of the viral sensation Kid President is a moving take on how we can create bigger and bigger circles of community and connections as we grow—now",
	}
};


activeBlock(mainPage)
//
//
// НАВИГАЦИЯ
//
//
mainLogo.addEventListener("click", () => {
    activeBlock(mainPage)
})

imgContact.addEventListener("click", () => {
    activeBlock(blockContact)
})

profile.addEventListener("click", ()=> {
	activeBlock(login)
})

navLi.forEach(item => {
    item.addEventListener("click", (e)=> {
        navigation(e)
    })
})

function navigation(e) {
    let point = e.target;
    if (point.textContent == "Books") {
        activeBlock(booksPage);
        bookCovers(bookFace, bookPageCovers, 'booksCover', objBook);
    }
    if (point.textContent == "Audio") {
        activeBlock(audioPage);
    }
    if (point.textContent == "Kids") {
        activeBlock(booksPage);
        bookCovers(bookFace, kidsPageCovers, 'KidsCover', objKids);
    }
	if (point.textContent == "Recommendations") {
        activeBlock(recomendationPage);
    }
}
// 
// 
// БУРГЕР-МЕНЮ
// 
// 

let burgerActive = ["l1active", "l2active", "l3active", "l1active", "l2active", "l3active"];
burger.forEach(item => {
	item.addEventListener("click", ()=> {
		if (!lines[0].classList.contains(burgerActive[0])) {
			lines.forEach((line, index) => {
				line.classList.add(burgerActive[index]);
				burgerMenu[index].classList.add("burger-active");
			})
		} else {
			lines.forEach((line, index) => {
				line.classList.remove(burgerActive[index]);
				burgerMenu[index].classList.remove("burger-active");
			})
		}
	})
})
popUpList.forEach(item => {
	item.addEventListener("click", e =>{
		if (item.textContent == "Authors & events"){
			activeBlock(authorsPage)
		}
		if (item.textContent == "Contacts"){
			activeBlock(blockContact)
		}
	})
})
// 
// 
// ПЕРЕКЛЮЧЕНИЕ ОКОН
// 
// 

function activeBlock(active) {
    pages.forEach(item => {
        item.classList.remove('active')
    }) 
    active.classList.add('active')
    if (active != mainPage) {
    	exit.style.display = "block";
    } else {
    	exit.style.display = "none"
    }
}

exit.addEventListener("click", ()=>{
	activeBlock(mainPage);
	buyPage.classList.remove('active');
})

bookArrowRight.addEventListener('click', () => {
    activeBlock(booksPage2);
})
bookArrowLeft.addEventListener('click', () => {
    activeBlock(booksPage);
})
// 
// 
// ОБЛОЖКИ КНИГ
// 
//
const buyCover = document.querySelector(".buy-cover");
const buyName = document.querySelector(".buy-name");
const buyAuth = document.querySelector(".buy-author");
const buyCat = document.querySelector(".buy-cat");
const buyDesc = document.querySelector(".buy-desc");
const gback = document.querySelector(".gBack");
function bookCovers(covers, coversArr, folder, object) {
    covers.forEach((item, index)=> {
        item.style.background = `url(img/${folder}/${coversArr[index]}.png) no-repeat center/cover`;
		item.addEventListener('click', ()=>{
			let obj = Object.keys(object);
			let tmp = obj[index];
			buyCover.style.background = `url(${object[tmp].img}) no-repeat center/cover`;
			buyName.textContent = object[tmp].name;
			buyAuth.textContent = `by ${object[tmp].author}`;
			buyCat.textContent = `cathegory: ${object[tmp].category}`;
			buyDesc.textContent = object[tmp].about;
			buyPage.classList.add('active')
		})
    })
}
gback.addEventListener("click", ()=>{
	buyPage.classList.remove('active')
})