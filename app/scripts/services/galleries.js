'use strict';

app.factory('Galleries', function($resource) {
	return $resource('/scripts/ddnw.json');
});