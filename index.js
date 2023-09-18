
// conservative limit for now
const TENANT_ID_REGEX = new RegExp(/^[a-zA-Z][a-zA-Z-_]{0,98}[a-zA-Z]$/);
const UUIDV4_REGEX = new RegExp(/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i); 
const ISO_DATETIME_REGEX = new RegExp(/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/);
const HEX_COLOUR_CODE_REGEX = new RegExp(/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/);


module.exports = {
    UUIDV4_REGEX,
    HEX_COLOUR_CODE_REGEX,
    TENANT_ID_REGEX,
    ISO_DATETIME_REGEX
}