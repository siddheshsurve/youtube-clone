import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "c578279348mshcb3e68300f87f63p1efe35jsn04a9f3ee8184",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
