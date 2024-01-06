async function itShould(description, testcase) {
    return it(description, async (done) => {
        await testcase();
        console.trace('HERE');
        done();
    });
}

export default itShould;