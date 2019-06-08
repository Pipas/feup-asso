"use strict"

import { expect } from 'chai';
import { tokenMatcher } from "chevrotain";
import { lex, tokenVocabulary } from "../parser/lexer";
import 'mocha';



describe("Chevrotain Parser", () => {
    context("Step 1 - Lexing", () => {
        it("Can Lex a simple input", () => {
            let inputText = "MOV LEFT, ACC"
            let lexingResult = lex(inputText)

            expect(lexingResult.errors).to.be.empty

            let tokens = lexingResult.tokens
            expect(tokens).to.have.lengthOf(3)
            expect(tokens[0].image).to.equal("MOV")
            expect(tokens[1].image).to.equal("LEFT")
            expect(tokens[2].image).to.equal("ACC")


            // tokenMatcher acts as an "instanceof" check for Tokens
            expect(tokenMatcher(tokens[0], tokenVocabulary.Mov)).to.be.true
            expect(tokenMatcher(tokens[1], tokenVocabulary.Left)).to.be.true
            expect(tokenMatcher(tokens[2], tokenVocabulary.Acc)).to.be.true

        })
    })
})