if (Meteor.isClient) {
  Session.setDefault('sessionTemplate', 'pageB');
  Session.setDefault('sessionTemplateData', { pageTitle: 'Page B!' });

  Template.layout.helpers({
    userTemplates: function () {
      return [
        { page: 'pageA', pageData: { pageTitle: 'Page A' } },
        { page: 'pageB', pageData: { pageTitle: 'Page B' } },
        { page: 'pageC', pageData: { pageTitle: 'Page C' } }
      ];
    },
    sessionTemplate: function() {
      return Session.get('sessionTemplate');
    },
    sessionTemplateData: function() {
      return Session.get('sessionTemplateData');
    }
  });

  Template.layout.events({
    'click .show-page-a': function () {
      Session.set('sessionTemplate', 'pageA');
      Session.set('sessionTemplateData', { pageTitle: 'Page A!' });
    },
    'click .show-page-b': function () {
      Session.set('sessionTemplate', 'pageB');
      Session.set('sessionTemplateData', { pageTitle: 'Page B!' });
    },
    'click .show-page-c': function () {
      Session.set('sessionTemplate', 'pageC');
      Session.set('sessionTemplateData', { pageTitle: 'Page C!' });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
