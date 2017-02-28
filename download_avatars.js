var request = require('request');
var fs = require('fs');

var GITHUB_USER = "anthonylgrant";
var GITHUB_TOKEN = "4155c0cf39d11eb20ab1b3bd4b884aca927e4f49";
var repoOwner = "jquery";
var repoName = "jquery";
var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  },
  json: true
};
var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  },
  json: true
};
// var repoUser = process.argv[2];
// var repoName = process.argv[3];

function getRepoContributors(cb) {

  // if (!repoName || !repoUser) {
  //   console.error("Please provide a valid Github Username and Repo");
  //   return;
  // }

  request(options, (err, response, body) => {
    if (err) {
      return cb(err);
    };
    console.log('Response Status Code:', response.statusCode);
    console.log("Response Status Message: ", response.statusMessage);
    console.log("Response Content Type: ", response.headers['content-type']);
    cb(null, body); // allows to pass body without needing to parse as JSOON -- provides array with objects
    // if response.body was callbacked, then JSON parse would be needed
  })
};

function downloadImageByUrl(url, filePath) {
  console.log("URL:", url);
  request.get(url, (err, response, body) => {
    if (err) throw err;
    console.log('Response Status Code:', response.statusCode);
  })
  .on('response', (response) => {
    console.log('Response Status Code:', response.statusCode);
    console.log("Response Status Message: ", response.statusMessage);
    console.log("Response Content Type: ", response.headers['content-type']);
    console.log("Downloading image ...");
    console.log("Download complete.");
  })
  .pipe(fs.createWriteStream(`./avatar-photos/${filePath}.jpg`));
}

getRepoContributors((err, result) => {
  if (err) throw err;
  result.forEach((user) => {
    console.log(user.avatar_url);
    downloadImageByUrl(user.avatar_url, user.login)
  })
})

// downloadImageByUrl(options, "./avatar_images.");

// getRepoContributors("jquery", "jquery", function(err, result){
//   console.log("Errors:", err);
//   console.log("Result:", result);
//   console.log("YOOYOOYOOYO");
// });

// request(options, function(err, response, body) {
//   if (err) throw err;
//   body.forEach((obj) => {
//     console.log(obj.avatar_url);
//   })
//   console.log('Response Status Code:', response.statusCode);
// });
