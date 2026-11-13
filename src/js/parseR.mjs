import antlr4 from "antlr4";
import { readFileSync } from "fs";
import RLexer from "./r-parser/RLexer.mjs";
import RParser from "./r-parser/RParser.mjs";
import RFilterParser from "./r-parser/RFilter.mjs";

// Read the R script file
const input = readFileSync("scripts/Vascular_plants_BEC_map.R", "utf-8");

// Step 1: Tokenize
const chars = new antlr4.InputStream(input);
const lexer = new RLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Step 2: Filter - this modifies token channels in place
const filterParser = new RFilterParser(tokens);
filterParser.buildParseTrees = true;
const filterTree = filterParser.stream();
console.log("Filter pass complete");

// Step 3: Parse with R grammar using the filtered tokens
tokens.reset(); // Reset to beginning after filtering
const rParser = new RParser(tokens);
rParser.buildParseTrees = true;
const rTree = rParser.prog();


// Method 1: Check node type directly

function examineTree(node, depth = 0) {
    const indent = "  ".repeat(depth);

    // Check if this is an Assignment node
    if (node.constructor.name === "AssignmentContext") {
        console.log(indent + "Found Assignment at line " + node.start.line);
        debugger;
    }

    console.log(indent + node.constructor.name);

    // Recurse through children
    if (node.children) {
        for (let child of node.children) {
            examineTree(child, depth + 1);
        }
    }
}

examineTree(rTree);


debugger;
console.log("Second pass parsed: " + rTree.toStringTree(filterParser.ruleNames));
