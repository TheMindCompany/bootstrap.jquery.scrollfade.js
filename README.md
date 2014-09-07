bootstrap.jquery.scrollfade.js
-
Bootstrap Plugin for Jquery Scrollfade  
<b>Author:</b> @Brandon L. Clark  <support@themindspot.com>

#Description 
This is a plugin for those who wish to use the `navbar` component of Bootstrap because they are using the Scrollfade plugin for jquery.  It acts like `scrollspy.js` but because of the way Scrollfade embeds data to perform its visual effect scrollspy will not work.  It also adds a smooth scroll effect for same page navigation.
   
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

The basic html structure is simliar to that needed to create a Bootstrap navbar component.  The content needs to be nested in a element after the navigation.  (Note: Bootstrap classes have been left out) 
```
<body>
  <nav>
    ...
  </nav>
  <div id="content-scroll">
    ... (Sections are given trigger class to notify nav, example uses .sh)
  </div>
</body>
```
<b>JavaScript</b>

You need to target the element that has your nested content (eg: `$('#content-area').scrollfade()` ). To init bootstrap.jquery.scrollfade.js add `.scrollfadeBootstrap()` with your navigation sections target component after `scrollfade()`. 
```
$(function(){
  $('#content-scroll').scrollfade().scrollfadeBootstrap('.sh');
});
```
