// Declare the formatCurrency function
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input')
  const searchBtn = document.getElementById('search-btn')
  searchBtn?.addEventListener('click', (e) => {
    e.preventDefault()
    const query = searchInput.value.toLowerCase().trim()
    const productCards = document.querySelectorAll('#product-list article')
    productCards.forEach((card) => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || ''
      const description = card.querySelector('p')?.textContent.toLowerCase() || ''
      const textData = title + ' ' + description
      if (!textData.includes(query)) card.style.display = 'none'
      else card.style.display = 'block'
    })
  })

  const addProductBtn = document.getElementById('add-product-btn')
  const addProductFormSection = document.getElementById('add-product-form-section')
  const addProductForm = document.getElementById('addProductForm')
  const cancelBtn = document.getElementById('cancelBtn')
  const errorMsg = document.getElementById('errorMsg')

  addProductBtn?.addEventListener('click', () => {
    addProductFormSection.classList.remove('hidden')
    addProductBtn.classList.add('hidden')
  })

  cancelBtn?.addEventListener('click', () => {
    addProductFormSection.classList.add('hidden')
    addProductBtn.classList.remove('hidden')
    addProductForm.reset()
    errorMsg.textContent = ''
    errorMsg.classList.add('hidden')
  })

  addProductForm?.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.getElementById('newName').value.trim()
    const price = document.getElementById('newPrice').value.trim()
    const desc = document.getElementById('newDesc').value.trim()

    // Validation
    if (!name) {
      errorMsg.textContent = 'Vui lòng nhập tên sản phẩm!'
      errorMsg.classList.remove('hidden')
      return
    }

    if (!price || isNaN(price) || Number(price) <= 0) {
      errorMsg.textContent = 'Vui lòng nhập giá hợp lệ (lớn hơn 0)!'
      errorMsg.classList.remove('hidden')
      return
    }

    if (!desc) {
      errorMsg.textContent = 'Vui lòng nhập mô tả sản phẩm!'
      errorMsg.classList.remove('hidden')
      return
    }

    // Tạo sản phẩm mới
    const newProduct = {
      id: products.length + 1,
      title: name,
      description: desc,
      price: Number(price),
      imageUrl: './image.jpg',
    }

    // Thêm vào mảng products
    products.unshift(newProduct)

    // Render lại danh sách
    renderProducts()

    // Reset form
    addProductForm.reset()
    errorMsg.textContent = ''
    errorMsg.classList.add('hidden')

    // Ẩn form
    addProductFormSection.classList.add('hidden')
    addProductBtn.classList.remove('hidden')
  })
})
