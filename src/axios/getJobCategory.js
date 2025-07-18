import axios from "axios";

axios
  .get(process.env.URL_LINK)
  .then((response) => {
    console.log(response.data); // array of posts
  })
  .catch((error) => {
    console.error(error);
  });
