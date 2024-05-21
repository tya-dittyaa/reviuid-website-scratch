const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = process.env.PORT || 3000; // Set port for server

const prisma = new PrismaClient();

// Replace with the actual function that fetches films from Prisma
async function fetchFilms(req, res) {
  try {
    const films = await prisma.film.findMany({
      take: 8, // Limit to 8 films
      orderBy: { releaseDate: 'desc' }, // Order by recent release
    });

    res.json(films);
  } catch (error) {
    console.error('Error fetching films:', error);
    res.status(500).send('Error fetching films'); // Handle errors
  }
}

app.get('/films', fetchFilms); // Define API endpoint for fetching films

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
