#!/bin/sh
set -e
rm -rf target/public
clojure -A:fig:min
