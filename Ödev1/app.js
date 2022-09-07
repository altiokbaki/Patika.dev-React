import axios from "axios";

export default function getData(number) {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + number
    );
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + number
    );
    resolve({ user, post });
  });
}
const x = 3; //Can be modified by getting input from user.
if (x >= 1) {
  getData(x).then((data) => {
    console.log("User" + x + " info and posts are as follows...\n", data);
  });
} else console.log("Wrong input.");
