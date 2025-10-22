document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list')
  const productCards = productList?.getElementsByTagName('article')

  const searchInput = document.getElementById('search-input')
  const searchBtn = document.getElementById('search-btn')
  searchBtn?.addEventListener('click', (e) => {
    e.preventDefault()
    const query = searchInput.value.toLowerCase().trim()
    productCards &&
      Array.from(productCards).forEach((card) => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || ''
        const description = card.querySelector('p')?.textContent.toLowerCase() || ''
        const textData = title + ' ' + description
        if (!textData.includes(query)) card.style.display = 'none'
        else card.style.display = 'block'
      })
  })
})
