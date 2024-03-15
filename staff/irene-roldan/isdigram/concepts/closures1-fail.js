function ColdWallet (){
    this._password = ''
    this._bitcoins = 0
}

ColdWallet.prototype.changePassword = function(currentPassword, newPassword){
    if(typeof currentPassword !== 'string') throw new TypeError('currentPassword is not a string')
    if(typeof newPassword !== 'string') throw new TypeError('newPassword is not a string')

    if(currentPassword !== this._password) throw new Error('wrong password')

    this._password = newPassword
}

ColdWallet.prototype.getBitcoins = function(password){
    if(typeof password !== 'string') throw new TypeError('password is not a string')
    if(password !== this._password) throw new Error('wrong password')

    return this._bitcoins
}

ColdWallet.prototype.addBitcoins = function(bitcoins){
    if(typeof bitcoins !== 'number') throw new Error('password is not a number')
    if(bitcoins < 0) throw new Error('bitcoins is a negative number')

    this._bitcoins = bitcoins + this._bitcoins
}

var willy = new ColdWallet
willy.changePassword('', '12345')

willy.addBitcoins(10)

willy.getBitcoins('12345')

//HACKEO

var hackedBitcoins = willy._bitcoins
willy.bitcoins = 0