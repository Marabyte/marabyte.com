---
title: The curious CanPlayType()
date: 2020-02-27T16:07:10Z
code: true
featured_image:
  alt: A vector geometric representation of a silhouette photo of mountain during
    night time
  caption: Photo by Vincentiu Solomon on Unsplash
  src: "/uploads/vincentiu-solomon-ln5drpv_imi-unsplash.svg"
summary: A reflection on the tech evolution of my personal website.
tags:
- post

---
One of the great challenges in coding is naming stuff. And by stuff, I mean variables, functions, methods, responses, everything that needs a name - all the stuff.

Over the years I went from naming my variables something short like 'newImg' to something more descriptive like 'imageAfterTransformation', I know it seems obvious but sometimes it's hard to name things. You have an array of images, 'imagesArray' and then somehow you get a second image array and you end up with 'imagesArray2'.

The struggle is real.

So, I take comfort knowing that even the people working on web standards face the same challenge.

Exhibit A: The [canPlaytype()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType) method.

If you need to test the browser to check if a media file is playable `canPlayType()` is here to help, check the code snippet bellow:

```javascript
const audio = document.createElement('audio');
const canPlayOgg = audio.canPlayType('audio/ogg; codecs=opus');

if (canPlayOgg === 'maybe') {
  return 'Maybe the browser can play the file. Maybe not.';
}

if (canPlayOgg === 'probably') {
  return "I mean, the browser can probably play it but it's a guess game really.";
}

if (canPlayOgg === '') {
  return 'No can do, sir!';
}
```

That's right. `canPlayType()` returns 3 results: `maybe`, `probably` and an empty string. English is not my first language, so I thought I was missing some nuance between them but after asking around I couldn't get an agreement on the difference between `maybe` and `probably`. 

I like these Javascript quirkiness's, they jeep me on my toes.   