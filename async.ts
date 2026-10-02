const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


const pay = async () => {
    
    console.log("1. Clicking pay ...");
    await wait(2000);


    console.log("2. Payment approved");
    console.log("3. Checking receipt");

};

pay();