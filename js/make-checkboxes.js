const CATEGORIES = 'all movement geo defense soul attack summon interaction lifeblood'.split(' ');

$( ()=> {
	// make checkboxes
	$('#filter-controls').append('Categories: &nbsp; ');
	for(category of CATEGORIES) {
		$('#filter-controls').append(
			'<div class="custom-control custom-checkbox custom-control-inline">' +
				'<input checked type="checkbox" id="category-'+ category + '-checkbox" class="custom-control-input category-checkbox">' +
				'<label class="custom-control-label" for="category-'+ category + '-checkbox">' + capitalize(category) + '</label>' +
			'</div>'
		);
	}

	// set checkbox change listeners
	$('.category-checkbox').change( (evt)=> {
		let currentCategory = evt.target.id.replace('category-','').replace('-checkbox','');
		if(currentCategory=='all') {
			if($('#category-all-checkbox').is(':checked') ) {
				$('.category-checkbox').prop('checked',true);
				// show all
				$('.charm').removeClass('hidden');
			}
			else {
				$('.category-checkbox').prop('checked',false);
				// show all
				$('.charm').addClass('hidden');
			}
		}
		else {
			let isChecked = evt.target.checked;
			// do filter
			for(charm of $('.charm') ) {
				if(CHARMS[$(charm).attr('data-charm')].category.indexOf(currentCategory)!=-1) {
					// show/hide charms in category
					if(isChecked)
						$(charm).removeClass('hidden');
					else
						$(charm).addClass('hidden');					
				} // else ignore charms not in category
			}
		}
	});

});

// TODO: doesn't work for charms with multiple categories