// Default Params
function registerUser(user = "Huy") {
  //   Old way - before using `=`
  if (!user) {
    user = "Huy";
  }

  return user + " Đẹp trai";
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 8,
  name: "Phạm Huy",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Sara",
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);