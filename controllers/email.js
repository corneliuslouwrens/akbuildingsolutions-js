var mandrill = require('mandrill-api/mandrill'),
    mandrill_client = new mandrill.Mandrill('dRwlqPntlPQqS3QQTydM1Q'),
    logger = require('../logger');

exports.contact = function(req, res) {
  // contact request email
  var request_template = 'contact_request';

  var request_message = {
    'subject': 'Contact Request',
    'from_email': 'contact@akbuildingsolutions.com',
    'from_name': 'AK Building Solutions Ltd',
    'to': [{
      'email': 'contact@akbuildingsolutions.com',
      'name': 'AK Building Solutions Ltd',
      'type': 'to'
    }],
    'headers': {
      'Reply-To': 'contact@akbuildingsolutions.com'
    },
    'track_opens': true,
    'inline_css': true,
    'global_merge_vars': [{
      'name': 'NAME',
      'content': 'Unknown'
    }, {
      'name': 'EMAIL',
      'content': 'Unknown'
    }, {
      'name': 'TELEPHONE',
      'content': 'Unknown'
    }, {
      'name': 'ENQUIRY',
      'content': 'Unknown'
    }],
    'merge_vars': [{
      'rcpt': 'contact@akbuildingsolutions.com',
      'vars': [{
        'name': 'NAME',
        'content': req.body.name
      }, {
        'name': 'EMAIL',
        'content': req.body.email
      }, {
        'name': 'TELEPHONE',
        'content': req.body.telephone
      }, {
        'name': 'ENQUIRY',
        'content': req.body.text
      }],
    }],
    'tags': ['contact_request']
  }

  mandrill_client.messages.sendTemplate({'template_name': request_template, 'template_content': [], 'message': request_message }, function(result) {
    logger.info(result);
    res.json(200);
  }, function(e) {
    logger.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    res.json(500);
  });

  // contact reply email
  var request_reply_template = 'contact_request_reply';

  var reply_message = {
    'subject': 'Thank you for your email',
    'from_email': 'contact@akbuildingsolutions.com',
    'from_name': 'AK Building Solutions Ltd',
    'to': [{
      'email': req.body.email,
      'name': req.body.name,
      'type': 'to'
    }],
    'headers': {
      'Reply-To': 'contact@akbuildingsolutions.com'
    },
    'track_opens': true,
    'inline_css': true,
    'global_merge_vars': [{
      'name': 'NAME',
      'content': 'there'
    }],
    'merge_vars': [{
      'rcpt': req.body.email,
      'vars': [{
        'name': 'NAME',
        'content': req.body.name
      }],
    }],
    'tags': ['contact_request']
  }

  mandrill_client.messages.sendTemplate({'template_name': request_reply_template, 'template_content': [], 'message': reply_message }, function(result) {
    logger.info(result);
    res.json(200);
  }, function(e) {
    logger.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    res.json(500);
  });

};
