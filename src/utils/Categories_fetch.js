export const fetchCategories = () =>
	const url = `${process.env.REACT_APP_BACKEND}/categories`;
    fetch(url, { headers: { 'Authorization': 'top-secret' },
                 credentials: 'gp' } )
      .then( (res) => { return(res.text()) })
      .then((data) => data);