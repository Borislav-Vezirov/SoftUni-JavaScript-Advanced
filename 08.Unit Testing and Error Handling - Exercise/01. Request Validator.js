function solve(httpObj) {

    validateMethod();
    validateUri();
    validateVersion();
    validateMessage();

    return httpObj;
    
    function validateMethod(){
        let propName    = 'method'
        let validateArr = ['GET', 'POST', 'DELETE','CONNECT'];
        if(httpObj[propName] === undefined || !validateArr.includes(httpObj[propName])){
            throw new Error('Invalid request header: Invalid Method')
        }
    }
    
    function validateUri(){
        let propName      = 'uri';
        let regeExPattern = /^[\w.]+$/gm;
        let match = regeExPattern.test(httpObj[propName]);
        if(httpObj[propName] === undefined || !match){
            throw new Error('Invalid request header: Invalid URI')
        } 
    }

    function validateVersion(){
        let propName      = 'version';
        let validateArr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', ' HTTP/2.0 '];
        if(httpObj[propName] === undefined || !validateArr.includes(httpObj[propName])){
            throw new Error('Invalid request header: Invalid Version')
        } 
    }

    function validateMessage(){
        let propName      = 'message';
        let regeExPattern = /^[^<>\\&'"]*$/;
        let match = regeExPattern.test(httpObj[propName]);
        if(httpObj[propName] === undefined || !match){
            throw new Error('Invalid request header: Invalid Message')
        } 
    }
}
try{
    console.log(solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
      }));
}catch(e){
    console.log(e.message);
}
