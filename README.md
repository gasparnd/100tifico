# 100tifico

100tifico is a JavaScript Vanilla Application shows Rick & Morty Characters Information. See the [DEMO](https://gasparnd.github.io/100tifico/ "DEMO")
## Installation
1. Clone this Repo 

2. Go to project folder

3. Install dependencies `npm install`

4. Run local server `npm start`

## Deploy
His Deploy is in [Travis](https://travis-ci.org "Travis"). When you installed the project, you can use `npm run build` for compile to production 
## API
Its used the [Rick & Morty Api](https://rickandmortyapi.com "Rick & Morty Api")

    const API = 'https://rickandmortyapi.com/api/character/'
    const getData = async (id) => {
    	const apiURL = id ? `${API}${id}` : API
    	try {
    		const response = await fetch(apiURL)
    		const data = await response.json()
    		return data
    	} catch (error) {
    		console.log('Fetch error', error)
    	}
    }
    
    export default getData
	
## License
The MIT License ([MIT](https://es.wikipedia.org/wiki/Licencia_MIT "MIT"))
