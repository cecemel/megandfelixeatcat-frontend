import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('food-establishments', function() {
      this.route('new');
      this.route('edit');
    });

    this.route('reviewers', function() {});
  });

  this.route('food-establishments', function() {
    this.route('details', { path: '/:id' });
  });
  this.route('about');
});

export default Router;
