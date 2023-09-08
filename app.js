function color(){
			var body = document.getElementById("body");
			var input= document.getElementById("nrmlcolor");
			var info = document.getElementById("info");
			var codex= document.querySelector(".codex")
			body.style.backgroundColor=input.value;
			if(input.value){
			codex.style.display="block"
			info.value = `background-color : ${input.value} ;`
		}
		}

		function copy(){
			var info = document.querySelector(".info");
			info.select();
			window.navigator.clipboard.writeText(info.value);
		}

		function gradient(){
			var body = document.getElementById("body");
			var input1= document.getElementById("gradientcolor1");
			var input2= document.getElementById("gradientcolor2");
			var info = document.querySelector(".info1");
			var codex= document.querySelector(".codex1");

			if(input1.value || input2.value){
			body.style = `background-image :linear-gradient(to right , ${input1.value} ,${input2.value});`;
			codex.style.display="block";
			info.value= `background-image :linear-gradient(to right , ${input1.value} ,${input2.value});`

		}


}