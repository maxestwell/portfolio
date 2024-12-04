export default {
  install(app) {
    app.directive('style-text-nodes', {
      mounted(el, binding) {
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

        const processedNodes = new Set() // Track processed nodes to avoid re-applying
        const processedParents = new Set() // Track processed parents

        // Function to wrap text nodes in a span and add class to the parent
        const wrapTextNodes = (root) => {
          const textNodes = getAllTextNodes(root)
          textNodes.forEach((node) => {
            if (processedNodes.has(node)) return // Skip already processed nodes

            const parent = node.parentNode
            if (parent && !parent.classList.contains('text-node-ignore')) {
              processedNodes.add(node)

              // Add class to the parent
              if (!processedParents.has(parent)) {
                parent.classList.add('text-node-parent')
                processedParents.add(parent)
              }

              // Create a span element
              const span = document.createElement('span')
              span.classList.add('text-node-span') // Add class for styling

              // Wrap the text node
              parent.replaceChild(span, node)
              span.appendChild(node) // Move the text node into the span
            }
          })
        }

        // Initial pass to wrap the text nodes
        wrapTextNodes(el)

        // Notify that wrapping is done
        if (binding.value && typeof binding.value === 'function') {
          binding.value()
        }

        // Set up a Mutation Observer to handle dynamic content
        const observer = new MutationObserver(() => {
          wrapTextNodes(el)
          // Notify that wrapping is done
          if (binding.value && typeof binding.value === 'function') {
            binding.value()
          }
        })

        observer.observe(el, { childList: true, subtree: true })
      },
    })
  },
}
