var users = [{userID : "US01", username : "John" , password : "1234", friends :["US02", "US04"]},
    { userID : "US02", username : "Barcelona" , password : "5678",  friends :["US01", "US04"]},
    { userID : "US03", username : "David" , password : "78910", friends :["US02", "US04"] },
    { userID : "US04", username : "Henry" , password : "78910", friends :["US01"] },
];
var post = [{postID: 1, ownerID: "US01", username: "John", content: "I'm feel really ", dateTime: "14/10/2017"},
    {postID: 2, ownerID: "US02", username: "Barcelona",content: "B", dateTime: "13/10/2017"},
    {postID: 3, ownerID: "US03", username: "David", content: "I'm feel really happy", dateTime: "15/10/2017"},
    {postID: 4, ownerID: "US01", username: "John", content: " Talk about HackUPC", dateTime: "14/10/2017"},
    {postID: 5, ownerID: "US04", username: "Henry", content: " It's quite difficult for submitting in short time", dateTime: "14/10/2017"},
]
var comment = [{commentID: 1, postID: 1, commenderID: "US02", content: "Yup, me too", dateTime: "13/10/2017"},
    {commentID: 2, postID: 1, commenderID: "US03", content: "Why i dont feel tired", dateTime: "13/10/2017"},
    {commentID: 3, postID: 2, commenderID: "US01", content: "Test comment", dateTime: "13/10/2017"}]
