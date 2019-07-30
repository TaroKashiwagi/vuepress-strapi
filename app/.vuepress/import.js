const axios = require('axios');
const fs = require('fs');

axios.get('http://localhost:1337/tests').then(response => {
  console.log(response.data);
  fs.writeFile('tests.md', response.data[0].strapi, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});