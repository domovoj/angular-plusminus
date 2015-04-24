(function () {
    angular.module("ngPlusMinus", [])
        .directive("plusMinus", ['$compile', function ($compile) {
            return {
                restrict: 'AE',
                scope: {
                    plusMinusConfig: '='
                },
                link: function ($scope, $elem) {
                    var config = $scope.plusMinusConfig ? $scope.plusMinusConfig : {};

                    $elem.html(
                        config.template || '<button type="button" class="btn btn-primary btn-sm">-</button> ' +
                        '<input type="text" class="plusMinus form-control input-sm"> ' +
                        '<button type="button" class="btn btn-primary btn-sm">+</button>'
                    );

                    $compile($elem.contents())($scope);
                    jQuery($elem).find('input').plusMinus(config);
                }
            };
        }]
    );
}).call(this);
