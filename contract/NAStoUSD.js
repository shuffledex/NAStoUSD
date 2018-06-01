"use strict"

var NAStoUSD = function() {
};

NAStoUSD.prototype = {
    init: function() {},

    address: function() {
        return Blockchain.transaction.from
    }
};

module.exports = NAStoUSD;