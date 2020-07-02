import axios from "axios";

export const fetchQuotes = (topic) => {
  return axios
    .get(`https://a-m-o-d.herokuapp.com/api/${topic}`)
    .then(({ data }) => {
      return data[Math.floor(Math.random() * data.length)];
    });
};
