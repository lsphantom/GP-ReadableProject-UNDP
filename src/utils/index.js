//Backend URL
const url = `${process.env.REACT_APP_BACKEND}`;

//Fetch all categories
export const fetchCategories = () =>
  fetch(`${url}/categories`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .then(data => data.categories)
    .catch(err => { console.log('Categoryies request failed', err); })

//Fetch all posts
export const fetchPosts = () =>
  fetch(`${url}/posts`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .catch(err => { console.log('Posts request failed', err); })
