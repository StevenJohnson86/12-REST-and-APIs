'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: githubToken
      }
    }).then(
      data => {
        data.map(repo => {
          return {
            title: data.name,
            description: data.description,
            language: data.language,
            dateCreated: data.created_at,
            lastUpdated: data.updated_at,
            watchers: data.watchers,
            watchersCount: data.watchers_count
          }
        })
      },
      err => {
        console.error('Status code:', err.status);
      })
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
