export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Tugas Kuliah' | 'Bisnis Mahasiswa' | 'Jasa & Keahlian';
  imageUrl: string;
  sellerName: string;
  description: string;
  isBoosted: boolean;
  rating: number;
  sold: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Risol Mayo',
    price: 15000,
    category: 'Bisnis Mahasiswa',
    imageUrl: '/images/risol-mayo.jpg',
    sellerName: 'Dapur Mama Ria',
    description: 'Risol mayo crispy dengan isian ayam mayo yang lezat. Dibuat fresh setiap hari dengan bahan berkualitas tinggi.',
    isBoosted: true,
    rating: 4.8,
    sold: 127
  },
  {
    id: '2',
    name: 'Kaos Custom Design',
    price: 75000,
    category: 'Bisnis Mahasiswa',
    imageUrl: '/images/kaos-custom.jpg',
    sellerName: 'Sarah Creative',
    description: 'Kaos custom dengan desain unik dan berkualitas. Bahan cotton combed 30s, sablon DTF tahan lama.',
    isBoosted: false,
    rating: 4.5,
    sold: 89
  },
  {
    id: '3',
    name: 'Jasa Pembuatan Website Portofolio',
    price: 250000,
    category: 'Jasa & Keahlian',
    imageUrl: '/images/website-portofolio.png',
    sellerName: 'WebDev Pro',
    description: 'Jasa pembuatan website portofolio profesional untuk mahasiswa. Desain modern, responsive, dan siap untuk magang atau karir.',
    isBoosted: true,
    rating: 4.9,
    sold: 156
  },
  {
    id: '4',
    name: 'Jasa Pengetikan Dokumen',
    price: 5000,
    category: 'Tugas Kuliah',
    imageUrl: '/images/pengetikan.jpg',
    sellerName: 'Maya Typing',
    description: 'Jasa pengetikan dokumen profesional dengan tingkat akurasi tinggi. Harga per halaman.',
    isBoosted: false,
    rating: 4.6,
    sold: 234
  },
  {
    id: '5',
    name: 'Makanan Khas Daerah',
    price: 25000,
    category: 'Bisnis Mahasiswa',
    imageUrl: '/images/makanan.jpg',
    sellerName: 'Kuliner Nusantara',
    description: 'Makanan khas daerah dengan cita rasa autentik. Dibuat dengan resep turun temurun.',
    isBoosted: false,
    rating: 4.3,
    sold: 67
  },
  {
    id: '6',
    name: 'Jasa Desain Grafis',
    price: 150000,
    category: 'Jasa & Keahlian',
    imageUrl: '/images/desain-grafis.jpg',
    sellerName: 'Creative Studio',
    description: 'Jasa desain grafis profesional untuk logo, poster, brosur, dan kebutuhan branding lainnya.',
    isBoosted: true,
    rating: 4.7,
    sold: 98
  },
  {
    id: '7',
    name: 'Bimbingan Belajar Online',
    price: 200000,
    category: 'Tugas Kuliah',
    imageUrl: '/images/bimbel.jpg',
    sellerName: 'EduMaster',
    description: 'Bimbingan belajar online untuk berbagai mata pelajaran. Tutor berpengalaman dan metode interaktif.',
    isBoosted: false,
    rating: 4.4,
    sold: 72
  },
  {
    id: '8',
    name: 'Aksesoris Handmade',
    price: 35000,
    category: 'Bisnis Mahasiswa',
    imageUrl: '/images/aksesoris.jpg',
    sellerName: 'Handcraft Corner',
    description: 'Aksesoris handmade unik dan berkualitas. Dibuat dengan detail dan finishing yang rapi.',
    isBoosted: false,
    rating: 4.2,
    sold: 45
  },
  {
    id: '9',
    name: 'Jasa Fotografi Professional',
    price: 300000,
    category: 'Jasa & Keahlian',
    imageUrl: '/images/fotografi.jpg',
    sellerName: 'PhotoPro Studio',
    description: 'Jasa fotografi professional untuk acara, produk, dan portrait. Hasil berkualitas tinggi dengan editing profesional.',
    isBoosted: true,
    rating: 4.9,
    sold: 114
  }
];
