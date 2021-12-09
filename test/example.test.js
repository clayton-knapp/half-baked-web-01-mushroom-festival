// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderMushroom, renderFriend } from '../render-utils.js';
import findFriendByName from '../data-utils.js';

const test = QUnit.test;

test('test if renderMushroom() returns expected DOM node (HTML)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="mushroom"></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'the actual successfully outputs "<div class="mushroom"></div>"');
});

test('test if renderFriend() takes in a friend object and returns expected DOM node (HTML)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="friend"><p class="name">Bob Bob</p><div class="emoji">🙁</div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFriend({ name: 'Bob Bob', satisfaction: 1 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'successfully outputs "<div class="friend"><p class="name">Bob Bob</p><div class="emoji">🙁</div></div>"');

    //Arrange
    // Set up your arguments and expectations
    const expected2 = '<div class="friend"><p class="name">Jimbo</p><div class="emoji">😃</div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = renderFriend({ name: 'Jimbo', satisfaction: 3 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2.outerHTML, expected2, 'successfully outputs "<div class="friend"><p class="name">Jimbo</p><div class="emoji">😃</div></div>"');
});

test('test if findFriendByName returns friend object given friend name and array of friend objects ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        name: 'Soraya',
        satisfaction: 2
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const friendData = [
        {
            name: 'Erich',
            satisfaction: 2
        },
        {
            name: 'Sarah',
            satisfaction: 3
        },
        {
            name: 'Missael',
            satisfaction: 1
        },
        {
            name: 'Soraya',
            satisfaction: 2
        },
    ];
    const actual = findFriendByName('Soraya', friendData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected, 'successfully outputs object with name Soraya and satisfacton 2');

        //Arrange
    // Set up your arguments and expectations
    const expected2 = {
        name: 'Missael',
        satisfaction: 1
    };

    const actual2 = findFriendByName('Missael', friendData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual2, expected2, 'successfully outputs object with name Missael and satisfacton 1');


});