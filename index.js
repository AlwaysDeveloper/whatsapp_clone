class newTest {
    associate(User, ShortenUrl) {}
}

const instance = new newTest();

console.log(instance.associate.toString().match(/\(([^)]*)\)/)[1].split(','));