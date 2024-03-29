var main = angular.module('main', []);


var fake = function(alanConway) {
    var mataHari = Math.floor(Math.random() * 26 + 1);
    var jamesBond = alanConway.length;
    var stanleyKubrick = "";
    for (var jamesBondJr = 0; jamesBondJr < jamesBond; ++jamesBondJr) {
        stanleyKubrick += String.fromCharCode(((alanConway.charCodeAt(jamesBondJr) + mataHari) % 26) + "a".charCodeAt(0));
    }
    return stanleyKubrick;
}

main.controller("mainController", function($scope) {
    $scope.value = Math.random();

    $scope.jonathanPollard = fake("ydkozjtotn");

});

main.component("menu", {
    template: '<nav class="nav">' +
            '<button class="nav--hamburger hamburger hamburger--elastic" type="button">' +
                '<span class="hamburger-box">' +
                    '<span class="hamburger-inner"></span>' +
                '</span>' +
            '</button>' +
            '<div class="nav--full-screen d-flex align-items-center justify-content-center">' +
                '<div class="container">' +
                    '<div class="row">' +
                        '<div class="col-12">' +
                            '<ul class="nav--list">' +
                                '<li class="nav--list-item"><a class="nav--link" href="/">Accueil</a></li>' +
                                '<li class="nav--list-item"><a class="nav--link" href="/chat">Chatter avec d\'autres étudiants</a>' + '</li>' +
                                '<li class="nav--list-item"><a class="nav--link" href="/conseils">Conseils</a>' + '</li>' +
                            '</ul>' +    
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</nav>',
    controller: function MenuController() {}
});



main.component("foot", {
    template:  '<footer class="footer"><div class="container"> <div class="row align-items-center">' +
					'<div class="col">' +
						'<a class="footer--link" href="http://disc.univ-fcomte.fr/"><img class="footer--img" src="http://sciences.univ-fcomte.fr/download/ufr-st/image/laboratoires/femto-st.jpg" alt="DISC"/></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="http://www.univ-fcomte.fr/"><img class="footer--img" src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Universit%C3%A9_de_Franche-Comt%C3%A9_%28logo%29.svg/619px-Universit%C3%A9_de_Franche-Comt%C3%A9_%28logo%29.svg.png" alt="UFC" /></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="http://www.jet1oeil.com/"><img class="footer--img" src="http://www.jet1oeil.com/wp-content/uploads/2011/09/logo.png" alt="jet1oeil" /></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="http://www.smartesting	.com/"><img class="footer--img" src="https://static.wixstatic.com/media/e4c5c8_7d1d7df34bb84d07bd6ff004fffb6eec~mv2.jpg/v1/fill/w_221,h_71,al_c,q_80,usm_0.66_1.00_0.01/logo-smartesting_Sendinblue.webp" alt="smartesting"/></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="https://vixtechnology.com/"><img class="footer--img" src="https://upload.wikimedia.org/wikipedia/en/4/4e/Vix_Technology_logo.png" alt="Vix Technology"></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="http://fug-game.com/"><img class="footer--img" src="http://fug-game.com/wp-content/uploads/2018/09/logo-fug-game-blason.png" alt="fug-games" /></a>' +
					'</div>' +
				'</div>' +
			'</div></div></div>' +
		'</footer>',
    controller: function MenuController() {}

});
