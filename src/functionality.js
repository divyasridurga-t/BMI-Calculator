
function BtnClick()
{
 document.getElementById("mname").innerHTML=document.getElementById("name").value;
 document.getElementById("mage").innerHTML=document.getElementById("age").value;  
 document.getElementById("mweight").innerHTML=document.getElementById("weight").value;
 document.getElementById("mheight").innerHTML=document.getElementById("height").value;
 var female=document.getElementById("female");
 var male=document.getElementById("male");
 var selected;
 if(female.checked)
 {
     selected=female.value; 
 }
 if(male.checked)
 {
     selected=male.value;
 }
 var weight=document.getElementById("weight").value;
 var height=document.getElementById("height").value;
 var WEIGHT=parseInt(weight);
 var HEIGHT= parseInt(height);
 var convert=HEIGHT*0.01;
 var Calculate= WEIGHT/convert**2;
 document.getElementById("bmi").innerHTML=`Your BMI is <b>${Calculate}</b>`
 document.getElementById("mgender").innerHTML=selected;
 if(Calculate>10 && Calculate<=18)
 {
   document.getElementById("bmi").style.color="orange";
   var text =document.getElementById("text").innerHTML="<b>You are Underweight,it might leads to great risk of nutritional deficiency</b>".fontcolor('orange');
   var emoji=document.getElementById("emoji").className="bi bi-emoji-frown-fill";  
 }
if(Calculate>18 && Calculate<=25)
 {
   document.getElementById("bmi").style.color="green";
   var text =document.getElementById("text").innerHTML="<b>Congratulations your weight is normal</b>".fontcolor('green');
   var emoji=document.getElementById("emoji").className="bi bi-emoji-smile-fill";  
 
 }
 if(Calculate>25&&Calculate<=40)
 {
   document.getElementById("bmi").style.color="red";
   var text =document.getElementById("text").innerHTML="<b>You are Overweight, it might lead to Obesity</b>".fontcolor('red');
   var emoji=document.getElementById("emoji").className="bi bi-emoji-expressionless-fill";  
 }
 
}
