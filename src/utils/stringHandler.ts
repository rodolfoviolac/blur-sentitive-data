export function securityStringFieldCleaner(rawData: string, lookUpFieldsPatterns: RegExp[], stringReplacer: string = ''){
    let filteredString = rawData
    for(const pattern of lookUpFieldsPatterns) {
        filteredString = filteredString.replace(pattern,stringReplacer);
    }
    return filteredString;
}
