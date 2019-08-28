var month = [
	"",
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",	
];
var Inner = class Input
{

	select_input(name,caption,array)
		{
			var innerText=caption+"<select name='"+name+"'>";
			array.forEach(function(item,i) {
			  innerText+="<option value='"+i+"'>"+item+"</option>";
			});
			innerText+="</select><br>";
			return innerText;
		}	
	text_input(id,name,caption,size)
		{
		var innerText=caption+"<input type='text' id='"+id+"' name='"+name+"' size='"+size+"'><br>";
		return innerText;
		}
	button_input(id,caption)
		{
		var innerText="<input id='"+id+"' type='button' value='"+caption+"'  ><br>";

		return innerText;
		}


};




function assert() {
let inner=new Inner;
let div = document.createElement('div');
let res="<form>";
div.className = "assert";
res+=inner.select_input("month","Месяц:",month);
res+=inner.text_input("text1","day","День:",2);
res+=inner.button_input("id","Узнать");
res+=inner.text_input("result","znak","Ваш знак Зодиака - ",15);
res+="</form>";
div.innerHTML = res;
document.body.append(div);
document.querySelector('#id').addEventListener('click', learn_sign);
console.log(res);
}
export default assert;
