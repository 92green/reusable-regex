const {
    UUIDV4_REGEX,
    HEX_COLOUR_CODE_REGEX,
    TENANT_ID_REGEX,
    ISO8601_DATETIME_REGEX
} = require('.')


describe("REGEXES SUITE", () => {

    it.each([
        {input: "#f2f2f2", output: true},
        {input: "#fff", output: true},
        {input: "#000", output: true},
        {input: "#000000", output: true},
        {input: "#808080", output: true},
        {input: "#FF7F50", output: true},
        {input: "#ff7f50", output: true},
        
        {input: "#", output: false},
        {input: " # f f 7f50", output: false},
        {input: "#ff7f50 ", output: false},
        {input: " #ff7f50", output: false},
        {input: "FF7F50", output: false},
        {input: "ff7f50", output: false},
        {input: "fff", output: false},
        {input: "fff", output: false},
        {input: "rgb(255,255,255)", output: false},
        {input: "rgba(255,255,255,1)", output: false},
        {input: "red", output: false},
        {input: "blue", output: false},
        {input: "", output: false}
    ])("HEX_COLOUR_CODE_REGEX: $input should result in $output", ({input, output}) => {
        expect(
            HEX_COLOUR_CODE_REGEX.test(input)
        ).toEqual(output)
    })


    it.each([
        {input: "27efac41-3fc0-43ac-a992-171124219ead", output: true},
        {input: "008f6ae1-77bd-43b2-94ca-a37b3eea4316", output: true},
        {input: "5099072e-b00e-46a2-a86f-7ce6a481e99c", output: true},
        {input: "00000000-0000-0000-0000-000000000000", output: true},
    
        {input: "5099072e b00e 46a2 a86f 7ce6a481e99c", output: false},
        {input: " 5099072e-b00e-46a2-a86f-7ce6a481e99c", output: false},
        {input: "5099072e-b00e-46a2-a86f-7ce6a481e99c ", output: false},
        {input: "id", output: false},
        {input: "-", output: false},
        {input: "", output: false}
    ])("UUIDV4_REGEX: $input should result in $output", ({input, output}) => {
        expect(
            UUIDV4_REGEX.test(input)
        ).toEqual(output)
    })

    /*
    - at least 2 chars
    - ends and starts with letter
    - can contain hypens and underscores
    - max 100 chars
    */
    it.each([
        {input: "brand-brand", output: true},
        {input: "brand_brand", output: true},
        {input: "Brand_Brand", output: true},
        {input: "BRAND-BRAND", output: true},
        {input: "bb", output: true},
    
        {input: "b", output: false},
        {input: "_brand", output: false},
        {input: "brand_", output: false},
        {input: "-brand", output: false},
        {input: "brand-", output: false},
        {input: "--", output: false},
        {input: "brand with space", output: false},
        {input: "LONGBRANDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", output: false},
        {input: "", output: false}
    ])("TENANT_ID_REGEX: $input should result in $output", ({input, output}) => {
        expect(
            TENANT_ID_REGEX.test(input)
        ).toEqual(output)
    })
    
    it.each([
        {input: "2023-09-18T01:16:54.533Z", output: true},
        {input: "2022-10-25T01:16:54.300Z", output: true},

        {input: "2022-10-25t01:16:54.300z", output: false},
        {input: "", output: false},
        {input: " 2023-09-18T01:16:54.533Z", output: false},
        {input: "2023-09-18 01:16:54.533", output: false},
        {input: "2023-09-18", output: false},
        {input: "2023/09/18", output: false},
        {input: "2023-09-18T01:16:54.533", output: false},
    ])("ISO8601_DATETIME_REGEX: $input should result in $output", ({input, output}) => {
        expect(
            ISO8601_DATETIME_REGEX.test(input)
        ).toEqual(output)
    })
})