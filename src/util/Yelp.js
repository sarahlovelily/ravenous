const apiKey = '7eJx3fJD4B2y-qSSupCLdhnyE6_Q3v8oet-EZUcCRMA9aMDh_NpA8jW6t1M6NAmbvR0oOYOVrCLKK_NcH76jRzEDt_NSJ4pIF47mMsaDd7aSa7Z-1QyUOpgcEWK8WnYx'; // Insert API key here.

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
