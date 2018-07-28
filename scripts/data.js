



var category = ["Writer", "Musicians", "Dancers", "Crafts", "Photography", "Videography"];
var data=[
   {
      name:"Ayush",
      type:category[0],
      experience:5

   },
   {
      name:"jayesh",
      type:category[1],
      experience:3

   },
   {
      name:"Karan",
      type:category[3],
      experience:5

   },
   {
      name:"Nair",
      type:category[4],
      experience:5

   },
   {
      name:"Arpan",
      type:category[1],
      experience:5

   },
   {
      name:"Anshul",
      type:category[3],
      experience:2

   },
   {
      name:"Dilip",
      type:category[4],
      experience:4

   },
   {
      name:"Meghna",
      type:category[4],
      experience:7

   },
   {
      name:"Rakesh",
      type:category[0],
      experience:5

   },
   {
      name:"Jagat",
      type:category[2],
      experience:5

   }];


function list(i){
   for(var index in data){
      if(data[index].type === scategory[i]){
         alert(data[index].name);
         /*var node1 = document.createElement("h4");
         var text1 = document.createTextNode(data[index].name]);
         node1.appendChild(text1);
         /*var node2 = document.createElement("h2");
         var text2 = document.createTextNode(data[index].experience);
         node1.appendChild(text1);
          var final = document.getElementById("heroes");
          final.appendChild(node1);
          //final.appendChild(node2);*/


}
}
}
