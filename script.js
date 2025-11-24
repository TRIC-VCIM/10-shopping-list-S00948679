const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventdefault(); // I put add item before prevent default initially

// Validate inputs - he lost me here initially
    if(itemInput.value === '') { // .value still confuses me - I was thinking you use it to receive integers
        alert('Please add an item to the list!'); // alert makes sense!
        return; // I definitely am starting to understand the useage of return
    }

    console.log('success'); // at this point I just started copying him, he sometimes doesn't really say what he was doing before doing it :( 

// it confuses me when he shifts gears and renames properties, why not just start with what you want from the get go? I do understand the other part of the video where he started to access parts of the documents ie: buttons, I also understand adjusting and removing elements from the dom.
}


// Event Listeners

itemForm.addEventListener('submit', addItem,);  // should false be added at the end of this? Ie: ('submit', addItem, false)?
// SM - no because false is the default value for the useCapture parameter

// It wasn't long before I started just copying what he had. He moves very fast and this tutorial was very easy to get lost. I have started looking more into event delegation.
// SM - Thanks for your feedback; it really helps.
// I am going to rethink using Brad's tutorials for now on. 
// I think I need to find someone who explains things a bit slower and in more detail.
