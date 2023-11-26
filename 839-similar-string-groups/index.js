const numSimilarGroups = strs => {
    const uf = new UnionFind(strs.length);

    const areSimilar = (str1, str2) => {
        let diffCount = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                diffCount++;
                if (diffCount > 2) return false;
            }
        }
        return true;
    };

    // Union similar strings
    for (let i = 0; i < strs.length; i++) {
        for (let j = i + 1; j < strs.length; j++) {
            if (areSimilar(strs[i], strs[j])) {
                uf.union(i, j);
            }
        }
    }

    // Count unique groups
    const uniqueGroups = new Set();
    for (let i = 0; i < strs.length; i++) {
        uniqueGroups.add(uf.find(i));
    }

    return uniqueGroups.size;
};