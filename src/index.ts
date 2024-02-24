import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {highlighting} from "./highlight";

export const topiLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      highlighting
    ]
  }),
  languageData: {
    commentTokens: {line: "//"}
  }
})

export function topi() {
  return new LanguageSupport(topiLanguage)
}
