export default {
  install(app) {
    app.directive('style-text-nodes', {
      mounted(el, binding) {
        // Utility: Get all text nodes within an element
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

        const processedNodes = new Set() // To avoid re-wrapping
        const processedParents = new Set() // To avoid reapplying parent classes

        // Function: Wrap Words in a div (for headings only)
        const wrapWordsInHeadings = (node) => {
          const parent = node.parentNode

          if (
            parent &&
            !processedNodes.has(node) &&
            ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(parent.tagName)
          ) {
            processedNodes.add(node)

            // Split the text into words, preserving spaces
            const words = node.nodeValue.split(/(\s+)/)

            // Create a DocumentFragment for the new content
            const fragment = document.createDocumentFragment()

            words.forEach((word) => {
              if (word.trim() === '') {
                // Preserve spaces
                fragment.appendChild(document.createTextNode(word))
              } else {
                // Wrap word in a div
                const div = document.createElement('div')
                div.textContent = word
                fragment.appendChild(div)
              }
            })

            // Replace the text node with the new content
            parent.replaceChild(fragment, node)
          }
        }

        // Function: Wrap Entire Text Node in div (default behavior)
        const wrapTextNodes = (node) => {
          const parent = node.parentNode

          if (
            parent &&
            !processedNodes.has(node) &&
            !['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(parent.tagName) &&
            !parent.classList.contains('text-node-ignore')
          ) {
            processedNodes.add(node)

            // Add a class to the parent
            if (!processedParents.has(parent)) {
              parent.classList.add('text-node-parent')
              processedParents.add(parent)
            }

            // Wrap the text node in a div
            const div = document.createElement('div')
            div.classList.add('text-node-div')
            parent.replaceChild(div, node)
            div.appendChild(node)
          }
        }

        // Main Function: Apply Wrapping Logic
        const processNodes = (root) => {
          const textNodes = getAllTextNodes(root)
          textNodes.forEach((node) => {
            // Apply word wrapping for headings
            if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.parentNode.tagName)) {
              wrapWordsInHeadings(node)
            } else {
              // Apply standard text node wrapping for others
              wrapTextNodes(node)
            }
          })
        }

        // Initial Pass
        processNodes(el)

        // Set up a MutationObserver for dynamic content
        const observer = new MutationObserver(() => {
          processNodes(el)
        })

        observer.observe(el, { childList: true, subtree: true })
      },
    })
  },
}
