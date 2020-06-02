---
title: The evolution of my personal website
date: 2020-02-23T16:54:06.154Z
featured_image:
  alt: A vector geometric representation of the breaking dawn
  caption: Photo by Aperture Vintage on Unsplash
  src: "/uploads/breaking-dawn.svg"
summary: A reflection on the tech evolution of my personal website.
tags:
  - post
---I've been having a blog on and off for quite some time now.

My first blog was hosted on bloger.com even before the Google acquisition and I was quite active back then. It wasn't tech related back then; I would write about some new film I had watched, the latest on teenage drama or just pure nonsense.

### The "hand crafted"

As my interest on web development grew, I started to build my own website. There was a Portuguese hosting service that would allow you to host websites for free, but you couldn't run any server-side code, just serving static files.

In the beginning, I felt like a wizard! I spent ages trying to figure out how to build the template I wanted, and I annoyed [my friend Pedro](https://store.steampowered.com/app/557340/My_Friend_Pedro/ "My Friend Pedro") with hundreds of CSS questions:

- "How do I put this bit here but with the text like this?"
- "Why aren't these two aligned?"
- "Why is Firefox looking so different then IE?"
- "Are you sure I can't just use a <div> for everything? It works just fine!"

I might have been a pain to Pedro, but it was extremely rewarding to see the page after hacking all the CSS and HTML together.

The one issue with this setup was the amount of copy/pasting involved. Since I couldn't write any server-side code, for every new post I would have to be duplicate the "master template", add the new content and upload it to the new folder. Needless to say, this was a very error-prone system.

### Enter WordPress

WordPress was a game changer for me. No more writing posts on Word, copy/paste to notepad, add HTML tags and then upload to an FTP. I could write my post on the browser and with one click a new page would be created!

PHP was easy learn, or at least, learn enough to build templates for my blog and there were thousands of plugins and themes for WordPress that I could mix and match to make the website more unique.

And for a very long time WordPress powered my blog. New content became infrequent, but I would still spend a lot of time tweaking the website, coding was more fun than writing content.

I think WordPress doesn't get enough credit for how accessible the Internet became thanks to it.

### Rise of complexity

In 2014 I started to work in an AngularJS webapp and got excited with the idea of WordPress powering the content and AngularJS the frontend. We were doing something similar at work, but it involved purpose-built plugins and bash scripts, I didn't quite understand all the setup behind it and until this day I am afraid of bash scripts.

###### (Buy me a pint and I'll tell you the story about bash scripts.)

Luckily, towards the end of the year I went to a meetup where they demoed a REST plugin for WordPress. In my head it was an all-new world, I could do all kinds of fancy transitions between pages, everything would be cached in a CDN and the app-like behaviour... it would be magical.

Not everything went as I expected but the result was not bad at all. I learnt a few tricks while developing my personal site and eventually used them at work for our clients.

And from AngularJS I went to Angular. The transition was hard, and it took me much, much longer than I thought but again, nothing like a pet project to learn new stuff.

After the Angular rebuild I started several attempts to rebuild my website with other frameworks/libraries but never quite finished any.

Everyone was in love with React. At work, in meetups, in the twitterverse, everyone was mad about it. And if you were not on the React wave you could not have lunch with the cool kids.

So, I started to rebuild my website with React but eventually gave up. Fighting webpack was almost a fulltime job and Redux did not helped one bit to the developer experience. I was getting frustrated and not seeing any real benefits compared to what I already had. The AngularJS to Angular was time consuming enough, I was not ready to invest the same amount of time in a new framework.

Instead, I spent my spare time trying to put Angular on a diet. While overall I was happy with the site, but the amount of JavaScript required was a bit of concern. 70kB of compressed JavaScript for a blog is way too much. After a good combination of exercise and diet I managed to get a respectable 90 on Page Speed Insights.

But the bundle size was still annoying me, it was way too big. Initially it was an incentive to look at React again, but after looking at other projects the gains were not very impressive.

### Less but better

Thanks to [Jake](https://twitter.com/jaffathecake "Jake Archibald's twitter page") and [Surma](https://twitter.com/DasSurma "Surma's twitter page") I discovered Preact. The project selling point is "Fast **3kB** alternative to React with the same modern API." and that caught my eye. It was a good opportunity to get on the JSX wagon and make some serious improvements on the site's performance.

I must admit, I'm not a huge fan of JSX. Angular's and Vue's approach feels more natural to me, having a bit of JavaScript on my HTML seems more natural than having a bit of HTML and CSS on my JavaScript. But I also don't dislike it, JSX also has its merits so I guess I'm neutral about it.

I was close to have the brand-new website ready when I started to think about pre-rendering the pages. I had built a very scalable setup to prerender the 50k pages for my company's main website and thought that I could apply the same logic to a smaller website and would just need to swap some Angular specific bits with Preact.

And just like that, I realized the irony of all of it. I went from a static WordPress website to Preact that I would then prerender. Do I really need the complexity?

No, no I don't.

Maybe I just need a Static Site Generator and the obvious choice for was [Hugo](https://gohugo.io/ "Hugo website"). If you're wondering why it is obvious, my first name is Hugo.

Fast forward a few months and I was getting stuck with Hugo. I think the project is brilliant and it generates templates incredibly fast but whenever I needed some functionality that was not provided by default, I would spend hours to do basic stuff. Go seems great but it's out of my comfort zone.

And so, another project is shelved.

It took me a couple of months to get interested again in revisiting the website, but the wait was worth it. [Eleventy](https://www.11ty.dev/ "Eleventy's project page") has everything that I was looking for. It's fast, easy to setup, great community, built with JavaScript and an easy to understand plugin API.

In just a couple of days I re-wrote the website and I was amazed how simple and obvious most things were to implement.

I work on large-ishy websites and webapps at work, and it's easy get down the spiral of using the same tools for all projects. Afterall, when you have a hammer, all problems are nails.

It is very refreshing to get back to basics and just write HTML, CSS, and the very minimal JavaScript.

If you made it until the end, I am truly thankful, and you should treat yourself with a cup of tea and some nice biscuits.
