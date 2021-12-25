/*

//cant customize at all or pass options
router.get('/', someMiddleware, (req, res, next) => {

})
function someMiddleware(req, res, next) {
    next()
}



// whats the difference? why use one over the other?
//makes it dynamic so you can reuse all over
//allows you to pass arguments, params, global vs local


router.get('/', someMiddleware("some param"), (req, res, next) => {

})


function someMiddleware(someParam) {
   return (req, res, next) => {
    next()
   }
}
*/
