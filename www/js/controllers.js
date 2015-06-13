angular.module("controllers", []).controller("JankenpoCtrl", function(Jogada, $scope, $http){
	var socket = io('http://192.168.43.166:3000');
	socket.connect();
	
	$scope.entrar = function(nome){
		socket.emit("entrar", nome);
	};

	$scope.atualizarJogadores = function(){
		$scope.$digest;
	};

	$scope.jogar = function(jogada, token){
		socket.emit("jogada", { jogada: jogada, tokenDoAdversario: token });
	};

	socket.on("jogadores", function(jogadores){
		$scope.jogadores = jogadores;
	});

	socket.on("jogadaVencedora", function(jogadaVencedora){
		alert(jogadaVencedora.jogadaVencedora)
	});
});