'use strict';

let countryList = require('country-list')();

/*
 * The main reasons for this factory are
 * - clearly state which functions are available
 * - provide a single interface for 3rd party code
 */
addressBook.factory('countries', [function() {

    return {
        getNames: countryList.getNames,
        getCodes: countryList.getCodes,
        getCodeForName: countryList.getCode,
        getNameForCode: countryList.getName
    };
}]);
