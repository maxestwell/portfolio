export default {
  install(app) {
    app.directive('heading-wrapper', {
      mounted(el) {
        const semanticTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] // Headings tags to target

        // Function to get all text nodes within a root element
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

        // Function to wrap each word in a span and replace the heading
        const wrapWordsInHeadings = (root) => {
          const textNodes = getAllTextNodes(root)
          textNodes.forEach((node) => {
            const parent = node.parentNode
            if (parent && semanticTags.includes(parent.tagName)) {
              // Split the text content into words
              const words = node.nodeValue.split(/\s+/)

              // Create a DocumentFragment to hold the new heading elements
              const fragment = document.createDocumentFragment()

              // Replace the current parent with new headings, each containing one word
              words.forEach((word) => {
                // Create a new heading element (same type as the original parent)
                const newHeading = document.createElement(parent.tagName.toLowerCase())

                // Create a span element for the word
                const span = document.createElement('span')
                // span.classList.add('word-wrapper') // Add class for styling
                span.textContent = word

                // Append the span to the new heading
                newHeading.appendChild(span)

                // Append the new heading to the fragment
                fragment.appendChild(newHeading)
              })

              // Replace the original parent with the fragment containing the new headings
              parent.replaceWith(fragment)
            }
          })
        }

        // Initial pass to wrap words in headings
        wrapWordsInHeadings(el)

        // Set up a Mutation Observer for dynamic content
        const observer = new MutationObserver(() => {
          wrapWordsInHeadings(el)
        })

        observer.observe(el, { childList: true, subtree: true })
      },
    })
  },
}
