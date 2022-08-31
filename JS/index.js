const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 200) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});



function checkmob(){
  var str=document.getElementById("mblenmb").value;
var ptr=/^07[072568341][0-9]{7}$/;

var chck=ptr.test(str);

if(!chck)
alert("Moblie Number is Incorrect");
}




function createBill(){
  var index=0;
  var items = ["null", "null", "null","null"];
  var quantities = ["null", "null", "null","null"];
  var prices = ["null", "null", "null","null"];
              
              
              
  var e1 = document.getElementById("item1");
  var itemselected1 = e1.options[e1.selectedIndex].value;
  if(itemselected1!="1"){
  items[index]=itemselected1;
  quantities[index] = document.getElementById("q1").value;
  prices[index] = document.getElementById("p1").value;
  index++;
  }
        
  
  var e2 = document.getElementById("item2");
  var itemselected2 = e2.options[e2.selectedIndex].value;
  if(itemselected2!="1"){
  items[index]=itemselected2;
  quantities[index] = document.getElementById("q2").value;
  prices[index] = document.getElementById("p2").value;
  index++;
  }
  
  var e3 = document.getElementById("item3");
  var itemselected3 = e3.options[e3.selectedIndex].value;
  if(itemselected3!="1"){
  items[index]=itemselected3;
  quantities[index] = document.getElementById("q3").value;
  prices[index] = document.getElementById("p3").value;
  index++;
  }
  
  var e4 = document.getElementById("item4");
  itemselected4 = e4.options[e4.selectedIndex].value;
  if(itemselected4!="1"){
  items[index]=itemselected4;
  quantities[index] = document.getElementById("q4").value;
  prices[index] = document.getElementById("p4").value;
  index++;
  }
  
  var fTot=0;
  strt(1);
  for(var i=0;i<index;i++){
  document.write("<tr>");
  createtbl(items[i]);
  createtbl(quantities[i]);
  createtbl(prices[i]);
  var tot=parseInt(quantities[i])*parseInt(prices[i]);
  document.write("<td>"+tot+"</td>");
  fTot+=tot;
  document.write("</tr>");
  }
  document.write("<tr><td colspan=\"3\"><strong>TOTAL</strong></td><td>"+fTot+"</td><tr>");
  strt(2);	
  }
  function createtbl(x){		
  document.write("<td>"+x+"</td>");
  }
  
  function strt(n){
  if(n==1){
  document.writeln("<h1 style=\"text-align:center;\">The Bill</h1>");
  document.writeln("<table width=\"90%\" border=\"1\">");
  document.writeln("<tr><th>ITEMS</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>");
  }
    else
    document.write("</table>");
  }
  
  function createTot(x,y){
  var tot=parseInt(x)*parseInt(y);
  document.write("<td>"+tot+"</td>");
  }


  function getSource(id){
    $.ajax({
      url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=4d6b245a411c4caca67ff69f5eee4358",
      success: function (res) {
        document.getElementById('sourceLink').innerHTML = res.sourceUrl;
        document.getElementById('sourceLink').href = res.sourceUrl;
      }
    });
  }

  function getRecipe(q) {
    $.ajax({
      url: "https://api.spoonacular.com/recipes/search?apiKey=4d6b245a411c4caca67ff69f5eee4358&number=1&query="+q,
      success: function(res) {
        document.getElementById('output').innerHTML = "<h1>"+res.results[0].title+"</h1><br /><img src='"+res.baseUri+res.results[0].image+"' width='400' /><br /> ready in " + res.results[0].readyInMinutes+" minutes"
        getSource(res.results[0].id)
      }
    });
  }