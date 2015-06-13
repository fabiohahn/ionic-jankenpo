angular.module("services", ["ngResource"]).factory("Jogada", function($resource){
	return $resource("http://192.168.43.166:1110/api/analisarJogada");
});