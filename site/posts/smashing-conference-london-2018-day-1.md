---
title: Smashing Conference — London 2018 — Day 1
date: 2018-02-08T00:00:00Z
code: false
featured_image:
  alt: 'A geometric representation of a nightime timelapse photo in a city'
  caption: 'Photo by Marc-Olivier Jodoin on Unsplash'
  src: '/uploads/speed.svg'
summary: ''
tags: []

---
Do I look excited? Sound excited? I am very excited. I know you can’t tell but I am! It’s my first Smashing Conference and it couldn't be more timely as I have a new project going live soon!

I’m part of the team currently working on [dk.com](https://dk.com) relaunch and as we approach the last stretch, a conference titled “Performance Matters” it’s exactly what we need to ensure we are ticking all the boxes.

If you haven’t heard about Smashing Conferences before, they are organised by the same brilliant team that runs the [Smashing Magazine](https://www.smashingmagazine.com).

I’ve been reading their website since 2011, bought all their books (and the e-books version too because, you know, I like to look at the physical books and e-books are more practical). As you can tell I’m a big fan of their work and have a deep respect for their contributions to the web industry.

Here are some notes I took from day 1:

## Making Platforms And Processes Promote Performance with Phil Hawksworth

> Phil works in Developer Relations at Netlify, the fastest growing automation and hosting platform for modern websites. Phil’s career in web development spans almost 20 years and includes time as a Software Engineer at Verisign, an Open Source Evangelist at British Telecom, and Technology Director at R/GA where he worked with clients around the world such as Nike, Google, Beats By Dre and Samsung.

<figure>
  <iframe loading="lazy" class="video" src="https://player.vimeo.com/video/254678463?h=0464ebc1c2" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Making Platforms And Processes Promote Performance with Phil Hawksworth</figcaption>
</figure>

- Plan and test deployment early on the development cycle
- Use the same environment for both Staging and Production so you feel confident enough to deploy on a Friday afternoon at 5.30 (just joking, avoid deployments on Fridays)
- Automated deployments are the way to go. No human intervention should be required. (All hail the our CD overlords!)
- Use git tags in urls to test different versions of your project
- Version Control EVERYTHING!
- Recommended read : [Designing for Performance](https://amzn.to/2smDc5d) by Lara Callender Hogan

## Into The Weeds Of CSS Layout with Rachel Andrew

> Rachel Andrew is a front and back-end web developer, author and speaker, as well as Smashing Magazine’s new Editor-in-Chief. She has written several web development books, including chapters for two Smashing Books and is an A List Apart columnist, writing about the business of web development. She also writes about business and technology on her own site at rachelandrew.co.uk. In addition to offering consultancy services through the company she founded in 2001 — edgeofmyseat.com — Rachel is also one of the developers of the content management system, Perch.

<figure>
  <iframe loading="lazy" class="video" src="https://player.vimeo.com/video/254679499?h=93df0cd5ee" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Into The Weeds Of CSS Layout with Rachel Andrew</figcaption>
</figure>

- Build for the latest browsers but not at the expense of excluding older browsers. Keep the web open by providing sensible fallback
- Enhance your content using [CSS Feature Queries](https://caniuse.com/#feat=css-featurequeries)
- CSS Grid has no negative impact on performance (it’s faster than Bootstrap 4)
- There’s no CSS Grid polyfill and it’s unlikely that it will ever be one with feature parity
- FR unit does not distribute the size equaly

## The Joy Of Optimizing Images with Una Kravets & Martin Splitt

>Una Kravets is technical writer, having written for various online publications such as A List Apart, Smashing Magazine, and Sitepoint. Una also co-hosts the [Toolsday](http://toolsday.io/) podcast and started both the Washington DC and Austin Sass Meetups. Una is involved in the open source community as both an open source design advocate and maintainer of the [CSSgram](http://una.im/CSSgram) project. She’s a performance nerd, travels frequently, and listens to way too many audio books.

<figure>
  <iframe loading="lazy" class="video" src="https://player.vimeo.com/video/254736788?h=aee462a6ed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>The Joy Of Optimizing Images with Una Kravets & Martin Splitt</figcaption>
</figure>

- Use Picture element with srcset and sizes to let the browser request the correct sizes and densities for the user’s viewport
- If you use Webpack, [img-loader](https://www.npmjs.com/package/img-loader) will optimize images during build time
- Improve user experience by providing a blury placeholder, use a very small image, scale it up to the size of the actual image and then apply CSS Blur
- Use jpg/webp for image size, png for quality
- CSS Blend Mode provides Instagram like effects
- Different media can be blended (ie images and video)
- Never use GIF. NEVER!!!

## A/B Testing, Ads And Other 3rd Party Tags with Andy Davies

> Andy Davies is associate director for web performance at NCC Group, where he works with clients to measure and improve the performance of their websites. He also wrote “A Pocket Guide to Responsive Web Performance” for Five Simple Steps.

<figure>
  <iframe loading="lazy" class="video" src="https://player.vimeo.com/video/254703766?h=3a548fd0ca" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>A/B Testing, Ads And Other 3rd Party Tags with Andy Davies</figcaption>
</figure>

- Everything on your website should have value, because everything has a cost
- Evaluate if the performance penalty of 3rd Party scripts adds value to the website.
- A/B testing should be carefully measured, don’t test apples against oranges
- If possible A/B testing should be handled on the server / CDN
- In a big UK retailer, 300ms performance gain on Android increased revenue by 5%
- No point on loading jQuery / other js frameworks from public CDN, there are no cache benefits
- Some 3rd party scripts highjack beforeLoad event and trigger image load before the actual HTML starts loading
- Tag Managers should be handle with care, they can sneak in unwanted code

## Web Fonts Are ▢▢▢ Rocket Science with Zach Leatherman
> Zach is a Front-end Engineer @filamentgroup. He enjoys watching and playing soccer, piano, finding patterns in both people and machines, movies that make him think or feel, ordinary things in faraway places, and writing about himself in the third person.

<figure>
  <iframe loading="lazy" class="video" src="https://player.vimeo.com/video/254727749?h=51d32e312e" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Web Fonts Are ▢▢▢ Rocket Science with Zach Leatherman</figcaption>
</figure>

- WOFF2 is roughly 30% smaller than WOFF
- [font-display: swap](https://caniuse.com/#feat=css-font-rendering-controls) tell the browser to first render the text with the fallback font and then swap the webfont as soon it finishes loading
- Variable fonts provide multiple font types in one package but at the expense of a bigger file (maybe it’s ok with HTTP/2?)
- Use [CSS font loading API](https://caniuse.com/#feat=font-loading) to have better control on how and when to load fonts
- [Glyphhanger](https://github.com/filamentgroup/glyphhanger) can extract font subsets and reduce the font file size

## How Fast Is It? with Patrick Meenan

> Patrick Meenan has been working on web performance in one form or another for the last 14 years and is currently working on Chrome performance at Google. He created the popular open-source WebPagetest web performance measurement tool, runs the free instance of it at https://www.webpagetest.org and can frequently be found in the forums helping site owners understand and improve their website performance.

<figure>
  <iframe loading="lazy" class="video" src="https://player.vimeo.com/video/254728119?h=11bc65e350" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>How Fast Is It? with Patrick Meenan</figcaption>
</figure>

- Measure performance with metrics that matter to your users.
- Use real devices, emulators don’t provide an accurate representation of performance
- Use WebPageTest to block specific URLs/scripts to measure the performance impact and build a better case to explain stakeholders why it has to go
- Metrics to keep in mind : First Contentful Paint, Speed Index, First Interactive

## A Modern Front-end Workflow With Devtools with Umar Hansa

> Umar is a front-end web developer in London working for SitePen, with a focus on writing tips, tutorials and documentation for the web platform. One of the projects he plans to explore and share with the community is using tooling such as the Chrome DevTools for an improved development workflow, but also for debugging performance issues.

<figure>
  <iframe loading="lazy" class="video" src="https://player.vimeo.com/video/254733177?h=1d6934a959" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <figcaption>A Modern Front-end Workflow With Devtools with Umar Hansa</figcaption>
</figure>

- On Chrome Dev Tools, Local Override allows to change the code and reload it to test code changes directly on the browser
- After running the Performance tab, we can measure inline code performance in sources

***

And that’s it for day one! But worry not, day two has more good stuff in store for us.

<script defer src="https://player.vimeo.com/api/player.js"></script>
