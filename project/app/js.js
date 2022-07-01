
/* 
navgation section declearation

*/
// ul in nav bar id = navbar__list
let menulist = document.querySelector('#navbar__list');

let listOfmenu = {"home":"home","about":"about"
,"content":"content"}


let fregmantForListOfMenu = new DocumentFragment()
for(let item in listOfmenu){
    
     let lielement = document.createElement("li")
     
     let link = document.createElement('a') ;
     link.innerText = listOfmenu[item]
     //link.setAttribute("href" ,  '#section2')
     link.setAttribute("class",item);
     lielement.appendChild(link)
     
    fregmantForListOfMenu.append ( lielement) ;
    

}
menulist.appendChild(fregmantForListOfMenu); 


menulist.addEventListener('click',navgationdirction)

function navgationdirction(e){
    let allLinkes = document.querySelectorAll('a')
    for (let index = 0; index < allLinkes.length; index++) {
        const element = allLinkes[index];
        element.classList.remove('active')
        
    }
    console.log(e)
    
   let element = e.path[0]
   
     switch (element.className) {
         case listOfmenu["home"]:
             element.classList.add('active')
             document.getElementById("section1").scrollIntoView({behavior: 'smooth'});
             break;
        case listOfmenu["about"]:
            element.classList.add('active')
            document.getElementById("section2").scrollIntoView({behavior: 'smooth'});
             break;
        case listOfmenu["content"]:
            element.classList.add('active')
            document.getElementById("section3").scrollIntoView({behavior: 'smooth'});
            break;
        case listOfmenu["servicis"]:
            element.classList.add('active')
            break;
            
            case listOfmenu["sign up"]:
                element.classList.add('active')
                break;
                
                
         default:
             break;
     }
}

//---------------------------------------
