#!/bin/sh
set -e
rm -rf target/public
clojure -A:fig:min
cp -a resources/public/* docs/
cp -a target/public/cljs-out/dev-main.js docs/cljs-out/
git add docs/*
git commit -m "deploy"
git push
