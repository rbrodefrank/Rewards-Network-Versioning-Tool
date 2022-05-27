import React, { Component } from 'react';
import PizZip from 'pizzip';
import file from 'file-saver';

class VersioningTool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
                \u00AE = registered trademark
                \u2122 = trademark (TM superscript)
                \u2120 = service mark (SM superscript)
                \u2026 = ellipsis character
            */
            partners: [
                {
                    name: "AAdvantage\u00AE", // Loyalty program name
                    partner: "AA",
                    program: "AAdvantage Dining\u2120",
                    currency: "AAdvantage\u00AE miles",
                    xNumCurrency: "[3/5] {currency} per $1 spent", // AAdvantage\u00AE miles
                    bonusCurrency: "AAdvantage\u00AE bonus miles",
                    parentBrandIncentive: "for travel on American Airlines",
                    firstMention: {
                        program: "AAdvantage Dining\u2120",
                        currency: "American Airlines AAdvantage\u00AE miles",
                        bonusCurrency: "American Airlines AAdvantage\u00AE bonus miles",
                    },
                    SLTT: {
                        program: "AAdvantage Dining",
                        currency: "AAdvantage miles",
                        bonusCurrency: "AAdvantage bonus miles",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "All Caps",
                    },
                    punctuation: {
                        SL: "fullSentence",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "Mileage Plan\u2122",
                    partner: "AK",
                    program: "Mileage Plan Dining",
                    currency: "miles",
                    xNumCurrency: "[3/5] {currency} per dollar spent",
                    bonusCurrency: "bonus miles",
                    parentBrandIncentive: "for travel on Alaska Airlines and Alaska Global Partners",
                    firstMention: {
                        program: "Mileage Plan\u2122 Dining",
                        currency: "Mileage Plan\u2122 miles",
                        bonusCurrency: "Mileage Plan\u2122 bonus miles",
                    },
                    SLTT: {
                        program: "Mileage Plan Dining",
                        currency: "miles",
                        bonusCurrency: "bonus miles",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "Sentence",
                    },
                    punctuation: {
                        SL: "fullSentence",
                        HL: "fullSentence",
                        replaceEllipsis: true,
                        replaceExPoint: true,
                    },
                    globalMentions: true,
                },
                {
                    name: "Choice Privileges\u00AE", // \u00AE = registered trademark
                    partner: "CP",
                    program: "Eat & Earn",
                    currency: "points",
                    xNumCurrency: "5 {currency} per $1 spent",
                    bonusCurrency: "bonus points",
                    parentBrandIncentive: "for rewards like free nights, gift cards and more.",
                    firstMention: {
                        program: "Choice Privileges\u00AE Eat & Earn",
                        currency: "Choice Privileges\u00AE points",
                        bonusCurrency: "Choice Privileges\u00AE bonus points",
                    },
                    SLTT: {
                        program: "Eat & Earn",
                        currency: "points",
                        bonusCurrency: "bonus points",
                    },
                    casing: {
                        SL: "Title",
                        HL: "Title",
                        CTA: "Title",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                    },
                    globalMentions: true,
                },
                {
                    name: "Caesars Rewards",
                    partner: "CR",
                    program: "Caesars Rewards Dining",
                    currency: "Reward Credits",
                    xNumCurrency: "{currency}",
                    bonusCurrency: "Reward Credits",
                    parentBrandIncentive: "for use at Caesars Rewards\u00AE destinations",
                    firstMention: {
                        program: "Caesars Rewards Dining",
                        currency: "Reward Credits\u00AE",
                        bonusCurrency: "currency",
                    },
                    SLTT: {
                        program: "Caesars Rewards Dining",
                        currency: "Reward Credits",
                        bonusCurrency: "currency",
                    },
                    casing: {
                        SL: "Title",
                        HL: "All Caps",
                        CTA: "All Caps",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "SkyMiles",
                    partner: "DL",
                    program: "SkyMiles Dining",
                    currency: "miles",
                    xNumCurrency: "[3/5] {currency} per $1 spent",
                    bonusCurrency: "bonus miles",
                    parentBrandIncentive: "for travel on Delta Air Lines",
                    firstMention: {
                        program: "SkyMiles\u00AE Dining",
                        currency: "miles",
                        bonusCurrency: "bonus miles",
                    },
                    SLTT: {
                        program: "SkyMiles Dining",
                        currency: "miles",
                        bonusCurrency: "bonus miles",
                    },
                    casing: {
                        SL: "Title",
                        HL: "All Caps",
                        CTA: "All Caps",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "Fuel Rewards",
                    partner: "FR",
                    program: "Fuel Rewards Dining",
                    currency: "fuel savings",
                    xNumCurrency: "10¢/gal in {currency} for every $50 spent",
                    bonusCurrency: "Fuel Rewards Dining",
                    parentBrandIncentive: "",
                    firstMention: {
                        program: "Fuel Rewards\u00AE Dining",
                        currency: "Fuel Rewards\u00AE savings",
                        bonusCurrency: "currency",
                    },
                    SLTT: {
                        program: "Fuel Rewards Dining",
                        currency: "Fuel Rewards savings",
                        bonusCurrency: "currency",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Title",
                        CTA: "Title",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: true,
                },
                {
                    name: "Free Spirit\u2122",
                    partner: "FS",
                    program: "Free Spirit\u00AE Dining",
                    currency: "points",
                    xNumCurrency: "[3/5] {currency} per $1 spent",
                    bonusCurrency: "bonus points",
                    parentBrandIncentive: "for travel on Spirit\u00AE",
                    firstMention: {
                        program: "Free Spirit\u00AE Dining",
                        currency: "Free Spirit\u00AE points",
                        bonusCurrency: "Free Spirit\u00AE bonus points",
                    },
                    SLTT: {
                        program: "Free Spirit Dining",
                        currency: "points",
                        bonusCurrency: "bonus points",
                    },
                    casing: {
                        SL: "Title",
                        HL: "Title",
                        CTA: "All Caps",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "Hilton Honors",
                    partner: "HH",
                    program: "Hilton Honors Dining",
                    currency: "Bonus Points",
                    xNumCurrency: "[5/8] {currency} per $1 spent",
                    bonusCurrency: "Bonus Points",
                    parentBrandIncentive: "for use at Hilton\u00AE hotels worldwide",
                    firstMention: {
                        program: "Hilton Honors Dining",
                        currency: "Hilton Honors Bonus Points",
                        bonusCurrency: "Hilton Honors Bonus Points",
                    },
                    SLTT: {
                        program: "Hilton Honors Dining",
                        currency: "Bonus Points",
                        bonusCurrency: "Bonus Points",
                    },
                    casing: {
                        SL: "Title",
                        HL: "Lowercase",
                        CTA: "Lowercase",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "iDine",
                    partner: "ID",
                    program: "iDine",
                    currency: "benefits",
                    xNumCurrency: "benefits",
                    bonusCurrency: "bonus benefits",
                    parentBrandIncentive: "",
                    firstMention: {
                        program: "iDine\u00AE",
                        currency: "benefits",
                        bonusCurrency: "bonus benefits",
                    },
                    SLTT: {
                        program: "iDine",
                        currency: "benefits",
                        bonusCurrency: "bonus benefits",
                    },
                    casing: {
                        SL: "Title",
                        HL: "Title",
                        CTA: "Sentence",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "IHG\u00AE Rewards",
                    partner: "IHG",
                    program: "IHG Rewards Dine & Earn",
                    currency: "points",
                    xNumCurrency: "[5/8] {currency} per $1 spent",
                    bonusCurrency: "bonus points",
                    parentBrandIncentive: "for use at the IHG\u00AE family of hotels worldwide",
                    firstMention: {
                        program: "IHG\u00AE Rewards Dine & Earn",
                        currency: "IHG\u00AE Rewards points",
                        bonusCurrency: "IHG\u00AE Rewards Club bonus points",
                    },
                    SLTT: {
                        program: "IHG Rewards Dine & Earn",
                        currency: "points",
                        bonusCurrency: "bonus points",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "Sentence",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "Marriott Bonvoy",
                    partner: "MB",
                    program: "Eat Around Town",
                    currency: "points",
                    xNumCurrency: "{currency}",
                    bonusCurrency: "bonus points",
                    parentBrandIncentive: "",
                    firstMention: {
                        program: "Eat Around Town by Marriott Bonvoy\u00AE",
                        currency: "Marriott Bonvoy\u00AE points",
                        bonusCurrency: "Marriott Bonvoy\u00AE bonus points",
                    },
                    SLTT: {
                        program: "Eat Around Town by Marriott Bonvoy",
                        currency: "Marriott Bonvoy points",
                        bonusCurrency: "bonus points",
                    },
                    casing: {
                        SL: "Title",
                        HL: "Title",
                        CTA: "All Caps",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                    },
                    globalMentions: true,
                },
                {
                    name: "Neighborhood Nosh",
                    partner: "NN",
                    program: "Neighborhood Nosh",
                    currency: "rewards",
                    xNumCurrency: "rewards",
                    bonusCurrency: "bonus rewards",
                    parentBrandIncentive: "",
                    firstMention: {
                        program: "Neighborhood Nosh",
                        currency: "rewards",
                        bonusCurrency: "bonus rewards",
                    },
                    SLTT: {
                        program: "Neighborhood Nosh",
                        currency: "rewards",
                        bonusCurrency: "bonus rewards",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "All Caps",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                        replaceEllipsis: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "Rapid Rewards\u00AE",
                    partner: "SW",
                    program: "Rapid Rewards Dining",
                    currency: "points",
                    xNumCurrency: "three {currency} per dollar spent",
                    bonusCurrency: "bonus points",
                    parentBrandIncentive: "that can be used towards your next flight",
                    firstMention: {
                        program: "Rapid Rewards Dining\u00AE",
                        currency: "Rapid Rewards\u00AE points",
                        bonusCurrency: "Rapid Rewards\u00AE bonus points",
                    },
                    SLTT: {
                        program: "Rapid Rewards Dining",
                        currency: "points",
                        bonusCurrency: "bonus points",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "Sentence",
                    },
                    punctuation: {
                        SL: "Always",
                        HL: "fullSentence",
                        oxComma: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "TrueBlue",
                    partner: "TB",
                    program: "TrueBlue Dining",
                    currency: "points",
                    xNumCurrency: "3 {currency} for every dollar spent",
                    bonusCurrency: "bonus points",
                    parentBrandIncentive: "for travel on JetBlue",
                    firstMention: {
                        program: "TrueBlue Dining",
                        currency: "TrueBlue points",
                        bonusCurrency: "TrueBlue bonus points",
                    },
                    SLTT: {
                        program: "TrueBlue Dining",
                        currency: "points",
                        bonusCurrency: "bonus points",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "Sentence",
                    },
                    punctuation: {
                        SL: "Always",
                        HL: "Always",
                    },
                    globalMentions: false,
                },
                {
                    name: "MileagePlus\u00AE",
                    partner: "UA",
                    program: "MileagePlus Dining",
                    currency: "miles",
                    xNumCurrency: "[3/5] {currency} per $1 spent",
                    bonusCurrency: "bonus miles",
                    parentBrandIncentive: "for travel on United\u00AE",
                    firstMention: {
                        program: "MileagePlus Dining\u2120",
                        currency: "miles",
                        bonusCurrency: "bonus miles",
                    },
                    SLTT: {
                        program: "MileagePlus Dining",
                        currency: "miles",
                        bonusCurrency: "bonus miles",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "Sentence",
                    },
                    punctuation: {
                        SL: "",
                        HL: "",
                        oxComma: true,
                        replaceExPoint: true,
                    },
                    globalMentions: false,
                },
                {
                    name: "Upromise\u00AE",
                    partner: "UP",
                    program: "Upromise Dining",
                    currency: "cash back rewards",
                    xNumCurrency: "[2.5%/5%] cash back rewards",
                    bonusCurrency: "cash back rewards",
                    parentBrandIncentive: "",
                    firstMention: {
                        program: "Upromise\u00AE Dining",
                        currency: "cash back rewards",
                        bonusCurrency: "cash back rewards",
                        xNumCurrency: "[2.5%/5%] cash back rewards per $1 spent"
                    },
                    SLTT: {
                        program: "Upromise Dining",
                        currency: "cash back rewards",
                        bonusCurrency: "cash back rewards",
                    },
                    casing: {
                        SL: "Sentence",
                        HL: "Sentence",
                        CTA: "All Caps",
                    },
                    punctuation: {
                        SL: "Always",
                        HL: "Always",
                        oxComma: true,
                    },
                    globalMentions: false,
                }
            ],
            mentions: {
                global: false,
                program: false,
                currency: false,
                bonusCurrency: false,
            },
            activePartner: {},
            selectedPartners: ["AA", "AK", "CP", "CR", "DL", "FR", "FS", "HH", "IHG", "MB", "NN", "SW", "TB", "UA", "UP"],
        }
    }

    generate = (event) => {
        event.preventDefault();

        // Clear error text
        document.getElementsByClassName("text-error")[0].innerHTML = "";
        
        // Get all selected partners
        let partnerInput = document.getElementsByTagName('input')
        let selectedPartners = [];
        for (let i = 0; i < partnerInput.length; i++) {
            if (partnerInput[i].type !== "checkbox") continue;
            if (partnerInput[i].checked && partnerInput[i].value) selectedPartners.push(partnerInput[i].value);
        }
        this.setState({ selectedPartners: selectedPartners });

        if(this.state.selectedPartners.length < 1) {
            document.getElementsByClassName("text-error")[0].innerHTML = "No partners selected";
            return;
        }

        var docs = document.getElementById('doc');
        var parser = new DOMParser();
        var reader = new FileReader();

        if (!docs.files || docs.files.length === 0) {
            //No File Choosen
            document.getElementsByClassName("text-error")[0].innerHTML = "No files selected";
        } else if (!docs.files[0].name.includes('.docx')) {
            document.getElementsByClassName("text-error")[0].innerHTML = "Document is not of .docx type";
        } else {
            var doc = docs.files[0];
            var fileName = doc.name.slice(0, -5) + " Versioned";
            reader.readAsBinaryString(doc);
            reader.onerror = function (event) {
                document.getElementsByClassName("text-error")[0].innerHTML = "error reading file" + event;
            }

            const thisReact = this;
            reader.onload = function (event) {
                // Extract XML file from docx
                const content = event.target.result;
                var zip;
                var xmlString;
                try {
                    zip = new PizZip(content);
                } catch (err) {
                    document.getElementsByClassName("text-error")[0].innerHTML = "Error: Not acceptable file!";
                    return;
                }
                var utf8decoder = new TextDecoder();
                try {
                    xmlString = utf8decoder.decode(zip.files["word/document.xml"]._data.getContent());
                } catch (err) {
                    document.getElementsByClassName("text-error")[0].innerHTML = "Error: Corrupted or incorrect file!";
                    return;
                }
                var xmlObject = parser.parseFromString(xmlString, "text/xml");
                var baseBody = xmlObject.getElementsByTagName("w:body")[0];

                // Loop through all the document's paragraphs and combine wordruns
                var paragraphs = baseBody.getElementsByTagName("w:p");
                for (let i = 0; i < paragraphs.length; i++) {
                    // Get all the word runs in the paragraph
                    var runs = paragraphs[i].getElementsByTagName("w:r");
                    thisReact.combineRuns(paragraphs[i], runs);
                }

                // Remove section formatting and save it for later
                var sectPr = baseBody.getElementsByTagName("w:sectPr")[0];
                baseBody.removeChild(sectPr);

                // Create reusable body with variables
                var bodyClone = baseBody.cloneNode(true);

                // Version all Partners
                for (let i = 0; i < thisReact.state.partners.length; i++) {
                    // Check if partner is selected
                    if (!thisReact.state.selectedPartners.includes(thisReact.state.partners[i].partner)) continue;
                    
                    // Clone base
                    let body = bodyClone.cloneNode(true);
                    // // Set the current activePartner
                    // console.log("PARTNER: "+ thisReact.state.partners[i].name);

                    thisReact.setState({ activePartner: thisReact.state.partners[i] });
                    const keys = Object.keys(thisReact.state.mentions);
                    keys.forEach((key, index) => {
                        thisReact.state.mentions = {
                            global: false,
                            program: false,
                            currency: false,
                            bonusCurrency: false,
                        }
                    });

                    // Version for activePartner
                    thisReact.createPartnerXML(body, thisReact.activePartner);

                    // Add Partner to baseBody
                    // Create page break
                    let breakP = xmlObject.createElement("w:p");
                    let breakR = xmlObject.createElement("w:r");
                    let breakBr = xmlObject.createElement("w:br");
                    breakBr.setAttribute("w:type", "page");
                    breakR.appendChild(breakBr);
                    breakP.appendChild(breakR);
                    baseBody.appendChild(breakP);
                    // Add all partner paragraphs to baseBody
                    let wParagraphs = body.getElementsByTagName("w:p");
                    for (let p = 0; p < wParagraphs.length; p) {
                        baseBody.appendChild(wParagraphs[p]);
                    }
                }

                // Add section formatting back in
                baseBody.appendChild(sectPr);

                // Convert XML Object to string
                var serializer = new XMLSerializer();
                var stringXML = serializer.serializeToString(xmlObject);
                // Replace Old XML document with new data
                zip.file("word/document.xml", stringXML);

                thisReact.createDocument(zip, fileName);
            }
        }
    }

    createPartnerXML = (body) => {
        var paragraphs = body.getElementsByTagName("w:p");
        var section;

        // Cycle through all paragraph tags
        for (let i = 0; i < paragraphs.length; i++) {
            let textRuns = paragraphs[i].getElementsByTagName("w:t");
            let newSection = this.determineSection(textRuns);
            let skipSectionTitle = false;
            if (newSection) {
                section = newSection;
                if (newSection === "subject" || newSection === "headline") {
                    for (let key in this.state.mentions) this.state.mentions[key] = false;
                }
                if (textRuns.length <= 1) continue;
                else skipSectionTitle = true;
            }

            for (let j = 0; j < textRuns.length; j++) {
                if (skipSectionTitle && j === 0) continue;
                let txt = textRuns[j].childNodes[0].nodeValue;
                if (txt.length > 0) {
                    // Text to lower case before program names added (program names should be capitalized)
                    if ((section === "headline" && this.state.activePartner.casing.HL === "Lowercase") 
                    || (section === "subject" && this.state.activePartner.casing.SL === "Lowercase")
                    || (section === "cta" && this.state.activePartner.casing.CTA === "Lowercase"))
                        txt = txt.toLowerCase();

                    // Replace Variables
                    while (txt.includes('{') && txt.includes('}')) {
                        let replacementVar = txt.substring(txt.search("{"), txt.search("}") + 1) // Extract a variable from txt

                        let word = replacementVar.toLowerCase().replace(/[{}\s]/g, ""); // Change txt to lowercase & remove spacing

                        let replacementWord = this.replaceVariable(word, section);
                        if (replacementWord === "" || replacementWord === ".") replacementVar = " " + replacementVar + "|" + replacementVar;

                        let regEx = new RegExp(replacementVar);
                        txt = txt.replace(regEx, replacementWord);
                    }

                    // Change Casing
                    txt = this.caseChange(txt, section);

                    // Edit punctuation
                    let lastRun = j + 1 === textRuns.length ? true : false;
                    txt = this.editPunctuation(txt, section, lastRun);
                    
                    textRuns[j].childNodes[0].nodeValue = txt;
                }
            }
        }
    }

    replaceVariable = (word, section) => {
        switch (word) {
            case "name": // loyalty program name
                word = "name";
                break;
            case "partner": // partner
                word = "partner"
                break;
            case "program": // program
                word = "program";
                break;
            case "currency": // currency
                word = "currency";
                break;
            case "xnumberofcurrency": // xNumCurrency
                word = "xNumCurrency";
                break;
            case "bonuscurrency": // bonusCurrency
                word = "bonusCurrency";
                break;
            case "parentbrandincentive": //parentBrandIncentive
                word = "parentBrandIncentive";
                break;
            case "fullsentence":
                if ((section === "subject" && this.state.activePartner.punctuation.SL === "fullSentence") || 
                    (section === "headline" && this.state.activePartner.punctuation.HL === "fullSentence")) {
                    return ".";
                } else return "";
            case "oxcomma":
                if(this.state.activePartner.punctuation.oxComma) return ","
                else return "";
            default:
                return "(UNDEFINED VARIABLE)";
        }

        // Factor in section and # of mentions
        let returnVal;
        if (section === "subject" || section === "title") {
            returnVal = this.state.activePartner.SLTT[word] ? this.state.activePartner.SLTT[word] : this.state.activePartner[word];
        } else if (section === "headline" || section === "body" || section === "cta") {
            if (!(word in this.state.mentions) && this.state.mentions[word]) {
                returnVal = this.state.activePartner[word];
            } else {
                // Set return value to first mention or if first mention variable doesn't exist set to second mention
                returnVal = this.state.activePartner.firstMention[word] ? this.state.activePartner.firstMention[word] : this.state.activePartner[word];
                if (!this.state.activePartner.globalMentions) this.state.mentions[word] = true;
                else {
                    if (this.state.mentions.global === true) returnVal = this.removeTrademarkSymbols(returnVal);
                    if (typeof this.state.mentions[word] !== "undefined") this.state.mentions.global = true;
                    this.state.mentions[word] = true;
                }
            }
        } else {
            returnVal = this.state.activePartner[word];
        }

        if (returnVal === "") return returnVal;
        else if (!returnVal) return returnVal = "(UNDEFINED VARIABLE)";
        else return returnVal;
    }

    caseChange = (str, section, partner) => {
        partner = partner || this.state.activePartner;
        switch (section) {
            case "subject":
                if (partner.casing.SL === "Sentence") return this.sentenceCase(str);
                else if (partner.casing.SL === "Title") return this.titleCase(str);
                else if (partner.casing.SL === "All Caps") return str.toUpperCase();
                else if (partner.casing.SL === "Lowercase") return str; // If lowercasing needed casing adjustment it is done before word replacement
                break;
            case "headline":
                if (partner.casing.HL === "Sentence") return this.sentenceCase(str);
                else if (partner.casing.HL === "Title") return this.titleCase(str);
                else if (partner.casing.HL === "All Caps") return str.toUpperCase();
                else if (partner.casing.HL === "Lowercase") return str; // If lowercasing needed casing adjustment it is done before word replacement
                break;
            case "cta":
                if (partner.casing.CTA === "Sentence") return this.sentenceCase(str);
                else if (partner.casing.CTA === "Title") return this.titleCase(str);
                else if (partner.casing.CTA === "All Caps") return str.toUpperCase();
                else if (partner.casing.CTA === "Lowercase") return str; // If lowercasing needed casing adjustment it is done before word replacement
                break;
            default:
                return str;
        }
        return str;
    }

    titleCase = (str) => {
        let connectorWords = ["and", "on", "or", "for", "a", "an", "to", "of", "in", "at", "the", "into", "with", "by"];
        let name = this.state.activePartner.name;
        return str.split(' ').map(function (word) {
            if (connectorWords.includes(word)) return word;
            if (word.includes(name)) return word;
            else if (word[0]) return word.replace(word[0], word[0].toUpperCase());
            return word;
        }).join(' ');
    }

    sentenceCase = (str) => {
        if(str === undefined) return str.replace(str[0], str[0].toUpperCase());
        return str;
    }

    removeTrademarkSymbols = (str) => {
        let newStr = str.replace(/[\u00AE\u2122\u2120]/g, "");
        return newStr
    }

    editPunctuation = (str, section, last) => {
        let partner = this.state.activePartner;
        if (partner.punctuation.replaceEllipsis) str = this.punctNoEllipsis(str);
        if (partner.punctuation.replaceExPoint) str = this.punctNoExPoints(str);
        switch (section) {
            case "subject":
                if (partner.punctuation.SL === "Always") return this.punctAlways(str, last);
                else if (partner.punctuation.SL === "Never") return this.punctNever(str);
                break;
            case "headline":
                if (partner.punctuation.HL === "Always") return this.punctAlways(str, last);
                else if (partner.punctuation.HL === "Never") return this.punctNever(str);
                break;
            default:
                return str;
        }
        return str;
    }

    punctAlways = (str, last) => {
        if (last) {
            str = str.trim();
            if (str.length <= 2) return str;
            let lastLetter = str[str.length - 1];
            let punctuationArr = ['.', '?', '!', '\u2026'];
            if (punctuationArr.includes(lastLetter)) return str;
            return str + ".";
        }
        else return str;
    }

    punctNever = (str) => {
        let regex = /\.\.\.|[.!?\u2026]/g;
        return str.replace(regex, '');
    }

    punctNoExPoints = (str) => {
        let regex = /[!]/g;
        return str.replace(regex, '.');
    }

    punctNoEllipsis = (str) => {
        let regex = /\.\.\.|\u2026/g;
        return str.replace(regex, '.');
    }

    determineSection = (textRuns) => {
        for (let j = 0; j < textRuns.length; j++) {
            var text = textRuns[j].childNodes[0].nodeValue.toLowerCase();
            if (text.includes("subject line (50 characters)") || text.includes("subject line:")) return "subject";
            else if (text.includes("title tag (50 characters)") || text.includes("title tag:")) return "title";
            else if (text.includes("headline:" || text.includes("headline copy:"))) return "headline";
            else if (text.includes("body:") || text.includes("body copy:")) return "body";
            else if (text.includes("cta:")) return "cta";
        }
        return false;
    }

    createDocument = (zip, fileName) => {
        fileName = fileName || "Versioned Document";

        var out = zip.generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        //Output the document using Data-URI
        file.saveAs(out, fileName + ".docx");
    }

    combineRuns = (paragraph, runs) => {
        runs = runs || paragraph.getElementsByTagName("w:r");
        if (runs.length <= 1) return;
        for (var i = 0; i < runs.length; i++) {
            var ppr = runs[i].getElementsByTagName("w:rPr")[0];
            var tElement = runs[i].getElementsByTagName("w:t")[0];
            var text;
            if (tElement) {
                text = tElement.childNodes[0].nodeValue;
                while (i + 1 < runs.length) {
                    var nextPpr = runs[i + 1].getElementsByTagName("w:rPr")[0];
                    var nextText = runs[i + 1].getElementsByTagName("w:t")[0];
                    if (this.comparePpr(ppr, nextPpr) && nextText) {
                        text += nextText.childNodes[0].nodeValue;
                        var parent = nextText.parentNode;
                        parent.parentNode.removeChild(parent);
                    } else {
                        tElement.setAttribute("xml:space", "preserve");
                        runs = paragraph.getElementsByTagName("w:r");
                        break;
                    }
                }
                tElement.childNodes[0].nodeValue = text;
            }
        }
    }

    comparePpr = (first, second) => {
        if (typeof first == "undefined" || typeof second == "undefined") {
            if (typeof first == "undefined" && typeof second == "undefined") return true;
            else return false;
        }
        else if (first.isEqualNode(second)) return true;
        else return false;
    }

    addPartner = (value) => {
        if (!value) return;

        // Add partner to selected partners array
        let arr = this.state.selectedPartners;
        if (arr.includes(value)) return;
        arr.push(value);
        arr.sort();
        if (arr.length >= this.state.partners.length) {
            document.getElementsByName('checkboxAll')[0].checked = true;
            document.getElementById('checkboxAllText').innerHTML = this.checkboxAllText(true);
        }
        this.setState({ selectedPartners: arr });
    }

    removePartner = (value) => {
        if (!value) return;

        // Remove partner from selected partners array
        let arr = this.state.selectedPartners;
        let index = arr.indexOf(value);
        if (index < 0 || index >= arr.length) return;
        arr.splice(index, 1);
        this.setState({ selectedPartners: arr });

        // Change checkboxAll to not all selected
        if (document.getElementsByName('checkboxAll')[0].checked) {
            document.getElementsByName('checkboxAll')[0].checked = false;
            document.getElementById('checkboxAllText').innerHTML = this.checkboxAllText(false);
        }
    }

    checkboxChange = (event) => {
        if (event.target.checked) {
            if (!event.target.value) return;
            this.addPartner(event.target.value);
        } else {
            this.removePartner(event.target.value);
        }
    }

    checkboxAllText = (allChecked) => {
        let text = allChecked ? "Unselect all partners" : "Select all partners";
        return text;
    }

    checkboxAll = (event) => {
        if (event.target.checked) {
            document.getElementById('checkboxAllText').innerHTML = this.checkboxAllText(true);
            let inputArr = document.getElementsByTagName('input');
            for (let i = 0; i < inputArr.length; i++) {
                if (inputArr[i].type !== "checkbox") continue;
                this.addPartner(inputArr[i].value);
                inputArr[i].checked = true;
            }
        } else {
            document.getElementById('checkboxAllText').innerHTML = this.checkboxAllText(false);
            let inputArr = document.getElementsByTagName('input');
            for (let i = 0; i < inputArr.length; i++) {
                if (inputArr[i].type !== "checkbox") continue;
                inputArr[i].checked = false;
            }
            this.setState({ selectedPartners: [] });
        }
    }

    render() {
        return (
            <div className="App">
                <form>
                    <div id="partner-checkboxes">
                        {this.state.partners.map((element, i) =>
                            <div key={i} className="copy-size-large">
                                <input type="checkbox" name={element.name} value={element.partner} onChange={this.checkboxChange} defaultChecked />
                                <span>{element.partner}: {element.name}</span>
                            </div>
                        )}
                        <div className="copy-size-large">
                            <input type="checkbox" name={"checkboxAll"} value={""} onClick={this.checkboxAll} defaultChecked />
                            <span id="checkboxAllText">Unselect all partners</span>
                        </div>
                    </div>
                    <input type="file" id="doc" accept=".docx, application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                    <button onClick={this.generate}>Generate Document</button>
                    <p className="text-error copy-size-large"></p>
                </form>
            </div>
        );
    }
    // Versioning Tool by Ryan BrodeFrank
}

export default VersioningTool;