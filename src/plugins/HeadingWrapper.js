export default {
  install(app) {
    app.directive('heading-wrapper', {
      mounted(el) {
        const semanticTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] // Heading tags to target

        // Function to determine if an element should be ignored
        const shouldIgnore = (element) => {
          const ignore = element && element.classList.contains('heading-wrapper-ignore')
          // console.log(
          //   `Checking if element should be ignored: ${element.tagName}, ignore: ${ignore}`,
          // )
          return ignore
        }

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

        // Function to wrap each word in a new heading tag and replace the original heading
        const wrapWordsInHeadings = (root) => {
          const textNodes = getAllTextNodes(root)
          textNodes.forEach((node) => {
            const parent = node.parentNode

            if (parent && semanticTags.includes(parent.tagName) && !shouldIgnore(parent)) {
              // console.log(`Wrapping words in heading: ${parent.tagName}`)
              // Split the text content into words
              const words = node.nodeValue.split(/\s+/)

              // Create a DocumentFragment to hold the new heading elements
              const fragment = document.createDocumentFragment()

              // Replace the current parent with new headings, each containing one word
              words.forEach((word) => {
                // Create a new heading element (same type as the original parent)
                const newHeading = document.createElement(parent.tagName.toLowerCase())
                newHeading.textContent = word // Set the word as the content of the new heading

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
        const observer = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
              wrapWordsInHeadings(el)
            }
          }
        })

        observer.observe(el, { childList: true, subtree: true })
      },
    })
  },
}
