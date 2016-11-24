---
layout: post
title: Documentation
---

* Do not remove this line (it will not be displayed) 
{:toc}

# Features:
Hagura is a theme made for blogs with long text paragraphs. Made to be easy on eyes as well. 

Suitable fonts are selected for better readability. Since the theme is created for smartphone reading, the theme is very light so that it loads instantly on a slow data connection.

The theme comes with pre-installed **analytics**, **disqus** and **html compressor**. But make sure you change key parameters in the **_config.yml** file.

## Switch Night-Mode
The best part is the night-mode that comes with this theme. Once you click on night-mode, the website remebers it untill you close or toggle!

# Installation: 
Fork the ``master`` branch and delete ``gh-pages`` branch in it. This is important because ``gh-pages`` branch is used here only to host the blog. You should be using the master branch as the source and create a fresh ``gh-pages`` branch.

Watch my video on instlallation
<iframe class="video" src="https://www.youtube.com/embed/T2nx6tj-ZH4?rel=0?rel=0" frameborder="0" allowfullscreen></iframe>

## How to delete old **gh-pages** branch?
After forking the repository, click on **branches**.

![delete gh-pages branch](http://blog.webjeda.com/images/delete-github-branch.png)

Delete ``gh-pages`` branch.
![delete gh-pages branch](http://blog.webjeda.com/images/delete-github-branch-2.png)

You have to create a new ``gh-pages`` branch using the master branch. Go back to the forked repository and create ``gh-pages`` branch.

![create gh-pages branch](http://blog.webjeda.com/images/create-gh-pages-branch.JPG)

Now, go to settings and check the **Github Pages** section. You should see a URL where the blog is hosted.

This process will host the theme as a **Project Page**. You can also download the files for local development. 

The default theme will look like this

![webjeda hagura jekyll theme]({{site.baseurl}}/images/hagura-1.png)


This theme is responsive as well.

![webjeda hagura responsive jekyll theme]({{site.baseurl}}/images/hagura-responsive.png)
{: style="text-align:center"}

# Development
Make changes to the **master** branch and create a pull request. Do not use **gh-pages** branch as it is used to host the theme.

# License
MIT License

# Change Log

### Version 0.8
* Initial release with a reader-friendly layout.
