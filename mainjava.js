function f1()
{
var x=parseFloat(document.getElementById("n1").value);
var y=parseFloat(document.getElementById("n2").value);
var z=(x+y);
document.getElementById("n3").value=z;


}
function f2()
{
var x=parseFloat(document.getElementById("n1").value);
var y=parseFloat(document.getElementById("n2").value);
var z=(x-y);
document.getElementById("n3").value=z;

}
function f3()
{
var x=parseFloat(document.getElementById("n1").value);
var y=parseFloat(document.getElementById("n2").value);
var z=(x*y);
document.getElementById("n3").value=z;

}
function f4()
{
var x=parseFloat(document.getElementById("n1").value);
var y=parseFloat(document.getElementById("n2").value);
var z=(x/y);
document.getElementById("n3").value=z;

}
function f5()
{
var x=parseFloat(document.getElementById("n1").value);
var y=parseFloat(document.getElementById("n2").value);
var z=(x%y);
document.getElementById("n3").value=z;

}
function f6()
{
var x=parseFloat(document.getElementById("n1").value);
var y=parseFloat(document.getElementById("n2").value);
var z=Math.pow(x,y);
document.getElementById("n3").value=z;

}
function f7()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.sqrt(x));
    document.getElementById("n5").value=z;

}
function f8()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.sin(x *Math.PI / 180));
    document.getElementById("n5").value=z;
}
function f9()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.cos(x *Math.PI / 180));
    document.getElementById("n5").value=z;
}
function f11()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.sin(x *Math.PI / 180)/Math.cos(x *Math.PI / 180));
    document.getElementById("n5").value=z;
}
function f12()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.abs(x));
    document.getElementById("n5").value=z;
}

function f13()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.ceil(x));
    document.getElementById("n5").value=z;
}
function f14()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.log(x));
    document.getElementById("n5").value=z;
}
function f15()
{
    var x=parseFloat(document.getElementById("n4").value);
    
    var z=parseFloat(Math.log10(x));
    document.getElementById("n5").value=z;
}

function f16()
{
    var x=document.getElementById("n6").value;
    var dec = parseInt(x, 2).toString(10);
    var oct = parseInt(x, 2).toString(8);
    var hex = parseInt(x, 2).toString(16);
    
    document.getElementById("n7").value=dec;
    document.getElementById("n8").value=oct;
    document.getElementById("n9").value=hex;

    

}



function f17()
{
    var x=document.getElementById("n10").value;
    var dec = parseInt(x, 8).toString(10);
    var bin = parseInt(x, 8).toString(2);
    var hex = parseInt(x, 8).toString(16);
    
    document.getElementById("n11").value=dec;
    document.getElementById("n12").value=bin;
    document.getElementById("n13").value=hex;

    

}
function f19()
{
    var x=document.getElementById("n10").value;
    var bin = parseInt(x, 10).toString(2);
    var dec = parseInt(x, 10).toString(8);
    var hex = parseInt(x, 10).toString(16);
    
    document.getElementById("n11").value=bin;
    document.getElementById("n12").value=dec;
    document.getElementById("n13").value=hex;

    

}
function f18()
{
    var x=document.getElementById("n14").value;
    var dec = parseInt(x, 16).toString(10);
    var bin = parseInt(x, 16).toString(2);
    var oct = parseInt(x, 16).toString(8);
    
    document.getElementById("n15").value=dec;
    document.getElementById("n16").value=bin;
    document.getElementById("n17").value=oct;

    

}

function f20()
{
var x=document.getElementById("m1").value;
var Dollar=x*1.41;
var SR=x*5.29;
var AED=x*5.18;
var Pound=x*22.15;
var Bahrain=x*0.53;
var Kuwait=x*0.43;
var Euro=x*1.15;
var Yapan=x*145.55;
var Brazilian=x*7.44;
var indian=x*103.13;
var Russian=x*103.90;
var Vetnam=x*32570.93;



document.getElementById("m2").value=Dollar;
document.getElementById("m3").value=SR;
document.getElementById("m4").value=AED;
document.getElementById("m5").value=Pound;
document.getElementById("m6").value=Bahrain;
document.getElementById("m7").value=Kuwait;
document.getElementById("m8").value=Euro;
document.getElementById("m9").value=Yapan;
document.getElementById("m10").value=Brazilian;
document.getElementById("m11").value=indian;
document.getElementById("m12").value=Russian;
document.getElementById("m13").value=Vetnam;
}


function CalAge()
{

var dateinp=document.getElementById("date").value;
var mdate=dateinp.toString();
var year=parseInt(mdate.substring(0,4),10);
var month=parseInt(mdate.substring(5,7),10);
var day=parseInt(mdate.substring(8,10),10);

var today = new Date();  
//date string after broking  
var birthday = new Date(year, month-1, day);  
  
//calculate the difference of dates  
var diffInMillisecond = today.valueOf() - birthday.valueOf();  

//convert the difference in milliseconds and store in day and year variable          
var year_age = Math.floor(diffInMillisecond / 31536000000);
var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

var month_age=Math.floor(day_age/30);
var day_age=day_age%30;
var tMnt= (month_age + (year_age*12));
var tDays =(tMnt*30) + day_age;


    document.getElementById("years").value=year_age + " Years ";
    document.getElementById("months").value=month_age + " Months ";
    document.getElementById("days").value=day_age + " Days ";

}





window.onload = function() {
    clock(); 
function clock() {
    var now=new Date();
    now.getHours();

    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    
    //fullyear 2021
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }

    if (hour > 12) {
      hour = hour - 12;
    } 
    if(hour<10)
    {


        hour="0"+hour;
    }
    if(sec<10)
    {
        sec="0"+sec;
    }   
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     
  document.getElementById('currentTime').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
 
    setTimeout(clock, 1000);
    
    }
        clock(); 
function clock() {
    var now=new Date();
    now.getHours();

    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var date=now.toLocaleDateString();
    //fullyear 2021
    var mid = 'PM';
    if (min < 10) {
      min = "0" + min;
    }

    if (hour > 12) {
      hour = hour - 12;
    } 
    if(hour<10)
    {


        hour="0"+hour;
    }
    if(sec<10)
    {
        sec="0"+sec;
    }   
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'AM';
    }     
  document.getElementById('currentTime').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
  document.getElementById('timejordan').innerHTML =    date  ;
 
    setTimeout(clock, 1000);
    
    }
}


