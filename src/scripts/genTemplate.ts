import fs from 'node:fs';

import FastGlob from 'fast-glob';

import _ from 'lodash';
import path from 'node:path';

const set = _.set;
const get = _.get;

export const getFiles = async () => {
  const sourceDir = path.resolve(process.cwd(), '.templates/react-vite');

  const rawFiles = (await FastGlob(`${sourceDir}/**/*`)).map((p) => p.replace(`${sourceDir}/`, ''));

  const formatPathDir = (path: any) => {
    const b = path.split('/');
    b.pop();

    return b.reduce((acc: any, it: any) => {
      if (acc === '') {
        return `${it}.directory`;
      }

      return `${acc}.${it}.directory`;
    }, '');
  };

  const files: any = [];

  const spreadDirectory = (arr: any) => {
    let acc = {};

    for (const i of arr) {
      const contents = fs.readFileSync(`${sourceDir}/${i}`, 'utf8');

      files.push({
        contents,
        filePath: i,
      });

      const b = i.split('/');

      if (b.length === 1 && i.includes('.')) {
        acc = {
          ...acc,
          [i]: {
            file: {
              contents,
            },
            filePath: i,
          },
        };
        continue;
      }

      const pathDir = formatPathDir(i);

      if (get(acc, pathDir)) {
        const obj = get(acc, pathDir);
        set(acc, pathDir, {
          ...obj,
          [b[b.length - 1]]: {
            file: {
              contents,
              filePath: i,
            },
          },
        });
        continue;
      }

      set(acc, pathDir, {
        [b[b.length - 1]]: {
          file: {
            contents,
            filePath: i,
          },
        },
      });
    }

    return acc;
  };

  const tree = spreadDirectory(rawFiles);

  return {
    files,
    tree,
  };
};

getFiles();
