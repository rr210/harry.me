// 自定义插件
function MdItReplace(md, ruleName, tokenType, iterator) {
  function scan(state) {
    for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline") continue;

      const inlineTokens = state.tokens[blkIdx].children;

      for (let i = inlineTokens.length - 1; i >= 0; i--) {
        if (inlineTokens[i].type !== tokenType) continue;

        iterator(inlineTokens, state.env.frontmatter, i);
      }
    }
  }

  md.core.ruler.push(ruleName, scan);
}

export default MdItReplace;
