export const IsUser = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'user'){
        next()
    }else{
        res.status(403).json({
            success: false,
            auth: false,
            message: 'You are not user'
        })
    }
}
export const IsAdmin = async(req,res, next)=>{
    const userRole = req.user.role
    if(userRole == 'admin'){
        next()
    }else{
        res.status(403).json({
            success: false,
            auth: false,
            message: 'You are not admin'
        })
    }
}