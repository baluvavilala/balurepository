module.exports = {  
  url: "http://10.249.91.29:4504/content/natwest_com/en_uk/responsive-personal/furtherassistance/wniks.html?wcmmode=disabled",
  elements: {
    usernameField: {
      selector: 'input[id=username]'
    },
    passwordField: {
      selector: 'input[id=password]'
    },
    submit: {
      selector: 'button[type=submit]'
    }
  },
  commands: [{
    signInAsAdmin: function() {
      return this.setValue('@usernameField', 'admin')
                 .setValue('@passwordField', 'admin')
                 .click('@submit');
    }
  }]
};