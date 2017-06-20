const express = require('express');
const loremIpsum = require("lorem-ipsum");
const app = express();
const port = 3000;

app.use("/", express.static("./website"));

app.get("/lorem", function(req, res) {
  const output = loremIpsum({
      count: 3                        // Number of words, sentences, or paragraphs to generate.
    , units: 'paragraphs'             // Generate words, sentences, or paragraphs. 
    , sentenceLowerBound: 5           // Minimum words per sentence. 
    , sentenceUpperBound: 15          // Maximum words per sentence. 
    , paragraphLowerBound: 3          // Minimum sentences per paragraph. 
    , paragraphUpperBound: 7          // Maximum sentences per paragraph. 
    , format: 'html'                  // Plain text or html
  });
  res.send(output);
});

app.get('/lorem/:paragraphCount', function(req, res) {
  const output1 = loremIpsum({
    count: req.params.paragraphCount  // Number of words, sentences, or paragraphs to generate.
    , units: 'paragraphs'             // Generate words, sentences, or paragraphs. 
    , sentenceLowerBound: 5           // Minimum words per sentence. 
    , sentenceUpperBound: 15          // Maximum words per sentence. 
    , paragraphLowerBound: 3          // Minimum sentences per paragraph. 
    , paragraphUpperBound: 7          // Maximum sentences per paragraph. 
    , format: 'html'                  // Plain text or html
  });             
  res.send(output1);
});

app.listen(port, function() {
  console.log('Random text server running on port', port);
})