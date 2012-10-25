var fork = require('child_process').fork
,   path = require('path')

module.exports = function() {

    var self   = path.join(__dirname, 'bomb.js')
    ,   one    = fork(self)
    ,   two    = fork(self)
    ,   buckle = fork(self)
    ,   my     = fork(self)
    ,   shoe   = fork(self)
    
    console.log('Five to one baby.')
    console.log('One in five.')
    console.log('Nobody here gets out alive.')
    console.log(process.pid)    
}

if (module === require.main) module.exports()
