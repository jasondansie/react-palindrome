const palindrome = (str) => {
    if (str.length === 1 || str.length === 0) {
        return true;  
    }
    if(str[0] === str.slice(-1)) return palindrome(str.slice(1,-1))
    return false;
}

export default palindrome;