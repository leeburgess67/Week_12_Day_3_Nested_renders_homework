const PubSub = require('../helpers/pub_sub.js');

const ContinentView = function (container, continent) {
  this.continentsContainer = container;
  this.continent = continent;
};

//make a div container for the continent with the class name 'continent'
ContinentView.prototype.render = function () {
  const continentContainer = document.createElement('div');
  continentContainer.classList.add('continent');

  //Create the continent header using method in line 23
  const name = this.createContinentHeading();

  //Append the header to the continent cintainer div
  continentContainer.appendChild(name);

  //Create an unordered list using method in line 37
  const countriesList = this.createCountriesList()

  //Append the list to the container
  continentContainer.appendChild(countriesList);

  // Append the container containing the list to the main continents container
  this.continentsContainer.appendChild(continentContainer);
};

//Function to create an H2 header element
ContinentView.prototype.createContinentHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('continent-name');

  // Create header if there is a name, if not use header 'Misc'
  if (!this.continent.name) {
    name.textContent = "Misc";
  } else {
    name.textContent = this.continent.name;
  }
  return name;
};

// Create an unordered list element for countries then populate
ContinentView.prototype.createCountriesList = function () {
  const countriesList = document.createElement('ul');
  countriesList.classList.add('countries');
  this.populateList(countriesList);
  return countriesList;
};

//Create a li element for each country then append to the country list
ContinentView.prototype.populateList = function (list) {
  this.continent.countries.forEach((country) => {
    const countryListItem = document.createElement('li');
    countryListItem.textContent = country.name;
    list.appendChild(countryListItem);
  });
};

module.exports = ContinentView;
