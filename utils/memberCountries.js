export const getAmericansCountries = (showCountries) =>
  showCountries.filter(
    (country) =>
      country.title === "Argentina" ||
      country.title === "Bolivia" ||
      country.title === "Brazil" ||
      country.title === "Chile" ||
      country.title === "Colombia" ||
      country.title === "Costa Rica" ||
      country.title === "Ecuador" ||
      country.title === "Guatemala" ||
      country.title === "Jamaica" ||
      country.title === "Mexico" ||
      country.title === "Peru" ||
      country.title === "Panama" ||
      country.title === "Paraguay"
  );

export const getAfricanCountries = (showCountries) =>
  showCountries.filter(
    (country) =>
      country.title === "Algeria" ||
      country.title === "Egypt" ||
      country.title === "Ghana" ||
      country.title === "Kenya" ||
      country.title === "Namibia" ||
      country.title === "South Africa" ||
      country.title === "Tanzania" ||
      country.title === "Tunisia"
  );

export const getEuropeanCountries = (showCountries) =>
  showCountries.filter(
    (country) =>
      country.title === "Albania" ||
      country.title === "Austria" ||
      country.title === "Belarus" ||
      country.title === "Belgium" ||
      country.title === "Bosnia and Herzegovina" ||
      country.title === "Bulgaria" ||
      country.title === "Croatia" ||
      country.title === "Czech Republic" ||
      country.title === "Estonia" ||
      country.title === "France" ||
      country.title === "Greece" ||
      country.title === "Hungary" ||
      country.title === "Iceland" ||
      country.title === "Italy" ||
      country.title === "Latvia" ||
      country.title === "Lithuania" ||
      country.title === "Malta" ||
      country.title === "Netherlands" ||
      country.title === "North Macedonia" ||
      country.title === "Poland" ||
      country.title === "Portugal" ||
      country.title === "Romania" ||
      country.title === "Serbia" ||
      country.title === "Slovakia" ||
      country.title === "Slovenia" ||
      country.title === "Spain" ||
      country.title === "Ukraine" ||
      country.title === "United Kingdom"
  );

export const getAsianCountries = (showCountries) =>
  showCountries.filter(
    (country) =>
      country.title === "Armenia" ||
      country.title === "Australia" ||
      country.title === "Azerbaijan" ||
      country.title === "Bahrain" ||
      country.title === "Georgia" ||
      country.title === "India" ||
      country.title === "Indonesia" ||
      country.title === "Iran" ||
      country.title === "Iraq" ||
      country.title === "Jordan" ||
      country.title === "Kazakhstan" ||
      country.title === "Kyrgyzstan" ||
      country.title === "Malaysia" ||
      country.title === "Moldova" ||
      country.title === "Nepal" ||
      country.title === "Pakistan" ||
      country.title === "Palestinian territories" ||
      country.title === "Philippines" ||
      country.title === "Russia" ||
      country.title === "Saudi Arabia" ||
      country.title === "South Korea" ||
      country.title === "Thailand" ||
      country.title === "Turkey" ||
      country.title === "United Arab Emirates" ||
      country.title === "Uzbekistan" ||
      country.title === "Vietnam"
  );
