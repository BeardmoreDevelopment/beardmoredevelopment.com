// Fails the build if the output mentions anything the site must never show,
// or if a page links to an internal path that was not built.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;

const banned = [
  /\bPwC\b/,
  /\bKPMG\b/,
  // The body font is called "IBM Plex Sans"; that name (and its "IBM+Plex" URL form) is the one allowed use.
  /\bIBM\b(?![ +]Plex)/,
  /\bHPE\b/,
  /\bEndon\b/,
  /7896/,
];

const failures = [];
for (const entry of readdirSync(dist, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile()) continue;
  const file = join(entry.parentPath, entry.name);
  const content = readFileSync(file, 'latin1');
  for (const pattern of banned) {
    if (pattern.test(content)) failures.push(`${file}: matches ${pattern}`);
  }
  if (!file.endsWith('.html')) continue;
  for (const [, href] of content.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = join(dist, href.endsWith('/') ? href + 'index.html' : href);
    if (!existsSync(target)) failures.push(`${file}: broken link ${href}`);
  }
}

if (failures.length) {
  console.error('check-dist: failed\n' + failures.join('\n'));
  process.exit(1);
}
console.log('check-dist: ok');
