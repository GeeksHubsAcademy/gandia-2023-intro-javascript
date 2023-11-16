var names = [
    'juan',
    'pedro',
    'maria',
    'jose',
]

function printItems(list, transform ) {
    for (var item of list) {
        console.log(
            transform(item)
        );

    }
}


function concat(a) {
    return a + '!';
}

printItems(names, concat);