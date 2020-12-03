'use strict';
const aws = require('aws-sdk');
const rekognition = new aws.Rekognition();
const translator = new aws.Translate();
const { get } = require('axios');

const translate = word => {
  const params = {
    Text: word,
    SourceLanguageCode: 'en',
    TargetLanguageCode: 'pt'
  };

  return translator.translateText(params).promise();
}

module.exports.analyze = async event => {
  const { imageUrl } = event.queryStringParameters;
  const response = await get(imageUrl, { responseType: 'arraybuffer'});
  const buffer = Buffer.from(response.data, 'base64');
  
  const params = {
    Image: {
      Bytes: buffer
    },
    MaxLabels: 10,
    MinConfidence: 80
   };
   
   let text = '';
   
   try {
      const labels = await rekognition.detectLabels(params).promise();
      for (let labelData of labels.Labels) {
        const translated = (await translate(labelData.Name)).TranslatedText;
        text = `${text} \n ${labelData.Confidence.toFixed(2)}% de chance de ser ${translated}`;
      }
      
   } catch (err) {
      console.log(err, err.stack);
   }   

  return {
    statusCode: 200,
    body: text,
  };
};
