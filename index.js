var ripple = require('ripple')()
  , fs     = require('fs')

ripple
  .resource(
      'hbs-template'
    , require('./resources/hbs-template')
    )

module.exports = ripple

function file(name){
  return fs.readFileSync(__dirname + '/resources/'+name, { encoding:'utf8' })
}

