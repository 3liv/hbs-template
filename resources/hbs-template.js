module.exports = function(data){ 
  var root     = this
    , host     = this.host
    , source   = host.hasAttribute('template') 
                 ?ripple(host.getAttribute('template')) :host.innerHTML
    , template = Handlebars.compile(source)
    , html     = template(data)

  root.innerHTML = html 
} 
