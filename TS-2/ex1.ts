// TODO: Define the interface User with username, email, and optional bio
interface User {
    username:string;
    email:string;
    bio?:string;
};

// TODO: Create a user object using the defined interface. Add all properties
const user1: User = {
    username: 'Seppo',
    email: 'a@b.fi',
    bio: 'Hei, olen Seppi',
};

// TODO: Create another user object using the defined interface. Don't add bio
const user2: User = {
    username: 'Denis',
    email: 'Khalustin@.fi',
};

// Function to display user information
function displayUserInfo(user: User): void {
    // TODO: console log all properties of a user separately. Example: console.log(user.email)
    console.log(user.username);
    console.log(user.email);
    if (user.bio) {
        console.log(user.bio);
    }
  }
  
  // Display user information
  displayUserInfo(user1);
  displayUserInfo(user2);