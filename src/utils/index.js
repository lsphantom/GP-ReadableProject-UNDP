//Backend URL
const url = `${process.env.REACT_APP_BACKEND}`;

//Fetch categories
export const fetchCategories = () =>
  fetch(`${url}/categories`, { headers: { 'Authorization': 'top-secret' },
                 credentials: 'gp' })
    .then(data => data.json())
    .then(data => data.categories)
    .catch(res => console.log(res))

//Fetch posts
export const fetchPosts = () =>
  fetch(`${url}/posts`, { headers: { 'Authorization': 'top-secret' },
                 credentials: 'gp' })
    .then(data => data.json())