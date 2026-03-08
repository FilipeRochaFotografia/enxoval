const https = require('https');

const urls = [
  'https://ibb.co/5WdZ7xBc',
  'https://ibb.co/fdC7PVX8',
  'https://ibb.co/qYBXmW6h',
  'https://ibb.co/B24jfQT1',
  'https://ibb.co/8DykLvcb',
  'https://ibb.co/GQxKSTj9',
  'https://ibb.co/N2FG5drj',
  'https://ibb.co/3mhpKcTx',
  'https://ibb.co/218hm0G5',
  'https://ibb.co/SXzqRHnV',
  'https://ibb.co/gZdRD6jK',
  'https://ibb.co/yCQkcZr',
  'https://ibb.co/7JDfVMgJ',
  'https://ibb.co/xqGhN2C7'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<link rel="image_src" href="(.*?)"/);
        if (match) {
          resolve(match[1]);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const url of urls) {
    const directUrl = await fetchUrl(url);
    console.log(directUrl);
  }
}

run();
