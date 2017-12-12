//Backend URL
const url = `${process.env.REACT_APP_BACKEND}`;

//Fetch categories
export const fetchCategories = () =>
  fetch(`${url}/categories`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .catch(err => { console.log('request failed', err); })

//Fetch posts
export const fetchPosts = () =>
  fetch(`${url}/posts`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .catch(err => { console.log('request failed', err); })
