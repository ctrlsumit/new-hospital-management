class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorMiddlewares = (err,req,res,next) => {
err.message = err.message || "Internal Server Error";
err.statusCode = err.statusCode || 500;

if(err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;//like ak email humme save kar le hai aur koi new user name email daal rha hoo
    err = new ErrorHandler (message,400);
}
if(err.name === "JsonWebTokenError"){//token me error 
    const message = "Json Web Token is invalid try again";
    err = new ErrorHandler(message,400);
}
if(err.name  === "TokenExpireError"){//token expire
    const message = "Json Web Token is expire,try again";
    err = new ErrorHandler(message,400);
}
if(err.name  === "castError"){ // ye error jab jayega tab type pe string bola ho aur humne insert kar rahe ho number 
    const message = `invalid ${err.path}`;
    err = new ErrorHandler(message,400);
}

const errorMessage = err.errors
?Object.values(err.errors)
.map((error) => error.message)
.join(""):err.message;
return res.status(err.statusCode).json({//hum response baj rhaa hai message aur statuscode ki form me is success false hai to err present
    success : false,//to message uss error ko particular bajega 
    message :errorMessage,
})
}

export default ErrorHandler;