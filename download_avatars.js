var request = require('request');

var GITHUB_USER = "anthonylgrant";
var GITHUB_TOKEN = "4155c0cf39d11eb20ab1b3bd4b884aca927e4f49node";
var repoOwner = "jquery";
var repoName = "jquery";
var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`

console.log(`RequestURL: ${requestURL}`);
console.log('Welcome to the Github Avatar Downloader');

function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors("jquery", "jquery", function(err, result){
  console.log("Errors:", err);
  console.log("Result:", result);
});
