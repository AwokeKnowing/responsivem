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

Now if you size your main div to 1600em by 900em, then your main div will stretch to fill the browser window, while keeping the 16:9 proportion.  If you want a div inside of that that takes up 1/4 of the area in the upper left of your 16:9 main div, just add it in and make it's size 800em by 450em.  For fonts, it's the same.  A font sized 160em would be 10% as tall as your 16:9 main div, no matter what the window size.

DEMO
======
check this demo to see a simple example (comming soon)
=======
scale smoothly with screen size, keeping proportions


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/AwokeKnowing/responsivem/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

