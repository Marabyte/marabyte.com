---
title: On browser monoculture
date: 2019-01-12T16:54:06.154Z
code: false
featured_image:
  alt: A vector geometric representation of a galaxy
  caption: Original photo by Michael Olsen on Unsplash
  src: /uploads/the_deep_sky_wide.svg
summary: >-
  Microsoft will cease to develop EdgeHTML / Chakra and will use Chromium for
  Edge’s internals instead. Are these good news or are we close to full Google
  dominance of the internet?
tags:
  - post
---
The end of 2018 came with one of the most surprising news on the web’s pocket universe: Microsoft will cease to develop EdgeHTML / Chakra and will use [Chromium for Edge’s internals instead](https://github.com/MicrosoftEdge/MSEdge/blob/master/README.md). In hindsight, there [were a few hints](https://9to5google.com/2018/11/19/microsoft-google-chrome-windows-10-arm/) that Microsoft was heading in this direction, but it was very surprising, nevertheless. What was unsurprising, however, were the reactions to this move: for many people, the *gasp* was followed by a “finally!” and I was one of them.

While Edge’s performance and feature compatibility are good, new features can take a while to land in the platform since they’re tied with the Windows 10 release cycle. But the real issue for me is the Inspect Tool. It’s completely bizarre that the company who famously shouted “DEVELOPERS! DEVELOPERS! DEVELOPERS!” and offers some of the best-in-class tools for said developers also ships a tool that’s 5 years or more behind the competition. As I was celebrating the death of Inspect Tool, I couldn’t help but wonder if this was good news to the internet as a whole.

### Are we better off with just one browser? A quick history check first.

Browser monoculture is not a new topic; we’ve been debating this subject on and off since the days of Internet Explorer 6. [Depending on who’s counting](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers), Internet Explorer reached a peak of over 95% of the market share sometime between 2003 and 2005 and some people started to worry, rightly so, about the future of the internet.

While I won’t go on bashing Internet Explorer, there’s nothing new I can bring to the subject, I would like you to remember just this:

* 2001 — Internet Explorer 6 release date
* 2006 — Internet Explorer 7 release date

Sure, there were a couple of Service Packs in between but overall, the internet just took a 5-year nap. But 5 years after Internet Explorer 7 release, the internet looked quite different. By 2011 Internet Explorer’s popularity was on free fall and Safari and Chrome were both taking off. And around the same time, the conversation about Browser Monoculture was resurfacing with now WebKit at the centre of the benefits and perils of one dominant platform. At the time WebKit powered two major players, Safari and Chrome, but was also used by smaller browsers like Android stock browser, Samsung Internet, Steam’s in-game browser, UC Browser, Opera announced the switch to WebKit in 2013 (and then to Blink), etc.. It is important to keep in mind that IE6 monoculture was very different than WebKit’s. One had one company developing one browser, the other has multiple companies and individuals developing one engine that powers multiple browsers. And the more I think about it the less I know which one is worse.

### It’s 2019, are we better off with just one browser platform?

You see, the thing is… well… it’s complicated. Like all things, there are pros and cons. WebKit’s open source nature allowed browsers to evolve quickly and to support new platforms like televisions, gaming consoles and whatnot without having vendors building an engine from scratch. But the open source nature on its own it isn’t a magic bullet, as the number of browsers grew so did the fragmentation. Some argue that monoculture is more developer friendly, but I think that’s not true. It may have been back in IE6 days but not anymore. I honestly don’t know what is worse, having to deal with a rendering issue with Firefox and Edge or with Android Stock and Samsung Internet.
As a developer, I would expect all WebKit browsers to behave the same, but the cruel reality is that they are not all running the same WebKit. Some are using last week’s code; others are using last years. But I agree with you, this is not a monoculture issue, this is an issue of browser vendors taking too long to release updates or making forks of the code and running somehow similar codebases but they’re not quite the same.
With the move to Chromium, Microsoft will have access to feature parity with Chrome and we all can agree that this is good. Exceptionally good even.

But there’s no guarantee that Microsoft will always use the latest and greatest. Will Microsoft synchronise its release cycle with Google? I doubt it. Am I being a bit of pessimist? Maybe. But if we look at Opera, we may have a glimpse of what’s in store for Edge. At the time of writing the latest release of Opera was version 57.0.3098.110, released on 2019/01/03, that included Chromium 70.0.3538.102, released on 2018/11/08, while Chrome was on version 71.0.3578.98, released on 2018/12/12.
Since Blink is a fork of WebKit, it is comforting at least that they share some of the fragmentation issues.
So, let’s take a step back. Are we even heading to a browser monoculture again? Firefox is using its own Quantum engine (love the name), Chrome, Opera and Edge will be using Blink, Safari is using WebKit.
With 3 different engines still in the fight I don't think we’re near an IE6 scenario but if Microsoft will start to contribute to Chromium we may see Chrome having a performance boost compared to Firefox and I agree with Mozilla, the internet [needs to have Firefox around.](https://blog.mozilla.org/blog/2018/12/06/goodbye-edge/) If we look at iOS devices, the story is slightly different. Although we can find multiple browsers in iOS App Store, they all use WebKit due to Apple’s restrictions. This is dangerous considering iOS considerable market share. Apple is in a position that can ignore web standards and force other browsers to use Apple’s own feature implementation.

### So, where are we?

First, it’s important for us to keep in mind that there’s no next IE6. In 2004 Windows’s grip was absolute, now the market is shared between Windows, Android and iOS. Microsoft’s decision to switch to Chromium means that all major browsers are now open source and the web community can contribute to them. Google has a clear dominance of the web at the moment and they are using that position to promote and pushing web standards but we must use Apple as a cautionary tale: they were once in a dominant position and promoting web standards but now things are mostly quiet on their side and the priority is their platform, not the users or the web. Lastly, if you feel that we’re giving too much power to Google, there are still alternatives and we have the power to change things. Either by contributing to the various open source platforms, engaging with their dev teams, making noise online and by changing our default browser.