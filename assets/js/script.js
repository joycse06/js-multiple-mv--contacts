var List = function($scope){

	$scope.contacts = [
		{name: 'Shishir', cell: '0171711111'},
		{name: 'Joy', cell:'0171711133'},
		{name:'Hasan',cell:'0171734111'},
		{name:'Bakku',cell:'0181711111'},
		{name:'Halka',cell:'0191711111'}
	];

	$scope.add = function(){
		$scope.contacts.push({
			name: $scope.new_name,
			cell: $scope.new_cell
		});

		$scope.new_name = '';
		$scope.new_cell  = ''
	}

	$scope.remove = function(index){
		$scope.contacts.splice(index,1);
	}

	$scope.edit   = function(index){
		$scope.new_name  = $scope.contacts[index].name;	
		$scope.new_cell  = $scope.contacts[index].cell;	
	}
};

angular.module('contacts',[])
		.config(function($routeProvider){
			$routeProvider
			.when('/',{
				templateUrl : 'list.html'
			})
			.when('/contact/:index',{
                 templateUrl: 'edit.html',
                 controller: 'Edit'   
			})
			.when('/delete/:index',{
                 templateUrl: 'edit.html',
                 controller: 'Delete'   
            })
            .when('/add',{
                 templateUrl: 'edit.html',
                 controller: 'Add'   
			});
		})
		.controller('Contacts',function($scope){
			$scope.contacts = [
				{name: 'Shishir', cell: '0171711111'},
				{name: 'Joy', cell:'0171711133'},
				{name:'Hasan',cell:'0171734111'},
				{name:'Bakku',cell:'0181711111'},
				{name:'Halka',cell:'0191711111'}
			];				
		})
        .controller('Edit',function($scope,$routeParams){
            $scope.contact = $scope.contacts[$routeParams.index - 1];
            $scope.index   = $routeParams.index - 1;
        })
        .controller('Add',function($scope,$routeParams){
            var length = $scope.contacts.push({
                name:'New Contact',
                cell: ''
            });
            $scope.contact = $scope.contacts[length - 1];
            $scope.index   = length - 1;
        })
        .controller('Delete',function($scope,$routeParams,$location){
            $scope.contacts.splice($routeParams.index - 1,1);
            $location.path('/').replace();
        })
        ;	

