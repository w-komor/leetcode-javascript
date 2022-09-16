/*

811. Subdomain Visit Count
https://leetcode.com/problems/subdomain-visit-count/

*/

const subdomainVisits = cpdomains => {
    const map = {};

    const register = (name, visits) => {
        map[name] = map[name] ? map[name] + visits : visits;
    };

    for (let entry of cpdomains) {
        let visits = parseInt(entry.split(' ')[0]);
        let domain = entry.split(' ')[1];
        while (domain) {
            register(domain, visits);
            let dotIndex = domain.indexOf('.');
            domain = dotIndex === -1 ? undefined : domain.slice(dotIndex + 1);
        }
    }
    
    return Object.keys(map).map(key => `${map[key]} ${key}`);
};
