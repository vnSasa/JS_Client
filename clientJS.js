function addText(){
	var array = ['<a href="http://google.com">http://google.com</a>','<a href="/tutorial">/tutorial.html</a>','<a href="local/path">local/path</a>','<a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a>','<a href="http://nodejs.org">http://nodejs.org</a>','<a href="http://internal.com/test">http://internal.com/test</a>'];
	var element = document.querySelectorAll('li');
	for (var i = 0; i < element.length; i++) {
		let ell = element[i];
		ell.innerHTML = array[i];
	}
};

function howMuchLi(){
	var number = document.getElementsByTagName('li');
		alert(number.length);
};

function addStyle() {
	var search = document.getElementsByTagName("a");
	for (var i = 0; i < search.length; i++) {

		let text = search[i].href;
		
		let resultHTTP = text.match("http");
		let resultFTP = text.match("ftp");
		let resultINTERNAL = text.match("http://internal.com");
		
		if(resultINTERNAL != "http://internal.com" && resultHTTP == 'http' || resultFTP == 'ftp') {
			search[i].classList.add("external-red");
		}
	}
};
