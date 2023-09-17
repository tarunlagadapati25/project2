'use strict';
function TemplateProcessor(template) {
    this.template = template;
}


TemplateProcessor.prototype.fillIn = function (data) {

    const placeholderRegex = /\{\{([^{}]+)\}\}/g;

    // Replace placeholders in the template with corresponding values from the data
    const filledTemplate = this.template.replace(placeholderRegex, (match, key) => {
        const value = data[key.trim()];
        return value !== undefined ? value : match; // If the key is not found in data,
        // keep the placeholder
    });

    return filledTemplate;
};
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);

console.log(str);
//Case: property doesn't exist in dictionary
var dictionary2 = {day: '1', year: '2016'};
var str2 = dateTemplate.fillIn(dictionary2);

console.log(str2);