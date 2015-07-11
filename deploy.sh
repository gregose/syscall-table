#!/bin/sh

# based on http://kaibun.net/blog/2011/08/07/how-to-host-a-jekyll-app-on-github-pages-with-plugins/

git checkout gh-pages
rm -rf *
for file in `git ls-tree master www -r --name-only`; do
  `git checkout master $file` && cp -r www/* . && rm -rf www
done
touch .nojekyll
git add -A .
git commit -m "static content update at `git rev-parse --short HEAD`"
git push origin gh-pages
git checkout master
