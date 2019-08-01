const axios = require('axios');
const fs = require('fs');

axios.get('http://localhost:1337/tests').then(response => {
  console.log(response.data);
  for(let i=0; i<response.data.length; i++){
    let data = response.data[i];

    let strapi = data.strapi;

    fs.writeFile(`tests${data.id}.md`, strapi, (err) => {
      let result = strapi.match(/\!\[text\]\(.*\.(png|jpg|jpeg)\)/g);
      if(result != null) {
        console.log("success");
        let res = result[0];
        let imgpath = res.replace(/\!\[text\]\((.*\.(png|jpg|jpeg))\)/, '$1');
        console.log(imgpath);
      } else {
        console.log("error");
      }

      if (err) throw err;
      console.log('The file has been saved!');
    });


  }
});

