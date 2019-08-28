window.learn_sign= function() {
var date=document.getElementsByName("day")[0].value;
var this_month=document.getElementsByName("month")[0].selectedIndex;


if (this_month==1 && date>=20 || this_month==2 && date<=18) document.getElementById("result").value="Водолей";
else if (this_month==2 && date>=19 || this_month==3 && date<=20) document.getElementById("result").value="Рыбы";
else if (this_month==3 && date>=21 || this_month==4 && date<=19) document.getElementById("result").value="Овен";
else if (this_month==4 && date>=20 || this_month==5 && date<=20) document.getElementById("result").value="Телец";
else if (this_month==5 && date>=21 || this_month==6 && date<=21) document.getElementById("result").value="Близнецы";
else if (this_month==6 && date>=22 || this_month==7 && date<=22) document.getElementById("result").value="Рак";
else if (this_month==7 && date>=23 || this_month==8 && date<=22) document.getElementById("result").value="Лев";
else if (this_month==8 && date>=23 || this_month==9 && date<=22) document.getElementById("result").value="Дева";
else if (this_month==9 && date>=23 || this_month==10 && date<=22) document.getElementById("result").value="Весы";
else if (this_month==10 && date>=23 || this_month==11 && date<=21) document.getElementById("result").value="Скорпион";
else if (this_month==11 && date>=22 || this_month==12 && date<=21) mdocument.getElementById("result").value="Стрелец";
else if (this_month==12 && date>=22 || this_month==1 && date<=19) document.getElementById("result").value="Козерог";
else document.getElementById("result").value="Неверная дата!";

if ((date<1)||(this_month==2 && date>29)) document.getElementById("result").value="Неверная дата!";
if ((this_month==1||3||5||7||8||10||12) && date>31) document.getElementById("result").value="Неверная дата!";
if ((this_month==4||6||9||11) && date>30) document.getElementById("result").value="Неверная дата!";

};

