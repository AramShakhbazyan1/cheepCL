let comments = [
    {
        id: 1,
        text: "This is the first comment",
        parentId: null,
        replies: [
            {
                id: 2,
                text: "This is a reply to the first comment",
                parentId: 1,
                replies: [
                    {
                        id: 3,
                        text: "This is a nested reply",
                        parentId: 2,
                        replies: [] // Further nesting possible
                    }
                ]
            },
            {
                id: 5,
                text: "This is a reply to the first comment",
                parentId: 1,
                replies: [
                    {
                        id: 3,
                        text: "This is a nested reply",
                        parentId: 2,
                        replies: [{
                            id: 6,
                            text: "This is a nested reply",
                            parentId: 2,
                            replies: [{
                                id: 7,
                                text: "This is a nested reply",
                                parentId: 2,
                                replies: []
                            }, {
                                id: 8,
                                text: "This is a nested reply",
                                parentId: 2,
                                replies: []
                            }]
                        }]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "This is an independent comment",
        parentId: null,
        replies: []
    },
];

let answers = document.querySelector(".center-block");
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}
function generateCommentHTML(comment, nestingLevel) {
    let padding = nestingLevel * 50;
    let result =
        `
    <div style = "padding-left: ${padding}px; background-color : #${randomColor()}; width: 50%; border: 1px black solid;">
    
    <p>${comment.text}</p>
    </div>
    `;
    return result;
}

function appendComments(comments, nestingLevel) {
    answers.innerHTML += generateCommentHTML(comments, nestingLevel);
}

function initilizeComments(comments, nestingLevel) {
    for (let i = 0; i < comments.length; ++i) {
        appendComments(comments[i], nestingLevel);
        if (comments[i].replies !== undefined) {
            initilizeComments(comments[i].replies, nestingLevel + 1);
        }
    }
}

window.addEventListener("load", function () {
    initilizeComments(comments, 0);
});