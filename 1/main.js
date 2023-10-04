const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true
};

const {name, age, hobby, premium} = user;

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;


for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}
