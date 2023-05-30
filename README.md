# Infoverse AI

## Description

This project provides a graphical interface to visualize and interact the vast network of information online. 

### Problem

The main challenge Infoverse AI aims to solve is that of viewing and exploring information from a high-level. Most information is presented in a linear written form, but this linear representation of information fails to show the connections within the text. If a reader wants to see these connections, they must create a mental map or create a physical map of ideas themselves.

### Solution

Infoverse AI automates the process of visualizing connections within information. With a visual and interactive network of information, a person can explore, at a high-level, topics of interest rather than only achieving this by skimming articles to find the main ideas and how they relate.

## Data Source

The data source for this project is Wikidata. It is a structured graph database. The Wikidata knowledge base is the central storage for structured data that all Wikimedia Foundation projects (such as Wikipedia.org) utilize. Infoverse AI fetches the data through the SPARQL endpoint: query.wikidata.org.

## Technologies
### Languages
- TypeScript -> https://www.typescriptlang.org/
- JavaScript -> https://www.javascript.com/
- HTML -> https://www.w3schools.com/html/
- CSS -> https://www.w3schools.com/css/

### Graph Libraries
- VisNetwork -> https://visjs.github.io/vis-network/
- Working on incorporating D3 -> https://d3js.org/

### Frontend
- React -> https://reactjs.org/
- Vite -> https://vitejs.dev/

### Backend
- Data: Wikidata SPARQL endpoint -> https://query.wikidata.org/
- Working on implemtening backend with:
  - Node.js -> https://nodejs.org/en/
  - Express -> https://expressjs.com/
  - Neo4j -> https://neo4j.com/
  - GraphQL -> https://graphql.org/


## Running the Project Locally
- Clone the repository
- Navigate to the client directory
  - `cd client`
- Install dependencies
  - `npm install`
- Run the development server
    - `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.