export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

//implementacija errora u request:
//if(failed) return next(createError(401, 'Not authenticated'))
