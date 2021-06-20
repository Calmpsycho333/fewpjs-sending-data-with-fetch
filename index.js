// Add your code here
//test data 1.
//steps requests: url,http verb,header and the body

// //1 create a var equal to an obj containing a name and email.
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }

    //create another var set it equal to a obj
    //the obj should contain the http verb: post method,header and body.

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    //remember the stringify changes converts objs to strings.

    //now use the fetch method and call the obj method with it.

    return fetch("http://localhost:3000/users", configObj)
        .then(function (resp) {
            return resp.json();
        })
        //create another .then function method and reach into the html
        //manipulate the DOM, h2 element.
        //.then function should hold one argument object.

        .then(function (object) {
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            console.log(object);
        })
        //create a .catch function for error message

             .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error);
        })

};

//my way 

// function submitData(name, email) {

//   return  fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email
//         })
//     })

//     //handles the Post request, retrieves the new id value.
//     //appends it to the DOM.
//        .then(function(object) {
//             let h2 = document.createElement('h2');
//             h2.innerHTML = object.id;
//             document.body.appendChild(h2);
//             console.log(object);
//         })
    
//              .catch(function(error) {
//             let h3 = document.createElement('h3');
//             h3.innerHTML = error.message;
//             document.body.appendChild(h3);
//             console.log(error);
//         })
// }