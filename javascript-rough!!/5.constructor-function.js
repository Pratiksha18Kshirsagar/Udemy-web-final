
//constructor function!!
function BellBoy( name, experience , age , place, languages){
    this.name = name;
    this.experience = experience;
    this.age = age;
    this.place = place;
    this.languages = languages;
    this.clean = function(){
        console.log("Cleaning is in progress!!")
    }
}
var BellBoy1 = new BellBoy("Jain" , "9" , "30" , "Kasouli" , "[English,hindi,Kasoulii]");
console.log(BellBoy1);
console.log(BellBoy1.name);
BellBoy1.clean();

