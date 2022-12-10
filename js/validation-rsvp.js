 $(document).ready(function(){
        $('#submit').click(function(e){
            
            //Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
			var guest = $('#guest').val();
            var attend = $('#attend').val();
			
			$('#name,#email,#guest,#attend').click(function(){
				$(this).removeClass("error_input");
			});
            
         	// Form field validation
            if(name.length == 0){
                var error = true;
                $('#name').addClass("error_input");
            }else{
                $('#name').removeClass("error_input");
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email').addClass("error_input");
            }else{
                $('#email').removeClass("error_input");
            }
			 if(!$('#guest').val()) {
                var error = true;
                $('#guest').addClass("error_input");
            }else{
                $('#guest').removeClass("error_input");
            }
           if(!$('#attend').val()) {
                var error = true;
                $('#attend').addClass("error_input");
            }else{
                $('#attend').removeClass("error_input");
            }
            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                $('#submit').attr({'disabled' : 'true', 'value' : 'Sending...' });
                $.post("#", $("#rsvp_form").serialize(),function(result){
                    $('#mail_success').fadeIn(500);
                    $('#submit').attr('value', 'Send The Message');
                })
            }
        });    
    });