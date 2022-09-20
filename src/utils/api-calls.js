const secureKey = process.env.REACT_APP_NY_TIMES_API_KEY;
const primaryUrl = 'https://api.nytimes.com/svc/topstories/v2/';

const fetchNyTimesStories = async section => {
  const response = await fetch(`${primaryUrl}${section}.json?api-key=${secureKey}`);
  if (!response.ok) {
    throw new Error (`Error: ${response.status}: ${response.statusText}`)
  };
  const responseJson = await response.json();
  console.log(response);
  return responseJson
}

export {fetchNyTimesStories};