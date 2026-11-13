#!/usr/bin/env bash
# Builds the site and force-pushes dist/ to the gh-pages branch of origin.
set -euo pipefail

cd "$(dirname "$0")"
remote=$(git remote get-url origin)

npm run build
touch dist/.nojekyll

cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push --force "$remote" gh-pages
rm -rf .git
