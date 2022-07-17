
let url = document.URL
let navitems = document.getElementById('navbar').children[0].children

for (let i = 0; i < navitems.length; i++) { navitems[i].classList.remove('navlink-active') }

if (url.includes('projects')) { navitems[1].classList.add('navlink-active') }
else if (url.includes('experience')) { navitems[2].classList.add('navlink-active') }
else if (url.includes('blog')) { navitems[3].classList.add('navlink-active') }
else if (url.includes('resume')) { navitems[4].classList.add('navlink-active') }
else if (url.includes('contact')) { navitems[5].classList.add('navlink-active') }
else { navitems[0].classList.add('navlink-active') }