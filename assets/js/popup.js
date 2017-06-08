document.addEventListener('readystatechange', onStateChange);

function onStateChange( evt ) {
  if( evt.target.readyState === "complete" || evt.target.readyState === "interactive" ) {
    //slack uses a webhook to fire when the page is ready.  Unfortunately we cannot access the webhook without modifying it (dangerous :().  We just ping the page until we get the aria attribute in the textbox - ql-editor.
    var checkIfPageIsReady = setInterval( function(){
      if( document.querySelectorAll(".ql-editor")[0] && document.querySelectorAll(".ql-editor")[0].getAttribute( 'aria-label' ) ) {
        clearInterval( checkIfPageIsReady );
        initAccessibility();
      }
    }, 500 );
  }
}

function initAccessibility() {
  var inputTextElem = document.querySelectorAll(".ql-editor");
  var i;
  for( i = 0; i < inputTextElem.length; i++ ) {
    //update the aria label to explain to screen readers that they can tab
    var ariaLabel = inputTextElem[i].getAttribute( 'aria-label' );
    ariaLabel += ". Press tab to navigate to the list";
    inputTextElem[i].setAttribute( 'aria-label', ariaLabel );

    inputTextElem[i].addEventListener("keydown", onKeyPress);
  }

  document.querySelectorAll(".ql-editor")[0].addEventListener( "blur", function( evt ) {
    evt.stopImmediatePropagation();
    console.log( "tabbed out" );
  })
}

function onKeyPress( evt ) {
  console.log( evt.keyCode );
  if( evt.keyCode === 9 ) {
    //9 === tab
    var bannerElem = document.getElementById( 'notifications_banner' );
    console.log( bannerElem );
    evt.target.blur();
    if( bannerElem.style.display === "block" ) {

      bannerElem.tabIndex = -1;
      bannerElem.focus();
    }
  }
}
