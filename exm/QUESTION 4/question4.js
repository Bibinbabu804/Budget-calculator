

class menu{

    constructor(name,cuisine,type,available){


this.name=name,
this.cuisine=cuisine,
this.type=type,
this.available=available

}

 displayfood(name){
    console.log(this.name);

    
}

addfood(newname){

this.name=newname
console.log('THE NEWELY ADDED FOOD IS '+  newname);

}



isavailble(){

if(this.available===true){
    console.log('The food available');
}



}

  
deletemenu(){
   this.name=' '
   this.cuisine=' '
   this.type=" "

   console.log('MENU DELEATED');
}





}

newmenu= new menu('biriyani','south asia','non-veg',true)
newmenu.displayfood()
newmenu.addfood('SANDWITCH')
newmenu.isavailble()
newmenu.deletemenu()




