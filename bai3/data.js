const products = [
  {
    id: 1,
    title: 'Sách Lập trình Python',
    description:
      'Cuốn sách hướng dẫn lập trình Python từ cơ bản đến nâng cao, phù hợp cho người mới bắt đầu.',
    price: 150000,
    imageUrl: './image.jpg',
  },
  {
    id: 2,
    title: 'JavaScript Nâng Cao',
    description:
      'Khám phá các khái niệm sâu về JavaScript, ES6+, closures, và lập trình bất đồng bộ.',
    price: 220000,
    imageUrl: './image.jpg',
  },
  {
    id: 3,
    title: 'Tai nghe Bluetooth X5',
    description:
      'Chất lượng âm thanh Hi-Fi, chống ồn chủ động (ANC), thời lượng pin lên đến 24 giờ.',
    price: 1250000,
    imageUrl: './image.jpg',
  },
  {
    id: 4,
    title: 'Chuột quang không dây Pro',
    description:
      'Thiết kế công thái học, 6 nút bấm, DPI có thể điều chỉnh (800-3200), kết nối ổn định.',
    price: 450000,
    imageUrl: './image.jpg',
  },
  {
    id: 5,
    title: 'Bàn phím cơ K87',
    description: 'Layout TKL 87 phím, Red switch, LED RGB 16 triệu màu, keycap PBT double-shot.',
    price: 1800000,
    imageUrl: './image.jpg',
  },
  {
    id: 6,
    title: 'Màn hình UltraView 27"',
    description: 'Tấm nền IPS, độ phân giải 2K (1440p), tần số quét 144Hz, 1ms, viền siêu mỏng.',
    price: 6800000,
    imageUrl: './image.jpg',
  },
  {
    id: 7,
    title: 'Sách "Clean Code"',
    description:
      'Học cách viết code sạch, dễ đọc và dễ bảo trì. Sách gối đầu giường cho lập trình viên.',
    price: 350000,
    imageUrl: './image.jpg',
  },
  {
    id: 8,
    title: 'Ổ cứng SSD 1TB EVO',
    description: 'Tốc độ đọc/ghi siêu nhanh (lên đến 3500MB/s), chuẩn NVMe M.2, độ bền cao.',
    price: 2500000,
    imageUrl: './image.jpg',
  },
  {
    id: 9,
    title: 'Bình giữ nhiệt 750ml',
    description: 'Chất liệu inox 304 an toàn, giữ nóng 12 giờ, giữ lạnh 24 giờ, không đọng sương.',
    price: 320000,
    imageUrl: './image.jpg',
  },
  {
    id: 10,
    title: 'Webcam 1080p Full HD',
    description:
      'Tích hợp micro lọc ồn, tự động lấy nét (autofocus), hoàn hảo cho học online và họp trực tuyến.',
    price: 790000,
    imageUrl: './image.jpg',
  },
  {
    id: 11,
    title: 'Sạc dự phòng 20000mAh',
    description: 'Hỗ trợ sạc nhanh 18W (PD & QC 3.0), 2 cổng ra USB-A và 1 cổng USB-C đa năng.',
    price: 550000,
    imageUrl: './image.jpg',
  },
  {
    id: 12,
    title: 'Ghế công thái học Pro',
    description:
      'Hỗ trợ cột sống, lưới thoáng khí, tựa đầu 3D, ngả lưng 135 độ, chân hợp kim nhôm.',
    price: 3100000,
    imageUrl: './image.jpg',
  },
]
function formatCurrency(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('product-list')
  const allProductsHTML = products
    .map((product) => {
      return `
      <article
        class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
      >
        <div class="h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
          <img
            src="${product.imageUrl} './image.jpg'

            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">${product.title}</h3>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">
            ${product.description}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-blue-600">${formatCurrency(product.price)}</span>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Mua
            </button>
          </div>
        </div>
      </article>
    `
    })
    .join('')

  productList.innerHTML = allProductsHTML
})
