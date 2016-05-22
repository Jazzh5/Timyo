window.onload=function(){
	var lunbo=document.getElementById('lunbo');
	var pic=lunbo.getElementsByTagName('li');
	var pagination=document.getElementById('pagination');
	var spans=pagination.getElementsByTagName('li');
	var shwotext=document.getElementById('show-text');
	var text=shwotext.getElementsByTagName('div');
	var num=0;
	var timer=null;

	for (var i = 0; i < spans.length; i++) {
		spans[i].index=i;
		spans[i].onclick=function(){
			for (var i = 0; i < spans.length; i++) {
				spans[i].className=""
				pic[i].className="";
			}
			clearInterval(timer)
			num=this.index;
			this.className="span";
			pic[this.index].className="show"
			fn();
		}
	}
	function Go(){
		
		if (num==pic.length) {
			num=0;
		}
		for (var i = 0; i < pic.length; i++) {
			pic[i].className="";
			spans[i].className=""
		}
		pic[num].className="show";
		spans[num].className="span"
	}
	
	function fn(){
		timer=setInterval(function(){
		num++;
		Go()
	},3000)
	}
	fn();
	var num1=0;

	setInterval(function(){
		num1++;
		if (num1==text.length) {
			num1=0;
		}
		for (var i = 0; i < text.length; i++) {
			text[i].className=""
		}
		text[num1].className="hid";
	},3000)


		// num++;
		// if (num==text.length) {
		// 	num=0;
		// }
		// for (var i = 0; i < text.length; i++) {
		// 	text[i].style.display="none";
		// }
		// text[num].style.display="block"
		
	var country=document.getElementById('country');
	var oli=country.getElementsByTagName('li');//点击li
	var lispan=country.getElementsByTagName('span');//li内的文字
	var liimg=country.getElementsByTagName('i');//li内的国旗
	var nationl=document.getElementById('nationl');//input内的国旗span标签
	var Tinput=document.getElementById('Tinput');//input的placeholder
	var arr=[1111,22222,33333,444444,555555,66666]
	var arr2=['0 0','-22px 0','-44px 0','-66px 0','-88px 0','-110px 0']
	for (var i = 0; i < oli.length; i++) {
		oli[i].index=i;
		liimg[i].style.backgroundPosition=arr2[i];
		oli[i].onclick=function(){
			Tinput.placeholder=arr[this.index];
			nationl.style.backgroundPosition=liimg[this.index].style.backgroundPosition
		}
	}




}