var app    = require('express')()
  , fs     = require('fs')
  , static = require('serve-static')(__dirname+'/../node_modules/')
  , server = require('http').createServer(app)
  , ripple = require('ripple')(server, app)
  , hbs    = require('../')
  
ripple
  .use(hbs)
  .resource('test-data', require('./data.json'))
  .resource('test.hbs', template('test'))

server.listen(4000)

app
  .use(static)
  .get('/', function(req, res){
    res.render(__dirname+'/views/index.jade')
  })

function template(name){
  return fs.readFileSync(__dirname + '/templates/'+name+'.hbs', { encoding:'utf8' })
}

