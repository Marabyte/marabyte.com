---
title: Make that CSS tiny!
date: 2020-10-02T13:00:00+01:00
code: true
featured_image:
  alt: ''
  caption: ''
  src: ''
summary: I made an Eleventy plugin
tags:
- 11ty

---
Most development workflows include an optimization step where unused code is stripped away from the final CSS or JavaScript file(s). This is particularly useful if the project uses a third-party CSS library like Bootstrap, Material or Tailwind where the uncompressed file size can easily reach the 2MB mark.

The most basic step is a mix of minification and compression. This alone can reduce the file size to "just" a few hundred KB. 

"But Hugo, how?? What kind of witchcraft is that?" you ask. (I'm quite sure you're not asking that but indulge me)

Well, minification is a technique where the file contents are parsed, and all sorts of clever tricks are used to save/reduce every byte.

In a CSS file, for example, all the whitespace is removed since the CSS parser doesn't need spaces or new lines to interpret the style rules, like this:

Before
```css
.a {
  color: red;
}

#b {
  display: flex;
}
```
After
```css
.a{color:red;}#b{display:flex;}
```