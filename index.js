const question = document.querySelector('#question');
const btn = document.querySelector('#btn');

const tarotCards = {
    1: {
        title: 'Imperio',
        value: 'Tra-ta-ta'
    },
    2: {
        title: 'fulish',
        value: 'jnskjnskl'
    },
    3: {
        title: 'King',
        value: 'djkdsj'
    },
    4: {
        title: 'T',
        value: '1111'
    },
    5: {
        title: 'Y',
        value: '222'
    },
    6: {
        title: 'U',
        value: '444'
    },
    7: {
        title: 'I',
        value: '777'
    },
    8: {
        title: 'T',
        value: 'www'
    },
    9: {
        title: 'O',
        value: 'dddd'
    },
    10: {
        title: 'P',
        value: 'sss'
    },
    11: {
        title: 'Imperio',
        value: 'Tra-ta-ta'
    },
    12: {
        title: 'fulish',
        value: 'jnskjnskl'
    },
    13: {
        title: 'King',
        value: 'djkdsj'
    },
    14: {
        title: 'T',
        value: '1111'
    },
    15: {
        title: 'Y',
        value: '222'
    },
    16: {
        title: 'U',
        value: '444'
    },
    17: {
        title: 'I',
        value: '777'
    },
    18: {
        title: 'T',
        value: 'www'
    },
    19: {
        title: 'O',
        value: 'dddd'
    },
    20: {
        title: 'P',
        value: 'sss'
    },
    21: {
        title: 'Imperio',
        value: 'Tra-ta-ta'
    },
    22: {
        title: 'fulish',
        value: 'jnskjnskl'
    },
    23: {
        title: 'King',
        value: 'djkdsj'
    },
    24: {
        title: 'T',
        value: '1111'
    },
    25: {
        title: 'Y',
        value: '222'
    },
    26: {
        title: 'U',
        value: '444'
    },
    27: {
        title: 'I',
        value: '777'
    },
    28: {
        title: 'T',
        value: 'www'
    },
    29: {
        title: 'O',
        value: 'dddd'
    },
    30: {
        title: 'P',
        value: 'sss'
    },
    31: {
        title: 'Imperio',
        value: 'Tra-ta-ta'
    },
    32: {
        title: 'fulish',
        value: 'jnskjnskl'
    },
    33: {
        title: 'King',
        value: 'djkdsj'
    },
    34: {
        title: 'T',
        value: '1111'
    },
    35: {
        title: 'Y',
        value: '222'
    },
    36: {
        title: 'U',
        value: '444'
    },
    37: {
        title: 'I',
        value: '777'
    },
    38: {
        title: 'T',
        value: 'www'
    },
    39: {
        title: 'O',
        value: 'dddd'
    },
    40: {
        title: 'P',
        value: 'sss'
    },
    41: {
        title: 'Imperio',
        value: 'Tra-ta-ta'
    },
    42: {
        title: 'fulish',
        value: 'jnskjnskl'
    },
    43: {
        title: 'King',
        value: 'djkdsj'
    },
    44: {
        title: 'T',
        value: '1111'
    },
    45: {
        title: 'Y',
        value: '222'
    },
    46: {
        title: 'U',
        value: '444'
    },
    47: {
        title: 'I',
        value: '777'
    },
    48: {
        title: 'T',
        value: 'www'
    },
    49: {
        title: 'O',
        value: 'dddd'
    },
    50: {
        title: 'P',
        value: 'sss'
    },
    51: {
        title: 'Imperio',
        value: 'Tra-ta-ta'
    },
    52: {
        title: 'fulish',
        value: 'jnskjnskl'
    },
    53: {
        title: 'King',
        value: 'djkdsj'
    },
    54: {
        title: 'T',
        value: '1111'
    },
    55: {
        title: 'Y',
        value: '222'
    },
    56: {
        title: 'U',
        value: '444'
    },
    57: {
        title: 'I',
        value: '777'
    },
    58: {
        title: 'T',
        value: 'www'
    },
    59: {
        title: 'O',
        value: 'dddd'
    },
    60: {
        title: 'P',
        value: 'sss'
    },
    71: {
        title: 'Imperio',
        value: 'Tra-ta-ta'
    },
    72: {
        title: 'fulish',
        value: 'jnskjnskl'
    },
    73: {
        title: 'King',
        value: 'djkdsj'
    },
    74: {
        title: 'T',
        value: '1111'
    },
    75: {
        title: 'Y',
        value: '222'
    },
    76: {
        title: 'U',
        value: '444'
    },
    77: {
        title: 'I',
        value: '777'
    },
    78: {
        title: 'T',
        value: 'www'
    }
}

const cardNum = Math.floor(Math.random() * (78 - 1 + 1) + 1)
console.log(cardNum)

btn.addEventListener('click', answer)
question.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') answer();
});

function answer() {
    const userQuestion = question.value;
    if (userQuestion === '') {
        Swal.fire({
            title: "Please ask a question. Try again",
            background: 'black',
            color: 'white',
            confirmButtonColor: 'red'
        });
    } else {
    Swal.fire({
        title: tarotCards[cardNum].title,
        text: tarotCards[cardNum].value,
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      }).then((result) => {
        location.reload();
      });
    }
}
