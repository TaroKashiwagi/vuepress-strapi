const axios = require('axios');
const fs = require('fs');

axios.get('http://localhost:1337/tests').then(response => {
  console.log(response.data);
  for(let i=0; i<response.data.length; i++){
    let data = response.data[i];
    let strapi = data.strapi;

    //strapi以下のtextをmdfileに書き込む
    fs.writeFile(`tests${data.id}.md`, strapi, (err) => {
      //画像パスを正規表現で検索
      let result = strapi.match(/\!\[text\]\(.*\.(png|jpg|jpeg)\)/g);
      if(result != null) {
        let res = result[0];
        let imgpath = res.replace(/\!\[text\]\((.*\.(png|jpg|jpeg))\)/, '$1');
        let imgurl = `http://localhost:1337`+imgpath;

        //画像保存
        axios({
          method: "get",
          url: imgurl,
          responseType: "stream"
        }).then(function(response) {
          response.data.pipe(fs.createWriteStream(`./sample${data.id}.png`));
        });
        console.log("success");
      } else {
        console.log("error");
      }

      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
});

