A Next.js application that allows users to explore Pokemon, view details, and search for specific Pokemon. This project uses PokeAPI to fetch Pokemon data dynamically.

Features :
   
1.	List of Pokemon (first 50)
2.	Search for Pokemon by name
3.	Detailed Pokemon Pages (Abilities, Types, stats, Moves)
4.	Responsive design With Tailwind CSS
5.	Static Generation for better performance

Prerequisites

Ensure the following installed
1.	Node.js(v18.18.0 or later)
2.	npm (or yarn)
3.	Git (Optional, if cloning the repo)

Installation

1.	Clone the repository (if applicable):
2.	git clone https://github.com/ashisssh/Pokemon---Explorer.git   //You can also download the zip file.
3.	cd pokemon-explorer
 
Install dependencies:  
   Open Command Prompt for Windows or Terminal for Mac. You can also use code editor but it may require permissions.
  
npm install
or
yarn install

Setup  Environment Variables :
1.	Create a .env.local file in the project root and add :
2.	NEXT_PUBLIC_POKEAPI_URL=https://pokeapi.co/api/v2
3.	Save the file

Running the App

To start the development server:

Open command prompt or terminal and then run :

npm run dev
or
yarn dev

Then, open http://localhost:3000 in your browser.     

It may take some time to load project initially but once loaded it will sun smoothly.

Technologies Used

1.	Next.js (React Framework)

2.	TypeScript (Strong typing)

3.	Tailwind CSS (Styling)

4.	Axios (HTTP requests)

5.	PokeAPI (Data source)

