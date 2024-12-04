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

        const processedNodes = new Set() // Track processed nodes to avoid duplicates
        const processedParents = new Set() // Track processed parents

        // Function to wrap each word in a span and move it to a new semantic tag (e.g., <h1>, <h2>)
        const wrapWordsInSemanticTags = (node) => {
          const parent = node.parentNode

          // Skip already processed nodes and ignore special cases
          if (!parent || parent.classList.contains('text-node-ignore')) return

          // Mark as processed
          processedNodes.add(node)

          // Add 'text-node-parent' class to the parent element
          if (!processedParents.has(parent)) {
            parent.classList.add('text-node-parent')
            processedParents.add(parent)
          }

          // Split the text content into words, preserving spaces
          const words = node.nodeValue.split(/(\s+)/)

          // Iterate over the words and wrap each word in a new semantic tag
          words.forEach((word) => {
            if (word.trim() === '') {
              return // Skip empty spaces
            }

            // Create a new semantic tag (copy the parent tag)
            const newElement = document.createElement(parent.tagName)
            newElement.classList.add('text-node-parent') // Add the same class to the new tag

            // Create a span element for the word
            const span = document.createElement('span')
            span.classList.add('word-wrapper')
            span.textContent = word // Set the word as the span content

            // Append the span inside the new semantic tag
            newElement.appendChild(span)

            // Replace the parent with the new element
            parent.parentNode.insertBefore(newElement, parent)
          })

          // Remove the original parent after creating new elements for each word
          parent.parentNode.removeChild(parent)
        }

        // Define the wrapTextNode function
        function wrapTextNode(node) {
          const span = document.createElement('span')
          span.textContent = node.textContent
          node.parentNode.replaceChild(span, node)
        }

        // Apply appropriate wrapping based on the tag name
        const applyStyling = (root) => {
          const textNodes = getAllTextNodes(root)

          textNodes.forEach((node) => {
            if (processedNodes.has(node)) return

            const parentTag = node.parentNode.tagName.toLowerCase()

            if (parentTag.startsWith('h')) {
              // Apply word wrapping for headings
              wrapWordsInSemanticTags(node)
            } else if (parentTag === 'p') {
              // Apply text node wrapping for paragraphs (original behavior)
              wrapTextNode(node)
            }
          })
        }

        // Initial pass to style the nodes
        applyStyling(el)

        // Set up a Mutation Observer for dynamic content
        const observer = new MutationObserver(() => {
          applyStyling(el)
        })

        observer.observe(el, { childList: true, subtree: true })
      },
    })
  },
}
