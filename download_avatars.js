var request = require('request');
var fs = require('fs');

var GITHUB_USER = "anthonylgrant";
var GITHUB_TOKEN = "4155c0cf39d11eb20ab1b3bd4b884aca927e4f49";
var repoOwner = "jquery";
var repoName = "jquery";
var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`
var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  },
  json: true
};
console.log(`RequestURL: ${requestURL}`);
console.log('Welcome to the Github Avatar Downloader');

function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors("jquery", "jquery", function(err, result){
  console.log("Errors:", err);
  console.log("Result:", result);
});

request(options, function(err, response, body) {
  if (err) throw err;
  console.log("Body:",body);
  console.log('Response Status Code:', response.statusCode);
});
