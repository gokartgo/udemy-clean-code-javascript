// use Object.assign or spread operator for default argument
// before
// function draw(element, config) {
//   config.width = config.width || 200
//   config.height = config.height || 200
//   config.margin = config.margin || 28
//   config.padding = config.padding || 14
//   console.log(config);
// }
// draw(null, {margin: 100, padding: 10});
// draw(null, {margin: 0, padding: 0});

function draw(element, config) {
    let defaults = {
        width: 200,
        height: 200,
        margin: 28,
        padding: 14
    };
    // config = Object.assign(defaults, config);
    config = {
        ...defaults,
        ...config       //WARNING: config must come second!!
    }
    console.log(config);
}

draw(null, {margin: 0, padding: 0});