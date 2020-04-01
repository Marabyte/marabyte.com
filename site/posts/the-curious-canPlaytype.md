---
title: The curious CanPlayType()
date: 2020-02-24T16:07:10.122Z
code: true
featured_image:
  alt: >-
    A vector geometric representation of a silhouette photo of mountain during
    night time
  caption: Photo by Vincentiu Solomon on Unsplash
  src: /uploads/vincentiu-solomon-ln5drpv_imi-unsplash.svg
summary: A reflection on the tech evolution of my personal website.
tags:
  - post
---
One of the great challenges in coding is naming stuff. And by stuff, I mean variables, functions, methods, responses, everything that needs a name.

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