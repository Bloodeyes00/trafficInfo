import * as genresAPI from "./CarServices";

const movies =[
 {
     _id: "5b21ca3eeb7f6fbccd571815",
     jobeTitle :" taxii",
    company: "sohrab",
   genre:{ name:"Action"},
    day: "day",
    helt: "abc",
    contact: "0999999999",
    salary: "40000",

 },
 {
    _id: "5b21ca3eeb7f6fbccd571815",
    jobeTitle :" taxii",
   company: "sohrab",
  genre:{ name:"Action"},
   day: "day",
   helt: "abc",
   contact: "0999999999",
   salary: "40000",

},
//  

];

export function getMovie(){
    return movies;
}
