/*

929. Unique Email Addresses
https://leetcode.com/problems/unique-email-addresses/

*/

const hash = email => {
    const localName = email.split('@')[0].split('+')[0];
    return localName.replaceAll('.', '') + '@' + email.split('@')[1];
}

const numUniqueEmails = emails => {
    const lookup = {};
    for (let email of emails) {
        lookup[hash(email)] = true;
    }
    return Object.keys(lookup).length;
};
