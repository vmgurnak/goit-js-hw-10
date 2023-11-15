export { createMarkup, createMarkupInfoCat };

// Markup function for  select.breed-select
function createMarkup(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

// // Markup function for div.cat-info
// function createMarkupInfoCat(arr) {
//    const { name, description, temperament } = arr[0].breeds[0];
//    const {url} = arr[0]
//   return arr
//     .map(
//       ({
//         url,
//         breeds,
//       }) => `<img src="${url}" alt="${breeds[0].name}" width = "400">
//     <h2>${breeds[0].name}</h2>
//     <p>${breeds[0].description}</p>
//     <p>Temperament:<span>${breeds[0].temperament}</span></p>`
//     )
//     .join('');
// }

// Markup function for div.cat-info
function createMarkupInfoCat(arr) {
  const { name, description, temperament } = arr[0].breeds[0];
  const { url } = arr[0];
  return arr
    .map(
      item => `<img src="${url}" alt="${name}" width = "400">
    <h2>${name}</h2>
    <p>${description}</p>
    <p>Temperament:<span>${temperament}</span></p>`
    )
    .join('');
}