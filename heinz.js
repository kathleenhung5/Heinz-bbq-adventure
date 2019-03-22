/*--- state ---*/
var popup = {
        name:"",
        description:"",
        image:"",
        color:""
};
    
/*--- Proxy ---*/
var handler = {
    set: function(obj, props, value){
       if(props == "name"){
             changeName(value);
       }
        if (props == "description"){
            changeDes(value);
        }
        if (props == "image"){
            changeImg(value);
        }
        if (props == "color"){
            changeColor(value);
        }
    }
}

var npopup = new Proxy(popup,handler);


/*--- function changing state --*/
function updateInfo(id) {
    document.getElementById("products").style.display = "flex";
    
    var nname = "",
        ndes = "",
        nimg = "",
        ncolor="";
    
    if(id == "light"){
        nname = "Carolina Mustard Style Bbq Sauce";
        ndes = "From Columbia to Charleston, South Carolina’s “mustard belt” is where tangy mustard-based barbecue sauce reigns supreme. That’s why Heinz teamed up with South Carolina native Bryan Furman, owner and head pitmaster of the award-winning B’s Cracklin BBQ. From slow-cooked pulled pork to ribs on the grill, this golden sauce delivers the right balance of sweetness and spice that will redefine swine.";
        nimg = "svg/carolina-mustard.svg";
        ncolor = "#5580db";
    }
    
    if(id == "mount"){
        nname = "Carolina Vinegar Style Bbq Sauce";
        ndes = "Real Carolina barbecue is all about the deep-rooted traditions of whole-hog barbecue slow cooked over wood coals. We've teamed up with Sam Jones, of the legendary Skylight Inn BBQ in Ayden, North Carolina to craft a true Carolina style sauce that blends the distinctive tang of apple cider vinegar with just the right bit of sweet and spice to make it the perfect addition to your favorite pulled pork.";
        nimg = "svg/carolina-vinegar.svg";
        ncolor = "#0a8256";
    }
    
    if(id == "jukebox"){
        nname = "Memphis Style Bbq Sauce";
        ndes = "From the birthplace of Rock 'n Roll, the tradition of Memphis barbecue is rich and sweet with a pop of spice. To create a truly great Memphis style barbecue sauce, Heinz teamed up with Dan Brown of Memphis' own Leonard's Pit Barbecue(em)a barbecue institution since 1922. With sweet brown sugar and the flavors of the region's traditional dry rubs, this is a sweet and spicy sauce that's sure to be a favorite.";
        nimg = "svg/memphis.svg";
        ncolor = "#af0687";
    }
    
    if(id == "baseball"){
        nname = "Kansas City Style Bbq Sauce";
        ndes = "Rooted in generations of barbecue tradition, great Kansas City style barbecue sauce is a perfect balance of thick, sweet, and tangy. Heinz teamed up with Kansas City natives and award-winning pitmasters, Joe & Mike Pearce, to craft a Kansas City Style Sauce that is a mouthwatering blend of that sweet and smoky deliciousness that the region is known for.";
        nimg = "svg/kansas.svg";
        ncolor = "4889d1";
    }
    
    if(id == "sign"){
        nname = "Classic Original Bbq Sauce";
        ndes = "The traditions of barbecue in America run deep(em)and a great sauce can make all the difference. That's why the Heinz Barbecue team has traveled the country and done our homework with some of the nation's top pitmasters to bring you a sauce that captures the real flavor of American barbecue. This sauce is a true classic(em)sweet, thick, deliciously balanced, 100% natural, and sure to please!";
        nimg = "svg/bbq.svg";
        ncolor = "#631c19";
    }
    
    if(id == "hat"){
        nname = "Texas Style Bbq Sauce";
        ndes = "In Texas, there's nothing shy about barbecue, and a great Texas style sauce means bold flavors and big personality. That's why Heinz teamed up with Robert Sierra, pitmaster of the Texas State Grand Champion S&S Pit Crew competition barbecue team from San Marcos, Texas. This sauce captures the very best of Texas barbecue(em)combining spices like cumin and chili powder for a sauce that's bold and flavorful with just the right kick.";
        nimg = "svg/taxes.svg";
        ncolor = "#c72c21";
    }
    
    if(id == "bourbon"){
        nname = "Kentucky Bourbon Style Bbq Sauce";
        ndes = "Kentucky is home to great bluegrass, great bourbon and great barbecue. Heinz teamed up with fifth-generation pitmaster John Foreman of Old Hickory BBQ in Owensboro, KY to create a rich and savory sauce that reflects the deep heritage of Kentucky BBQ. Real bourbon, a hint of smoke, and the spices and seasonings of the region’s traditional “dip” come together here for a true taste of Kentucky.";
        nimg = "svg/kentucky.svg";
        ncolor = "#7f291b";
    }
    
    if(id == "hotdog"){
        nname = "Tomato Ketchup and Yellow Mustard";
        ndes = "Our classic ketchup is made only from sweet, juicy, red ripe tomatoes for the signature thick and rich taste of America’s Favorite Ketchup. Our yellow mustard is made with 100% natural ingredients, including stone-ground #1 grade mustard seeds and a secret blend of spices and vinegar, for the perfect balance of flavor and tang.";
        nimg = "svg/KetchupMustard.svg";
        ncolor = "#B32318";
    }
    
    if(id == "flower"){
        nname = "Hawaii Style Bbq Sauce";
        ndes = "More than beautiful beaches and the “aloha spirit,” Hawaii is home to a rich food heritage that brings sweet tropical fruit and the smoked flavor of Khalua Pig together in one delicious luau feast. Heinz teamed up with Honolulu native and renowned chef Mark “Gooch” Noguchi to craft a sauce that delivers a mouthwatering balance of fruity pineapple and mango, savory Asian soy, and subtle smoke that is distinctly Hawaiian.";
        nimg = "svg/hawaii.svg";
        ncolor = "#b50e57";
    }
    
    npopup.name = nname;
    npopup.description = ndes;
    npopup.image = nimg;
    npopup.color = ncolor;
}



/*--- function changing UI ---*/
var room = document.getElementById("room"); 

function enterGame (){
    document.getElementById("welcome").style.display = "none";
    room.style.display = "block";
    room.style.filter = "blur(0px)";
}

function closePopUp (){
    document.getElementById("products").style.display = "none";
}


// Effects for objects in the room 
function upAndDown(t){
    t.style.animation = "upAndDown 1s infinite";
}

function growAndShrink(t){
    t.style.animation = "growAndShrink 1s infinite";
}

function rotate(t){
    t.style.animation = "rotate 1s infinite";
}

function stopAnima (t){
    t.style.animation = "none";
}

function imageSwap (it,id){
    if (id == "light"){
        it.src = "svg/lighthouse1.svg";
    }
    if (id == "sign"){
        it.src = "svg/sign1.svg";
    }
}

function imageBack (it,id){
    if (id == "light"){
        it.src = "svg/lighthouse.svg";
    }
    if (id == "sign"){
        it.src = "svg/sign.svg";
    }
}

function playMusic (){
        document.getElementById("audio").play();
}

function stopMusic (){
        document.getElementById("audio").pause();
}



//Product popup 
function changeName(name){
    document.querySelector("#products h2").innerHTML = name;
}

function changeDes(des){
    document.querySelector("#products p").innerHTML = des;
}

function changeImg(image){
    document.querySelector("#products img").src = image;
}

function changeColor(color){
    document.querySelector("#products h2").style.color = color;
}
