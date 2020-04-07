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
			// do filter
			let isChecked = evt.target.checked;
			for(charm of $('.charm') ) {
				// only change (show/hide) charms in current category
				let charmCategories = CHARMS[$(charm).attr('data-charm')].category;
				if(charmCategories.indexOf(currentCategory)!=-1) {
					let charmOtherCategory = charmCategories.replace(currentCategory,'').split(' ').join('');
					// if charm only has one category
					if(charmOtherCategory=='') {
						// show/hide charms in category
						if(isChecked)
							$(charm).removeClass('hidden');
						else
							$(charm).addClass('hidden');
					}
					// else charm has another category
					else {
						// if either category is checked then show the charm
						if(isChecked || $('#category-'+charmOtherCategory+'-checkbox').is(':checked') ) {
							$(charm).removeClass('hidden');	
						}
						// else hide the charm
						else {
							$(charm).addClass('hidden');
						}
					}
				}
				// else ignore charms not in category
			}
		}
	});
});
