/*
let req = ""
let query = ""
let results = ""
let netID = "mfw86112"
let pw = "Bluejays123"

let allCustomerData = []

customerSelect.onshow=function(){
  query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked.
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage1.textContent = "There are no pets in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtResults.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage1.textContent = "Error code: " + req.status

}
*/