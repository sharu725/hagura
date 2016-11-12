
# Hello, Jekyll! Theme - Get Started in 60 Seconds


Setup Jekyll with GitHub Pages in 60 Seconds


### Step 1 - Create the Jekyll Configuration / Settings File

Add your site title e.g. Your Site Title

`_config.yml`:

```
title: Your Site Title
```

### Step 2 - Create the Index Page

Add your index (front) page with a page title e.g. Welcome and using the default layout (to be created in Step 3):

`index.md`:

```
---
title: Welcome
layout: default
---

Hello, Jekyll!
```


### Step 3 -  Create the Master Layout

`_layout/default.html`

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{ page.title }} - {{site.title}}</title>
</head>
<body>

  {{ content }}

</body>
</html>
```

That's it. Ready for serving.

Go on GitHub in your repos **Settings** tab to the **GitHub Pages** sections and pick **Use the master branch** in **Select Source**.
Save. Enjoy. Happy Jekylling!

### Live Demo

See a live demo @ [`henrythemes.github.io/hello-jekyll-theme` »](https://henrythemes.github.io/hello-jekyll-theme)


### Bonus - Q: Can I Use Ready-Made Styles / Designs / Themes? A: Hello, Minima! Theme - Get Started in 60 Seconds, Reloaded

It's up to you to add your styles. Be bold.
To use ready-made styles / designs / themes see the [**Hello, Minima! Theme - Get Started in 60 Seconds**](https://github.com/henrythemes/hello-minima-theme) repo.



### More Themes

See the [Dr. Jekyll's Themes](https://drjekyllthemes.github.io) directory.



## Meta

#### License

The Hello, Jekyll! theme is dedicated to the public domain.
Use it as you please with no restrictions whatsoever.

#### Questions? Comments?

Post them to the [wwwmake forum](http://groups.google.com/group/wwwmake). Thanks!

