bootstrap.jquery.scrollfade.js
-
Bootstrap Plugin for Jquery Scrollfade  
<b>Author:</b> @Brandon L. Clark  <support@themindspot.com>

#Requires

* Jquery 2.1.1     : http://code.jquery.com/jquery-2.1.1.js
* Bootstrap 3.2.0  : https://github.com/twbs/bootstrap/tree/v3.2.0
* Scrollfade 0.1.4 : https://github.com/gdbate/jquery-scrollfade/tree/0.1.4
* Jquery Viewport  : https://github.com/tuupola/jquery_viewport

#Example
You can find an example file in this repository.  Feel free to use and modify the code.

* JSFiddle Example: http://jsfiddle.net/02728t8v/5/

#How to use bootstrap.jquery.scrollfade
<b>CSS</b> 

Two elements need to be given positioning and size settings.  The `body` needs to be fixed to all borders or Scrollfade will not work.  `#content-scroll` needs to be relative so the content area can be correctly sized to navbar.
```
body {
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  padding-bottom:50px;
  height:100%;
}
#content-scroll {
  overflow:auto;
  position:relative;
  margin-top:50px;
  height:100%;
}
```
<b>HTML</b>

The basic html structure is simliar to that needed to create a Bootstrap navbar component.(Note: Bootstrap classes have been left out) 
```
<body id="content-area">
  <nav>
    ...
  </nav>
  <div id="content-scroll">
    ... (Sections are given trigger class to notify nav, example uses .sh)
  </div>
</body>
```
<b>JavaScript</b>

To init add `.scrollfadeBoot()` with your navigation sections target component. 
```
$(function(){
  $('#content-scroll').scrollfade().scrollfadeBootstrap('.sh');
});
```
