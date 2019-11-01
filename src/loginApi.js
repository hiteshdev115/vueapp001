var connection = require('./Api/dbconnection');
var jwt = require('jsonwebtoken');



exports.login = function(req, res)
{
        console.log('Login in main js');
        
        var email = req.body.email;
        var password = req.body.password;
        var queryString = 'SELECT * FROM user where email = '+"'"+email+"'"+' AND password ='+"'"+password+"'";
        
        connection.query(queryString, function(err,rows)
        {    
        	//console.log(rows);
            if (err) {
            	console.log('in Error');
        		var resultData = JSON.stringify({'success': false, 'data': "Problem in fetch data"});
    			res.send(resultData);
        	} else {
        		var token = jwt.sign({ id: rows.id }, "hitesh@123", {
			      expiresIn: 3600 // expires in 24 hours
			    });
        		if(rows.length > 0)
        		{
					rows[0].access_token = token;
					//console.log(rows);
            		var resultData = JSON.stringify({'success': true, 'access_token':token, 'userdetails': rows[0]});
    				res.send(resultData);
        		} else {
        			var resultData = JSON.stringify({'success': false, 'data': "No Data available"});
    				res.send(resultData);
        		}
        	}
            
            
        });
};

exports.register = function(req, res)
{
    console.log("register user action");
    //console.log(req.body);
    
    var data = { 
                username  : req.body.username,
                email  : req.body.newemail,
                password : req.body.newpassword
                //profile_pic  : profile_photo
            };
    console.log("=======");
    console.log(data);
    connection.query("INSERT INTO user SET ?", [data], function(err, result)
    {
    	console.log(err);
		if (err) {
			var resultData = JSON.stringify({'failed': true, 'data': "Something went wrong"});
			res.send(resultData);
		} else {
			var resultData = JSON.stringify({'success': true, 'data': result});
			console.log('success');
			res.send(resultData);
		}     	
      
    });   
};


