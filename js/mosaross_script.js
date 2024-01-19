function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

// 작동하는지 체크
function hi(){
    alert("hi2");
}

//어바웃어스 레이어 띄우기 시작//
function showAboutUs(id){

    let $button         = $('.button'),
    $modalContainer = $('#modal-container'),
    $body           = $('body'),
    $content        = $('.content'),
    btnId = id;

    console.log("click!!!!");
    console.log("btnId", btnId);
    
    $modalContainer
        .removeAttr('class')
        .addClass(btnId);
    $content
        .removeAttr('class')
        .addClass('content');
    
    $body.addClass('modal-active');
    
    if (btnId == 'two' || btnId == 'three'|| btnId == 'four') {
        console.log("btnId2", btnId);
        $content.addClass(btnId);
    }
}

function closeAboutUs(id){

    let $button         = $('.button'),
    $modalContainer = $('#modal-container'),
    $body           = $('body'),
    $content        = $('.content'),
    btnId = id;
    

    $modalContainer.addClass('out');
    $body.removeClass('modal-active');
    console.log("out11111");
    if ($modalContainer.hasClass(btnId)) {
        console.log("out");
        $content.addClass('out');
        
    }
}
//어바웃어스 레이어 띄우기 끝//


