
    let colors = ["red", "blue", "green", "yellow"];

    // Replace "green" (index 2) with "purple"
    colors.splice(2, 1, "purple");

    // New array with the first two colors (original is not changed)
    let firstTwo = colors.slice(0, 2);

    console.log("colors:", colors);     // ["red", "blue", "purple", "yellow"]
    console.log("firstTwo:", firstTwo); // ["red", "blue"]

