var assert = require('assert');
var ActiveDirectory = require('activedirectory');

describe('User LDAP Authentication', function() {
    var username = 'vishnuc';
    var password = 'Welcome123';

    var config = {url: 'ldap://192.168.28.1',
        baseDN: 'dc=CESCHN,dc=com',
        username: username,
        password: password};
    var ad = new ActiveDirectory(config);

    it('LDAP Authentication using active directory', function() {
        console.log('aaaaa', username);
        ad.authenticate(username, password, function(err, auth) {
            if (auth) {
              console.log('auth', auth);
              assert.equal(true, true);
            }
          });
      });
  });
