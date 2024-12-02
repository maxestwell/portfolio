export default {
  install(app) {
    app.directive('style-text-nodes', {
      mounted(el) {
        const semanticTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P'] // Add more semantic tags as needed

        // Function to get all text nodes in the element
        const getAllTextNodes = (root) => {
          const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false)
          const textNodes = []
          let node

          while ((node = walker.nextNode())) {
            if (node.nodeValue.trim() !== '') {
              textNodes.push(node)
            }
          }

          return textNodes
        }

        const processedParents = new Set() // Track processed parents to avoid re-applying styles

        // Function to find the nearest semantic parent for a given text node
        const findNearestSemanticParent = (node) => {
          let parent = node.parentElement
          while (parent && !semanticTags.includes(parent.tagName) && parent !== el) {
            parent = parent.parentElement
          }
          return parent
        }

        // Function to apply styles to the nearest semantic parent of each text node
        const styleTextNodes = (root) => {
          const textNodes = getAllTextNodes(root)
          textNodes.forEach((node) => {
            const parent = findNearestSemanticParent(node)
            if (parent && !processedParents.has(parent)) {
              processedParents.add(parent)
              parent.classList.add('text-node-parent')
            }
          })
        }

        // Initial pass to style the text nodes
        styleTextNodes(el)

        // Set up a Mutation Observer to handle dynamic content
        const observer = new MutationObserver(() => {
          styleTextNodes(el)
        })

        observer.observe(el, { childList: true, subtree: true })
      },
    })
  },
}
