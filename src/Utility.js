
function pickRandomProperty(obj)
{
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function pickRandomValue(obj)
{
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = obj[prop];
    return result;
}