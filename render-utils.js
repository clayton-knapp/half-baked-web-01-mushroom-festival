export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const outerDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiDiv = document.createElement('div');

    // add friend, name, and emoji classes to the appropriate elements
    outerDiv.classList.add('friend');
    nameEl.classList.add('name');
    emojiDiv.classList.add('emoji');

    // put the friend's name in the nameEl
    nameEl.textContent = friend.name;
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    if (friend.satisfaction === 1) {
        emojiDiv.textContent = '🙁';
    } else if (friend.satisfaction === 2) {
        emojiDiv.textContent = '😐';
    } else if (friend.satisfaction === 3) {
        emojiDiv.textContent = '😃';
    }

    // append the emojiEl and nameEl to the outer div
    outerDiv.append(nameEl, emojiDiv);

    // return the outer div
    return outerDiv;
}