(function () {
    angular.module("ngPlusMinus", [])
        .directive("plusMinus", ['$compile', function ($compile) {
            return {
                restrict: 'AE',
                scope: {
                    config: '=plusMinusConfig',
                    template: '=plusMinusTemplate'
                },
                link: function ($scope, $elem) {
                    $elem.html(
                        $scope.template || '<button type="button" class="btn btn-primary btn-sm">-</button> ' +
                        '<input type="text" class="plusMinus form-control input-sm"> ' +
                        '<button type="button" class="btn btn-primary btn-sm">+</button>'
                    );

                    $compile($elem.contents())($scope);
                    jQuery($elem).find('input').plusMinus($scope.config ? $scope.config : {});
                }
            };
        }]
    );
}).call(this);
