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

	elements.forEach(element => {
		rating= parseInt(element.id.replace('star', ''));
		ratings.sum += parseInt(element.value) * rating;
		ratings.count += parseInt(element.value);
	});

	if (ratings.count !== 0) {
		ratings.average = ratings.sum / ratings.count;
	}

	return ratings;
}
document.addEventListener('change', () => {
	const ratings = collect_ratings();
	document.querySelector('#average').value = ratings.average.toFixed(2);
});