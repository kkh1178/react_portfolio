// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  console.log("Image selected by the user", req.body)

  // Getting the rover selection from the marsrover page
  const { name } = JSON.parse(req.body);


  // Check for a POST state ment and then query the NASA API
  if (req.method === 'POST') {

    let num = Math.floor(Math.random() * (100 + 1))
    console.log(num)

    // building the URL
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?sol=${num}&page=1&api_key=${process.env.NASA_KEY}`;
    console.log("url", url)


    // function to get the data and return to the mars rover component
    const getData = async () => {
      const response = await fetch(url, {
        method: "GET"
      });

      const data = await response.json()
      console.log(data)
      return data;
    }

    res.status(200).json({ data: await getData() })

  } else {
    res.status(400).json({ error: "Please use POST with required data" })
  }



}
