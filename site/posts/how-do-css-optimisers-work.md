---
title: How do CSS optimisers work?
date: 2020-10-02T13:00:00+01:00
code: true
featured_image:
  alt: A vector geometric representation of a man throwing a fishing net
  caption: A geometrized version of a photo by Lahiru Iddamalgoda on Unsplash
  src: /uploads/moutain-daniel-sessler-unsplash.svg
summary: What's the magic behind CSS optimisers?
tags:
  - 11ty
  - css
  - performance
  - post

---
If you're working on a project that uses [react cli](https://create-react-app.dev/), [vue cli](https://cli.vuejs.org/), [angular cli](https://cli.angular.io/), or any other kind of tool that provides an out of the box full development experience, you most likely have a code optimisation step in your workflow where code is cleverly removed from the final CSS or JavaScript bundle file(s).

Both JavaScript and CSS benefit from this but today we'll focus on CSS. There are some great third-party CSS libraries like Bootstrap, Material or TailwindCSS but the file size can easily reach the 2MB mark.

The optimisation step is very important as it can reduce the file size to "just" a few hundred KB and make your website much faster.

"But Hugo, how?? What kind of witchcraft is that?" you ask. (I'm quite sure you're not asking that but indulge me)

## Minification

Well, minification is a technique where the file contents are parsed, and all sorts of clever tricks are used to save/reduce every byte.

In a CSS file, for example, all the whitespace is removed since it's there mostly for us devs, as a way of improving coding readability but we can safely remove it because the CSS parser doesn't need spaces or new lines to interpret the style rules.

This rather simple CSS file can be converted in a one liner.

```css
/** Code for obsolete human eyes */
.a {
  color: red;
}

#b {
  display: flex;
}
```

```css
/** Code for the superior machine overlords */
.a{color:red;}#b{display:flex;}
```

Why do we bother? In the text encoding world, one charater is represented by one byte ([it's an oversimplication](https://en.wikipedia.org/wiki/ASCII])) and by removing all unecessary spaces and new lines we can save an handfull of bytes like in the code above or a few KB in a large CSS file.

Removing whitespace is just one of countless "tricks" we can use to optimise CSS. Consider the following code:

```css
/** Code for obsolete human eyes */
.a {
  color: #ffffff;
  background-color: rgb(0, 0, 0);
  margin-top: 5px;
  margin-bottom: 50px;
  margin-left: 0px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
}
```

```css
/** Code for the superior machine overlords */
.a{color:#fff;background-color:#000;margin: 5px 10px 50px 0;padding:10px}
```

Amazing, right? Let's unpack this early birthday gift.

- Hexadecimal colours are represented by six digits, each from `0` to `9` and `A` to `F`. Every pair represents a R(ed)G(reen)B(lue) channel. If all digits are the same we can simplify to three digits only, `#ffffff` is the same as `#fff`, `#333333` is the same as `#333` and so on.
- RGB colours are a bit more verbose, each channel takes a value between `0` and `255`. The only simplification we can do is to remove the zero padding, ie: `rgb(000,005,010)` becomes `rgb(0,5,10)`. But RGB colours and hexadecimal colours are exactly the same, so `rgb(0,0,0)` can be converted in to `#000000` and just like we saw in the previous example, if all six digits are the same we can just use three, so we can simplify even more to `#000`.
- Both the margin area and padding area can be simplified using CSS [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties). If the four positions of a property have the same value it can be simplified to just one value, like our `padding:10px`. And if the values are different, we can specify them in the clockwise direction, just like the `margin:5px 10px 50px 0`.
- You'll notice that at the end of our simplified CSS code we're missing a `;` after the `10px`. That's another byte we're saving. The last property in a CSS rule doesn't need a `;` because, well, it's the last. No need to separate properties anymore!

Every byte helps, techniques like this can save thousands of bytes.

## Compression

Data compression is a fascinating topic of which I know very little. The most basic compression algorithm will look at patterns in the text, replace them with smaller values and keep an index of those substitutions.

Let's look at our optimised CSS again

```css
.a{color:#fff;background-color:#000;margin: 5px 10px 50px 0;padding:10px}
```

If we ignore the CSS code and just focus on the text, we'll start to find some groups of charaters that are repeated a few times. The word `color`, the CSS unit `px`, `in` and `10`. And with take we can build our own compression algorithm:

```text
// compression index
color=y,in=w,px=z,10=q
```

```text
// Compressed code
.a{y:#fff;background-y:#000;margw:5z qz 50z 0;paddwg:qz}
```

Let's just agreed this is a terrible compression algorithm. Luckly browsers use much better ones like [gzip](https://www.gnu.org/software/gzip/) and [brotli](https://github.com/google/brotli), how much better? Look at TailwindCSS own results:

| Uncompressed | Minified |  Gzip   | Brotli |
| :----------: | :------: | :-----: | :----: |
|   2413.4kB   | 1967.4kB | 190.2kB | 46.2kB |

We knew that minification would saves us a few hundred kilobytes but compression... That's a whole new level.

Brotli is the new kid on the compression block and support is almost universal, most recent [browsers support it](https://www.caniuse.com/brotli) and popular CDNs like [AWS Cloudfront](https://aws.amazon.com/cloudfront/), [Netlify](https://www.netlify.com/), [Microsoft Azure CDN](https://azure.microsoft.com/en-us/services/cdn/) and more will handle compression for you. No need to do anything at all! 🎉🎉🎉

## Tree Shaking

... or how I like to call it "Zombie Purge" (it will be a thing) is the process of removing unused code from your final bundle.

We've all been there, we created a few classes fully confident they were the best code we ever written and we would never forget. Few minutes later we refactor the HTML and we realise we don't need this old CSS class we wrote five minutes ago.
We delete the class name from the HTML but never got around to do the cleanup in the CSS file. Maybe it's being used elsewhere, who knows?

This is where tree shakers are handy. In your website build step, a CSS tree shaker will look at your CSS and all your HTML files and remove all unused rules. If you are a CSS artisan and you handcraft your own CSS, you can still benefit from this technique but just. On the other hand, if you use a third-party CSS library like Bootstrap, Material or TailwindCSS the savings can be massive.

If you check the table above where we compare the outputs for compression, you'll notice the Gzip version of TailwindCSS takes a generous 190.2 kB. That's a lot of CSS. I'm using TailwindCSS in this website and my CSS is an ultra-lightweight at 1.1kB.

All thanks to to a combination of minification, compression and tree shaking.

Right, this got a bit too long! I hope this post helped to understand some of the techniques used to save those precious bytes in your website.

