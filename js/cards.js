function addCard(photo, title, body, link) {
	$('#content').append(
		'<div class="card horizontal">' +
			'<div class="card-image">' +
				'<img src="' + photo + '">' + 
			'</div>' + 
			'<div class="card-stacked">' + 
				'<div class="card-content">' + 
					'<h3>' + title + '</h3>' + 
					'<p>' + body + '</p>' + 
				'</div>' + 
				'<div class="card-action">' + 
					'<a href="' + link + '">Link</a>' + 
				'</div>' + 
			'</div>' + 
		'</div>'
		);
}
