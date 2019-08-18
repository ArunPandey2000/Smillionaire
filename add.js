
function AddQuote()
{
	var name = document.getElementById("name").value;
	var quote = document.getElementById("quote").value;
	var d = new Date();
	var ele = document.getElementsByName('gender'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                {
                	if(ele[i].value=="Male")
                	{
 var mydiv = document.getElementById("mydiv");
var div = document.createElement('div');
div.setAttribute('class', 'media border p-3');
var image=document.createElement('img');
image.setAttribute('src', 'Male.png');
image.setAttribute('class', 'mr-3 mt-3 rounded-circle');
image.setAttribute('style', 'width:60px;');
div.appendChild(image);
var div2 = document.createElement('div');
div2.setAttribute('class', 'media-body');
var h4 = document.createElement('h4');
h4.innerHTML= name+" <small><i>"+d+"</i></small>"
var p= document.createElement('p');
p.innerHTML=quote;
div2.appendChild(h4);
div2.appendChild(p);
div.appendChild(div2);
mydiv.appendChild(div);
                	}
                	else
                	{
                		var mydiv = document.getElementById("mydiv");
var div = document.createElement('div');
div.setAttribute('class', 'media border p-3');
var image=document.createElement('img');
image.setAttribute('src', 'Female.png');
image.setAttribute('class', 'mr-3 mt-3 rounded-circle');
image.setAttribute('style', 'width:60px;');
div.appendChild(image);
var div2 = document.createElement('div');
div2.setAttribute('class', 'media-body');
var h4 = document.createElement('h4');
h4.innerHTML= name+" <small><i>"+d+"</i></small>"
var p= document.createElement('p');
p.innerHTML=quote;
div2.appendChild(h4);
div2.appendChild(p);
div.appendChild(div2);
mydiv.appendChild(div);

                	}
                } 
            } 
}