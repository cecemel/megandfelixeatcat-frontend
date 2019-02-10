/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  //see https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data/issues/52
  process.env.GIT_DISCOVERY_ACROSS_FILESYSTEM=1;

  let ENV = {
    build: {
      environment: 'production'
    },
    'ssh-index': {
      username: 'cecemel',
      host: 'deploy.ruizdearcaute.com',
      remoteDir: '/home/cecemel/data/megandfelixeatcat/dev-megandfelixeatcat-app/megandfelixeatcat-frontend',
      agent: process.env.SSH_AUTH_SOCK,
      port: 22,
      allowOverwrite: true
    },
    'rsync': {
      dest: '/home/cecemel/data/megandfelixeatcat/dev-megandfelixeatcat-app/megandfelixeatcat-frontend',
      host: 'cecemel@deploy.ruizdearcaute.com',
      port: 22,
      delete: false,
      privateKey: process.env.SSH_AUTH_SOCK,
      arg:['--verbose']
    }
  };

  // if (deployTarget === 'production') {
  //   ENV.build.environment = 'production';
  //   ENV['ssh-index'] = {
  //     username: 'cecemel',
  //     host: 'deploy.ruizdearcaute.com',
  //     remoteDir: '/home/cecemel/data/megandfelixeatcat/dev-megandfelixeatcat-app/megandfelixeatcat-frontend',
  //     agent: process.env.SSH_AUTH_SOCK,
  //     port: 22,
  //     allowOverwrite: true
  //   };

  //   ENV['rsync'] = {
  //     dest: '/home/cecemel/data/megandfelixeatcat/dev-megandfelixeatcat-app/megandfelixeatcat-frontend',
  //     username: 'cecemel',
  //     host: 'deploy.ruizdearcaute.com',
  //     port: 22,
  //     delete: false,
  //     privateKey: process.env.SSH_AUTH_SOCK,
  //     arg:['--verbose']
  //   };
  // }

  return ENV;
};
