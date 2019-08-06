const axios = require('axios');
const fs = require('fs');
const ora = require('ora')

const spinner = ora('').start()

function importImage(image, id) {
  //画像パスを正規表現で検索
  let imgpath = image.replace(/\!\[text\]\((.*\.(png|jpg|jpeg))\)/, '$1');
  let imgurl = `http://localhost:1337`+imgpath;

  //画像保存
  axios({
    method: "get",
    url: imgurl,
    responseType: "stream"
  }).then(function(response) {
    response.data.pipe(fs.createWriteStream(`./sample${id}.png`));
    spinner.succeed(`success write file tests${id}.md`)
  });
}

//mdファイル生成
axios.get('http://localhost:1337/tests').then(response => {
  console.log(response.data);
  for(let i=0; i<response.data.length; i++){
    let data = response.data[i];
    let strapi = data.strapi;

    //strapi以下のtextをmdfileに書き込む
    fs.writeFile(`tests${data.id}.md`, strapi, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      let result = strapi.match(/\!\[text\]\(.*\.(png|jpg|jpeg)\)/g);
      if(result != null && result.length > 0) {
        for (let j = 0; j < result.length; j++)
        {
          importImage(result[j], data.id)
        }
      } else {
        spinner.fail(`image error @tests${data.id}.md`)
      }
    });
  }
});

