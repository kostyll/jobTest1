function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    crossDomain: false, // obviates need for sameOrigin test
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type)) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

$("#sortNameAscBtn")
	.click(function(){
		$.ajax({
			type: 'POST',
			url: '',
			data: {'action':'sort', 'param':'nameAsc'},
			success: function(mess){
				$('#object-list').replaceWith(mess);
			}
		});
	}
);

$("#sortNameDescBtn")
	.click(function(){
		$.ajax({
			type: 'POST',
			url: '',
			data: {'action':'sort', 'param':'nameDesc'},
			success: function(mess){
				$('#object-list').empty();
				$('#object-list').replaceWith(mess);
			}
		});
	}
);

$("#sortDateAscBtn")
	.click(function(){
		$.ajax({
			type: 'POST',
			url: '',
			data: {'action':'sort', 'param':'dateAsc'},
			success: function(mess){
				$('#object-list').replaceWith(mess);
			}
		});
	}
);

$("#sortDateDescBtn")
	.click(function(){
		$.ajax({
			type: 'POST',
			url: '',
			data: {'action':'sort', 'param':'dateDesc'},
			success: function(mess){
				$('#object-list').replaceWith(mess);
			}
		});
	}
);

$('#filterText')
	.on("input", function(){
		var filter_text = $('#filterText').val();
		//alert(filter_text);
		$.ajax({
			type: 'POST',
			url: '',
			data: {'action':'filter','param':filter_text},
			success: function(mess){
				$('#object-list').replaceWith(mess);
			}
		});
	}
);