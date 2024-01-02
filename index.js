const question = document.querySelector('#question');
const btn = document.querySelector('#btn');

const tarotCards = {
    1: {
        title: 'STRENGTH',
        value: 'Your ability to move through fear to find the unshakable power within yourself.',
        image: 'https://i.imgur.com/flezz65.jpg'
    },
    2: {
        title: 'THE Fool',
        value: 'Following your heart with innocence and wonder.',
        image: 'https://i.imgur.com/Ka8DoZK.jpg'
    },
    3: {
        title: 'THE MAGICIAN',
        value: 'Tapping into your genius to find new ways of looking at the world.',
        image: 'https://i.imgur.com/4U2rQM1.jpg'
    },
    4: {
        title: 'THE HIGH PRIESTESS',
        value: 'Accessing your intuition and tuning in to the source of feminine power.',
        image: 'https://i.imgur.com/jfdHZrT.jpg'
    },
    5: {
        title: 'THE EMPRESS',
        value: 'Realizing your capacity to express beauty and to nurture others from a place of power.',
        image: 'https://i.imgur.com/6S6oj37.jpg'
    },
    6: {
        title: 'THE EMPEROR',
        value: 'Finding the source of your inner authority.',
        image: 'https://i.imgur.com/FACHa4t.jpg'
    },
    7: {
        title: 'THE HIEROPHANT',
        value: 'Using spiritual understanding and wisdom to perceive the world.',
        image: 'blob:https://imgur.com/b375f759-ae03-45ce-92a7-3944ff467faf'
    },
    8: {
        title: 'THE LOVERS',
        value: 'Finding harmony in relating with yourself and others while honoring your values.',
        image: 'https://i.imgur.com/2zSAhtD.jpg'
    },
    9: {
        title: 'THE CHARIOT',
        value: 'Following through on your intentions and manifesting your desires.',
        image: 'https://i.imgur.com/77sgUIa.jpg'
    },
    10: {
        title: 'THE HERMIT',
        value: 'Being a light unto yourself and finding your own way throught the darkness.',
        image: 'https://i.imgur.com/3SiQ0yn.jpg'
    },
    11: {
        title: 'THE WEEL OF FARTUNE',
        value: 'A turning point in your destiny and your ability to adapt to change.',
        image: 'https://i.imgur.com/rE3jCJP.jpg'
    },
    12: {
        title: 'JUSTICE',
        value: 'Your capacity to create a new reality through shattering old, limiting beliefs.',
        image: 'https://i.imgur.com/XDBP6bi.jpg'
    },
    13: {
        title: 'THE HANGED MAN',
        value: 'The necessity to look at something from a different perspective.',
        image: 'https://i.imgur.com/VcUxQ7f.jpg'
    },
    14: {
        title: 'DEATH',
        value: 'The transformation from one persceptual reality to another and the ending of habitual patterns.',
        image: 'https://i.imgur.com/Dfn6Qw6.jpg'
    },
    15: {
        title: 'TEMPERANCE',
        value: 'Our capacity to deal with something in a measured and patient way.',
        inage: 'https://i.imgur.com/hQ9GLL3.jpg'
    },
    16: {
        title: 'THE DEVIL',
        value: 'How we deal with our shadow self. This card calls us to cut through lies and see how honesnt we can be with ourselves.',
        image: 'https://i.imgur.com/OwmUC9z.jpg'
    },
    17: {
        title: 'THE TOWER',
        value: 'The collapse of beliefs or material structures that we hold dear. It is in the nonresistance where we can find peace and wisdom.',
        image: 'https://i.imgur.com/fspSCIF.jpg'
    },
    18: {
        title: 'THE STAR',
        value: 'Fonding something to focus on that can guide us through life. Our internal guidance system. Our North Star.',
        image: 'https://i.imgur.com/pKmf03U.jpg'
    },
    19: {
        title: 'THE MOON',
        value: 'Facing and allowing deep-seated fears to dissolve in the light of your awareness. Remove words from the mind and breathe.',
        image: 'https://i.imgur.com/jrhFQzC.jpg'
    },
    20: {
        title: 'THE SUN',
        value: 'Returning to the innocence and vitality of childhood.',
        image: 'https://i.imgur.com/QY5KyYv.jpg'
    },
    21: {
        title: 'JUDGMENT',
        value: 'Our capability to discern what is truly important and to use it to weed the garden of our life.',
        image: 'https://i.imgur.com/zIQ8dF1.jpg'
    },
    22: {
        title: 'THE WORLD',
        value: 'Endings. Coming to a place of completion and power internally and externally.',
        image: 'https://i.imgur.com/4HQiASe.jpg'
    },
    23: {
        title: 'ACE OF STRENGTH',
        value: 'The source of all creative energy is within you. You have the power to imagine, begin, and complete any project you set your mind to.',
        image: 'https://i.imgur.com/GcwzgkK.jpg'
    },
    24: {
        title: 'TWO OF STRENGTH',
        value: 'Growing and making progress toward a future goal. Enjoy discovering what you love to do.',
        image: 'https://i.imgur.com/saBRAji.jpg'
    },
    25: {
        title: 'THREE OF STRENGTH',
        value: 'Expanding your circle of inluence and communicating your ideas. Making progress.',
        image: 'https://i.imgur.com/KkSbag1.jpg'
    },
    26: {
        title: 'FOUR OF STRENGTH',
        value: 'The whole is greater than the sum of its parts. Seek out others to collaborate with.',
        image: 'https://i.imgur.com/G2XcfjH.jpg'
    },
    27: {
        title: 'FIVE OF STRENGTH',
        value: 'Being ficused totally on being in the moment to work together effectively. Letting go tof competition.',
        image: 'https://i.imgur.com/3nSEM1i.jpg'
    },
    28: {
        title: 'SIX OF STRENGTH',
        value: "Enjoy the success but don't get attached to it. What's your definition of success? Riding the highs and lows.",
        image: 'https://i.imgur.com/jLhLYIt.jpg'
    },
    29: {
        title: 'SEVEN OF STRENGTH',
        value: 'Dealing with the overwhelming. Letting go of what causes stress - perfectionism, desire, fear, future-tripping.',
        image: 'https://i.imgur.com/OwTdIk6.jpeg'
    },
    30: {
        title: 'EIGHT OF STRENGTH',
        value: 'Going with the flow and adapting to change. Hold the goal loosely and enjoy the journey.',
        image: 'https://i.imgur.com/thxtLQu.jpg'
    },
    31: {
        title: 'NINE OF STRENGTH',
        value: 'Finding the wellspring of resolve to push through hardship. A test of faith.',
        inage: 'https://i.imgur.com/bFjkBj2.jpg'
    },
    32: {
        title: 'TEN OF STRENGTH',
        value: "Making sure to speak up. Don't try to do it all. Delegate responsibility where you can. Express yourself.",
        image: 'https://i.imgur.com/oxMrDbF.jpg'
    },
    33: {
        title: 'PAGE OF STRENGTH',
        value: 'It take energy to do something awesome. Go for it! Engage your free spirit and follow your passion.',
        inage: 'https://i.imgur.com/EglLNIt.jpg'
    },
    34: {
        title: 'KNIGHT OF STRENGTH',
        value: 'Going full out and not looking back. Following your gut. Doing what it takes to make it happen.',
        image: 'https://i.imgur.com/QyvUinR.jpg'
    },
    35: {
        title: 'GUEEN OF STRENGTH',
        value: 'Spreading the love and letting your light shine. Having courage to take it to the next level.',
        image: 'https://i.imgur.com/Yr1UzcU.jpg'
    },
    36: {
        title: 'KING OF STRENGTH',
        value: 'Fully expressing your powers of leadership and realizing your vision. Teaching others.',
        image: 'https://i.imgur.com/qnfk8Ks.jpg'
    },
    37: {
        title: 'ACE OF INTELLIGENCE',
        value: 'Finding your inner wizard and using your genius to discover new ideas and have breakthroughs.',
        image: 'https://i.imgur.com/kXnopQ5.jpg'
    },
    38: {
        title: 'TWO OF INTELLIGENCE',
        value: 'How our inner monologue causes confusion and how we must find a way to listen to our heart.',
        image: 'https://i.imgur.com/PLgKzen.jpg'
    },
    39: {
        title: 'THREE OF INTELLIGENCE',
        value: 'Finding a way to heal and learn from anxiety and emotional pain.',
        image: 'https://i.imgur.com/8j2SUTh.jpg'
    },
    40: {
        title: 'FOUR OF INTELLIGENCE',
        value: 'Taking time to meditate before moving forward while making sure you are not avoiding action.',
        image: 'https://i.imgur.com/fESgpiB.jpg'
    },
    41: {
        title: 'FIVE OF INTELLIGENCE',
        value: 'The ways in which competition breeds conflict and divides us to create suffering.',
        image: 'https://i.imgur.com/qE7gjQQ.jpg'
    },
    42: {
        title: 'SIX OF INTELLIGENCE',
        value: 'Freeing yourself from burdens and old ways of thinking.',
        image: 'https://i.imgur.com/oYVmyhS.jpg'
    },
    43: {
        title: 'SEVEN OF INTELLIGENCE',
        value: 'How we play games, hide our real selves, and mask our true intentions out of fear or hurt.',
        image: 'https://i.imgur.com/KqlfgPq.jpg'
    },
    44: {
        title: 'EIGHT OF INTELLIGENCE',
        value: 'Untangling ourselves from guilty thoughts and self-punishment.',
        image: 'https://i.imgur.com/yyUQ6qA.jpg'
    },
    45: {
        title: 'NINE OF INTELLIGENCE',
        value: 'Looking at how thoughts can create turmoil and finding a way to observe them from a dispassionate space of stillness.',
        image: 'https://i.imgur.com/utlZyXP.jpg'
    },
    46: {
        title: 'TEN OF INTELLIGENCE',
        value: 'How we deal with what shows up in our lives. Do we avoid and deny? Do we react in anger? Do we remain conscious and aware?',
        image: 'https://i.imgur.com/Pa57fWZ.jpg'
    },
    47: {
        title: 'PAGE OF INTELLIGENCE',
        value: 'Discovering new ways of communicating your ideas and putting them into action.',
        image: 'https://i.imgur.com/uH2jsIa.jpg'
    },
    48: {
        title: 'KNIGHT OF INTELLIGENCE',
        value: 'Channeling raw ambition into a constructive, thoughtful, and focused plan.',
        image: 'https://i.imgur.com/CQNXAnG.jpg'
    },
    49: {
        title: 'QUEEN OF INTELLIGENCE',
        value: 'The necessity to clearly communicate what you desire from a space of loving-kindness.',
        image: 'https://i.imgur.com/8DvEUgZ.jpg'
    },
    50: {
        title: 'KING OF INTELLIGENCE',
        value: 'Using the power of your intellect clearly without letting if override your heart.',
        image: 'https://i.imgur.com/NmhMSBp.jpg'
    },
    51: {
        title: 'ACE OF WISDOM',
        value: 'Our ability to access the power of insight to heal emotions and love ourselves.',
        image: 'https://i.imgur.com/Is3dZxT.jpg'
    },
    52: {
        title: 'TWO OF WISDOM',
        value: 'Being able to be with someone - whether a friend or lover - and still retain your own sense of individuality.',
        image: 'https://i.imgur.com/FO9AhsA.jpg'
    },
    53: {
        title: 'THREE OF WISDOM',
        value: 'Taking time to celebrate the simple joy of aliveness with your friends.',
        image: 'https://i.imgur.com/bo1DKkK.jpg'
    },
    54: {
        title: 'FOUR OF WISDOM',
        value: 'Taking time to meditate amd let go of all the noisy thoughts that are in your head.',
        image: 'https://i.imgur.com/bjQan4g.jpg'
    },
    55: {
        title: 'FIVE OF WISDOM',
        value: 'Keeping a bright outlook and not letting past pain affect your interpretation of the present moment.',
        image: 'https://i.imgur.com/VuOLrEa.jpg'
    },
    56: {
        title: 'SIX OF WISDOM',
        value: 'Our ability to become a child and play in the world. A return to innocence.',
        image: 'https://i.imgur.com/oQEUwNS.jpg'
    },
    57: {
        title: 'SEVEN OF WISDOM',
        value: 'Our capacity to be discerning in our decisions and to choose from a place of clarity and wisdom.',
        image: 'https://i.imgur.com/fWS5WfM.jpg'
    },
    58: {
        title: 'EIGHT OF WISDOM',
        value: 'Finding a way out of past pain by having faith that somting better is waiting for you.',
        image: 'https://i.imgur.com/OX3YKfW.jpg'
    },
    59: {
        title: 'NINE OF WISDOM',
        value: 'Finding balance between enjoying our accomplishments and not slipping into complacency.',
        image: 'https://i.imgur.com/etHhOce.jpg'
    },
    60: {
        title: 'TEN OF WISDOM',
        value: 'Uniting the head and the heart. Relating to others and your environment in emotional balance.',
        image: 'https://i.imgur.com/kDYG6T4.jpg'
    },
    61: {
        title: 'PAGE OF WISDOM',
        value: 'Embarking on a new path sparked by your curiosity and creativity.',
        image: 'https://i.imgur.com/DXA6zX6.jpg'
    },
    62: {
        title: 'KNIGHT OF WISDOM',
        value: 'Trusting your passion, allowing yourself to dream big, and imagining the best happening for you.',
        image: 'https://i.imgur.com/bWPATzw.jpg'
    },
    63: {
        title: 'QUEEN OF WISDOM',
        value: 'Going into the depth of compassion and quieting the critical mind to create emotional stability.',
        image: 'https://i.imgur.com/kgnjpYR.jpg'
    },
    64: {
        title: 'KING OF WISDOM',
        value: 'Fully accepting this moment. Allowing compaints to dissolve. Being kind to yourself.',
        image: 'https://i.imgur.com/0mjQC58.jpg'
    },
    65: {
        title: 'ACE OF CHARISMA',
        value: 'A new opportunity and a time of manifestation and abundance.',
        image: 'https://i.imgur.com/0S0vRk2.jpg'
    },
    66: {
        title: 'TWO OF CHARISMA',
        value: 'Our ability to manage our time with grace and ease by getting clear on our priorities.',
        image: 'https://i.imgur.com/jTIRlP3.jpg'
    },
    67: {
        title: 'THREE OF CHARISMA',
        value: 'Using the power of team and learning how to collaborate.',
        image: 'https://i.imgur.com/HtujMPI.jpg'
    },
    68: {
        title: 'FOUR OF CHARISMA',
        value: 'Being careful with finances while not falling into fear or greed.',
        image: 'https://i.imgur.com/sGbRl87.jpg'
    },
    69: {
        title: 'FIVE OF CHARISMA',
        value: 'Finding out how to move out of lack mentality and to enjoy the abundance, in whatever form, showing up in our lives.',
        image: 'https://i.imgur.com/Z49OHGC.jpg'
    },
    70: {
        title: 'SIX OF CHARISMA',
        value: 'Giving and receiving fully while not sacrificing your values or exausting your energy.',
        image: 'https://i.imgur.com/cSBpnvF.jpg'
    },
    71: {
        title: 'SEVEN OF CHARISMA',
        value: 'The power of allowing your plans to develop and unfold without ergency or restlessness.',
        image: 'https://i.imgur.com/fglQG09.jpg'
    },
    72: {
        title: 'EIGHT OF CHARISMA',
        value: 'Paying attention to doing the simple things well. Slow and steady wins the race.',
        image: 'https://i.imgur.com/eNkTeBO.jpg'
    },
    73: {
        title: 'NINE OF CHARISMA',
        value: 'The capability to come out of "survival mode" and enjoy the abundance and self-sufficiency that we do have.',
        image: 'https://i.imgur.com/DF9cPD0.jpg'
    },
    74: {
        title: 'TEN OF CHARISMA',
        value: 'The security that comes with having a network of peaople who support you and your dreams. Long-term success.',
        image: 'https://i.imgur.com/faEzftV.jpg'
    },
    75: {
        title: 'PAGE OF CHARISMA',
        value: "Getting into action and rekindling a sense of adventure with even the small things. Realize what isn't working.",
        image: 'https://i.imgur.com/naureOW.jpg'
    },
    76: {
        title: 'KNIGHT OF CHARISMA',
        value: 'Finding  a way to enjoy routine, take responsibility for our own success, and let go of expectations. Good work speaks for itself',
        image: 'https://i.imgur.com/QETWEoh.jpg'
    },
    77: {
        title: 'QUEEN OF CHARISMA',
        value: 'Creating a nurturing space for yourself and others to achieve greatness. Maintaining work/life balance.',
        image: 'https://i.imgur.com/3MDivTR.jpg'
    },
    78: {
        title: 'KING OF CHARISMA',
        value: 'Reaping the fruits of your endeavors. Enjoying abundance while not getting lost in acquiring.',
        image: 'https://i.imgur.com/RKjXMoR.jpg'
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
        imageUrl: tarotCards[cardNum].image,
        imageWidth: 200,
        imageHeight: 400,
        imageAlt: tarotCards[cardNum].title.toLowerCase()
      }).then((result) => {
        location.reload();
      });
    }
}
