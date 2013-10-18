responsivem
===========
Scale smoothly with screen size, keeping proportions! Tired of choosing 960px width or some other arbitrary website size? want to see you nice web app scale smoothly with the window resize?  Just drop responsivem.js into your project and include it after jquery.

What it does
===========
Even CSS3 is weak on rescaling while maintaining proportions.  This script will set up an "on window resize" event which will scale the meaning of "em" on your page.  By default, it's set to 100em by 100em.  So if you add an element to your html body, say a div, and set it to 100em width and 100em height, then it will automatically scale to be the full size of the screen, while maintaining it's proportion.

Now if your app is 16:9 scale, you can modify the proportions.  You might want to use 1600em by 900em as your "full size", by just adding one line of code:
```js
    responsivem(1600,900);
```

Congratulations, you now have "virtual pixels"!  

Now if you size your main div to 1600em by 900em, then your main div will stretch to fill the browser window, while keeping the 16:9 proportion.  If you want a div inside of that that takes up 1/4 of the area in the upper left of your 16:9 main div, just add it in and make it's size 800em by 450em.  For fonts, it's the same.  A font sized 160em would be 10% as tall as your 16:9 main div, no matter what the window size.

DEMO
======
[Click here to see a simple demo example](http://rawgithub.com/AwokeKnowing/responsivem/master/responsivemdemo.html)

Special Instructions
====================
Responsivem modifies the font-size of the html body.  But then how do you set the font-size for text? Well, just make sure it's in it's own tag.  So you wouldn't have div with just text in it, and set a width and height and font-size on  a div, because the width and height would be relative to that font-size.  Instead, set the width and height on the div, and wrap the text inside in a tag an set the font size on that (and don't set a width/height).

Also note that browswers usually don't render font's at exactly the em you specify.  If the font size comes out to 12.2 point, the browser might choose 12 or 12.5.  For this reason, you should leave some space to handle the font size slightly increasing in proportion to the container.

Why?
=======
This was originally for web apps that would be like flash apps or Windows 8 apps where you have a fixed layout but you want it to fill the screen.  It turns out it works great for just about any web page.  

Email me james david morris a/t gmail * com (no spaces) to let me know if you've used this, or for suggestions.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/AwokeKnowing/responsivem/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

