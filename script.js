var a=new Array();
for(var i=0;i<=9;i++){a[i]=0;}
function chmod(y,z)
{
if(a[z]==0 || a[z]==NaN)
{a[z]=y;}else{a[z]=0;}
var one=two=three=0;var x=0;
for(x=1;x<=3;x++){one+=a[x];}
for(x=4;x<=6;x++){two+=a[x];}
for(var x=7;x<=9;x++){three+=a[x];}
document.getElementById("numcode").value=one+""+two+""+three;
document.getElementById("charcode").value="-"+mod(one)+mod(two)+mod(three);
function mod(p)
{
if(p==0){n="---";}
if(p==1){n="--x";}
if(p==2){n="-w-";}
if(p==3){n="-wx";}
if(p==4){n="r--";}
if(p==5){n="r-x";}
if(p==6){n="rx-";}
if(p==7){n="rwx";}
return n;
};
};
