import fs from 'node:fs';

import FastGlob from 'fast-glob';

import _ from 'lodash';

const set = _.set;
const get = _.get;

const getFiles = async () => {
  const rawFiles = (await FastGlob('.templates/nuxt/**/*')).map((p) =>
    p.replace('.templates/', ''),
  );

  const formatPathDir = (path) => {
    const b = path.split('/');
    b.pop();

    return b.reduce((acc, it) => {
      if (acc === '') {
        return `${it}.directory`;
      }

      return `${acc}.${it}.directory`;
    }, '');
  };

  const spreadDirectory = (arr) => {
    let acc = {};

    for (const i of arr) {
      const contents = fs.readFileSync(`.templates/${i}`, 'utf8');

      const b = i.split('/');

      if (b.length === 1 && i.includes('.')) {
        acc = {
          ...acc,
          [i]: {
            file: {
              contents,
            },
          },
        };
        continue;
      }

      const pathDir = formatPathDir(i, 'contents');

      if (get(acc, pathDir)) {
        const obj = get(acc, pathDir);
        set(acc, pathDir, {
          ...obj,
          [b[b.length - 1]]: {
            file: {
              contents,
            },
          },
        });
        continue;
      }

      set(acc, pathDir, {
        [b[b.length - 1]]: {
          file: {
            contents,
          },
        },
      });
    }

    return acc;
  };

  fs.writeFileSync('src/templates-nuxt.json', JSON.stringify(spreadDirectory(rawFiles), null, 2));
};

getFiles();
