/**
 * @info RatingCalculator not finish yet ;)
 * @info replace() something is still wrong...

 * 
 */
 function collect_ratings() {
	let rating = 0;
	var ratings = {
		count: 0,
		sum: 0,
		average: 0
	};

	const elements = document.querySelectorAll('.rating');

	elements.forEach(function(element) {
		starrating = element.id.replace('star', '');
		rating = parseInt(starrating);
		ratings.sum += (rating * parseInt(element.value));
		ratings.count += parseInt(element.value);
		if (ratings.count !== 0) {
			ratings.average = ratings.sum / ratings.count;
		}
	});
	return ratings;
}
document.addEventListener('change', () => {
	const ratings = collect_ratings();
	document.querySelector('#average').setAttribute('value', ratings.average.toFixed(2));
});