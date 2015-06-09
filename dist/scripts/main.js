var user = new UserModel();
$(document).ready(function() {
	var App = Backbone.Router.extend({
		routes: {
			'': 'profile',
			'edit': 'edit',
			'home': 'profile'
		},
		profile: function() {
			$('.page').hide();
			$('#profile').show();
		},
		edit: function() {
			$('.page').hide();
			$('#edit').show();
		}
	});

var app = new App();
Backbone.history.start();

	$('.form-horizontal').on('submit', function(e) {
		console.log('user updated');
		e.preventDefault();
		
		user.set({
			name: $('#name').val(),
			email: $('#inputEmail3').val(),
			role: $('#role').val(),
			password: $('#inputPassword3').val()
		});
	});

	user.on('change', function() {
		$('.name').html(user.get('name'));
		$('.profile-usertitle-name').html(user.get('name'));
		$('.profile-usertitle-job').html(user.get('role'));

	})
});