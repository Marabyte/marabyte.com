---
title: Smashing Conference — London 2018 — Day 2
date: 2018-02-10T00:00:00Z
code: false
featured_image:
  alt: 'A geometric representation of train arriving the station'
  caption: 'Photo by JESHOOTS on Unsplash'
  src: '/uploads/train.svg'
summary: My notes for day two of Smashing Conference London 2018
tags: []

---
And this is it! SmashingConf was everything I’ve hoped for and then some.

Batteries are recharged, ideas are floating around so let’s make performant websites!

You can [reade here](/post/smashing-conference-london-2018-day-1/) the notes from day 1.

## How’s the UX on the Web, Really? with Ilya Grigorik

> Ilya Grigorik is a developer advocate and web performance engineer at Google. He spends his days and nights working on making the web faster and building and driving adoption of performance best practices. Whenever not thinking web performance, or analytics, Ilya can be found contributing to open-source projects, reading, or building fun projects like VimGolf, GitHub Archive and others.

<figure>
  <iframe title="How’s the UX on the Web, Really? with Ilya Grigorik" loading="lazy" class="video" src="https://player.vimeo.com/video/254834890?h=d29a848219" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>How’s the UX on the Web, Really? with Ilya Grigorik</figcaption>
</figure>

- Chrome User Experience Report stores data anonymously provided by Chrome users in Google’s Big Query service
- CrUX now contains data of over 1 million websites
- Save-Data header informs server lighter applications
- Network API provides estimates of the connection latency, bandwidth and network type (2G/3G/4G/Wifi)
- Calibrate your lab metrics with real world metrics

## Javascript Engine Internals For Javascript Developers with Mathias Bynens

> Mathias is a web standards fanboi, works on the V8 team, and has a background as a JS developer (rather than a C++ developer). He’s spending most of his time on JavaScript, HTML, CSS, Security, Bash, Unicode and performance issues.

<figure>
  <iframe title="Javascript Engine Internals For Javascript Developers with Mathias Bynens" loading="lazy" class="video" src="https://player.vimeo.com/video/254852822?h=18fac8b174" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Javascript Engine Internals For Javascript Developers with Mathias Bynens</figcaption>
</figure>

- Holes in arrays is bad for performance, ie : `[2,2,8,,,,,7,9]` — https://jsperf.com/packed-vs-holey-arrays/2
- Arrays of the same type have better performance
- Optimizations can change from specific to generic but not the other way around
- Prefer array = [] over Array(n)
- For…each, for…of and normal for loop have now the same performance

## Improving Page Performance In Modern Web Apps with Katie Hempenius

>Katie is a software engineer based in New York City and currently works for Google. Previously, she’s been a Senior Software Engineer at Fitbit.

<figure>
  <iframe title="Improving Page Performance In Modern Web Apps with Katie Hempenius" loading="lazy" class="video" src="https://player.vimeo.com/video/254858694?h=1094739249" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Improving Page Performance In Modern Web Apps with Katie Hempenius</figcaption>
</figure>

- Brotli is roughly 30% smaler than gzip
- HTTP2 brings higher benefits to mobile connections where latency is usually higher than wifi/broadband
- Remove dead code from your JS, CSS and HTML
- Tree shaking automatically removes unsed code during build
- Webpack is good for application code, Rollup for frameworks/plugins
- Serve only what you need when you need it

## Resource Loading — Past, Present & Future with Yoav Weiss

> Yoav Weiss is a principal architect at Akamai, where he focuses on making the web platform faster by adding performance-related features to browsers as well as to Akamai’s CDN. He takes image bloat on the web as a personal insult, which is why he joined the Responsive Image community group and implemented the various responsive images features in Blink and WebKit.

<figure>
  <iframe title="Resource Loading — Past, Present & Future with Yoav Weiss" loading="lazy" class="video" src="https://player.vimeo.com/video/254861484?h=a557d4d110" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Resource Loading — Past, Present & Future with Yoav Weiss</figcaption>
</figure>

- When requesting files HTML has priority over CSS and JS
- Opening new connections is expensive
- Browsers open between 2 and 6 parallel connections per domain
- TLS handshakes are expensive
- Some HTTP1.1 optimisation techniques like domain sharding don’t work well with HTTP2
- Images in the viewport have greater priority than outside

## Performant Animations: Hitting 60fps with Emily Hayman

> Emily is a Solutions Engineer at Algolia where she helps make search experiences better. She’s passionate about well-architected Sass, the possibilities of SVGs, modularity, fine-tuning animation performance, and tinkering with data visualizations.

<figure>
  <iframe title="Performant Animations: Hitting 60fps with Emily Hayman" loading="lazy" class="video" src="https://player.vimeo.com/video/254906131?h=ee31045cb1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Performant Animations: Hitting 60fps with Emily Hayman</figcaption>
</figure>

- Loading the page fast is not enough, user interactions should fast as well
- Animations are not just a “nice to have”, they improve user experience
- There’s no good way to the animations with Javascript (performance wise), the [Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) will merge the flexibility of Javascript with the performance of CSS but browser support is not wide yet
- If we need to animate an object we should use the [transform function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) instead re-position the element
- Overall, let’s avoid properties that cause re-paints and use the ones that trigger compositing (transform / opacity)
`will-change` property informs the browser the element will change at some point, so browser can optimise ahead of time

## Building Performance for the Long Term with Allison McKnight

> Allison McKnight is a software engineer on the Performance team at Etsy, where she helps the people who build Etsy reason about the performance of their features, creates tools that reveal how how code changes effect site performance, and checks IRC regularly for any bear gifs that may have wandered in.

<figure>
  <iframe title="Building Performance for the Long Term with Allison McKnight" loading="lazy" class="video" src="https://player.vimeo.com/video/254947097?h=68c2ac5f84" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Building Performance for the Long Term with Allison McKnight</figcaption>
</figure>

- Performance has to be a team effort across all departments (devs, ux, design, dev ops, etc)
- Get buy-in from your boss to work on performance
- Find out what key metrics are important to your company and show them how performance improve these metrics
- An example from Ectsy: as a proof of concept the dev team added 160KB of images to a page (loaded off screen) and bounce rate increased by 12%
- Plan for the long term. Use tools to monitor performance over time so you can understand how changes in the site affect performance
- Set a performance budget and use it against any new features you may introduce in the site.
- Measure carefully, synthetic data may be vastly different the real user data
- Averages have little meaning, you should focus on 99th and 95th percentile

## In the loop with Jake Archibald

> Jake works in Google Chrome’s developer relations team, working on specs, testing implementations, and ensuring developers have tools to make their jobs less painful. He’s a big fan of time-to-render
optimisations, progressive enhancement, and all of that responsive stuff.

<figure>
  <iframe title="In the loop with Jake Archibald" loading="lazy" class="video" src="https://player.vimeo.com/video/254947206?h=95ae994e86" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>In the loop with Jake Archibald</figcaption>
</figure>

- Use semi colons in Javascript, you monsters!
- The main thread is where most of the site code runs
setTimeout() is badly named and the arguments are the other way around
- When we declare a setTimeout() we block the main thread for the x milliseconds and NOTHING happens before setTimeout() ends
- Don’t use setTimeout() with animations, requestAnimationFrame() instead

<script defer src="https://player.vimeo.com/api/player.js"></script>
