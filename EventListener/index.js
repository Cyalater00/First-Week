// Caching DOM Elements

// creating vriables to conincide with our html ids so that we can maniplute them
const commentList = document.getElementById("commentList");
const commentInput = document.getElementById("commentInput");
const addCommentBtn = document.getElementById("addCommentBtn");

// console.log(commentList);
// console.log(commentInput);
// console.log(addCommentBtn);

function addComment(){
    // making a variable that stores the user input
    const newComment = commentInput.value

    // added this log to show that click does not add to our list
    console.log('clikced');

    // making sure empty comment are not added to our list
    if(newComment === '') return

    // creating a new li element
    commentList.appendChild(document.createElement('li')).textContent = newComment
    
    // clearing the input field
    commentInput.value = ''
}
// adding an event listener to the button
addCommentBtn.addEventListener('click', addComment)
