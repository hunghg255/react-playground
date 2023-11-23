import fs from 'node:fs';

import FastGlob from 'fast-glob';

const getFiles = async () => {
  const rawFiles = await FastGlob('.templates/**/*');
  console.log(rawFiles);
  const r = rawFiles.reduce((acc, p) => {
    const content = fs.readFileSync(p, 'utf8');
    const path = p.replace('.templates/', '');

    const pathArr = path.split('/');

    if (pathArr.length > 1 && !pathArr.includes('assets')) {
      const dir = pathArr.slice(0, -1).join('/');

      if (!acc[dir]) {
        acc[dir] = {
          directory: {},
        };
      }

      acc[dir].directory[pathArr.at(-1)] = {
        file: {
          contents: content,
        },
      };
    } else if (!pathArr.includes('assets')) {
      acc[path] = {
        file: {
          contents: content,
        },
      };
    }

    if (pathArr.includes('assets')) {
      const content = fs.readFileSync(p, 'utf8');

      acc.src.directory.assets = {
        directory: {
          'react.svg': {
            file: {
              contents: content,
            },
          },
        },
      };
    }

    return acc;
  }, {});

  // return r;
  fs.writeFileSync('src/.templates.json', JSON.stringify(r, null, 2));
};

getFiles();
